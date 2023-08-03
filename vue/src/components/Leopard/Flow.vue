<template id="flow">
    <div v-touch="touch">
        <!--
        <headerbar :preselection="preselection" :stepflow="stepflow.length" :headerLabel="stepCurrent.label"
            :type="stepCurrent.type" :stepId="stepCurrent.id" :product="commodity.product" @go-prev="goPrev"
            @go-first="goFirst"></headerbar>
        -->
        
        <div class="container no-padding singleStepContainer">
            <step v-for="(step, index) in stepflow" :key="step.id + '_' + index" :step="step" :index="index"
                :preselection="preselection" :class="boxClass" :starturl="starturl" :commodity="commodity"
                @step-completed="onStepCompleted" @set-fare="saveFare" @set-payment="savePayment" @set-bill="saveBill"
                @update-header="updateHeader" @go-prev="goPrev"></step>
        </div>

    </div>
</template>


<script>
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);

import Step from "./Step.vue";
//import Exit from "./Exit.vue";
//import ConfigSummary from "./ConfigSummary.vue";

import { steplist } from "./model/steplist.js";
import { exitlist } from "./model/exitlist.js";

import { track } from "./services/analytics"
import { fill, promo, promoInStep } from "./services/stepFill"
import { removeHTMLTags } from "./services/helpers"

export default {
    name: "Flow",

    components: {
        Step,
        //Exit,
        //ConfigSummary,
    },

    props: ["luce", "gas", "path", "starturl"],

    data: function () {
        return {
            stepCurrent: {},
            promo: {},
            stepflow: [],
            // stepLabel: [],
            stepsValues: [],
            boxClass: "",
            exitOpen: false,
            fare: null,
            payment: "null",
            bill: "null",
            changeconfig: false,
            product: "link", // link, trend casa, ecc
            steplist: {},
            preselection: '',
            // apiURL: "https://publish-p45317-e970431.adobeaemcloud.com/graphql/execute.json/enigaseluce/step-carrello-by-stepv2;path=",
            apiURL: "/graphql/execute.json/enigaseluce/step-carrello-by-stepv2;path=",
            aemJsonUrlStep: "/content/dam/enigaseluce/content-fragment/carrello-a-step/trend-casa/step_0forniture",
            aemJsonUrl: "",
            aemJsonUrlPrev: "",
        };
    },

    watch: {
        luce: function () { // watch it
            this.init();
        },
        gas: function () { // watch it
            this.init();
        },
        path: function () { // watch it
            this.init();
        }
    },

    created: function () {
        console.log("Leopard Flow created", this.luce, this.gas, this.path);

        this.init();
    },
    destroied: function () { },
    mounted: function () {

        console.log("Leopard Flow mounted", this.luce, this.gas, this.path, this.preselection);
    },

    computed: {
        touch: function () {
            return {
                x: this.x,
                y: this.y,
                methods: true,
            };
        },
    },

    methods: {

        init: function () {
            document.body.classList.add("noScroll");

            //console.log('sf-route route created steplist', this.steplist);
            this.initiazlized = false;
            this.routeCompleted = false;
            this.steplist = steplist[this.product];
            this.exitlist = exitlist[this.product];
            // this.stepId = 0;
            this.offerName = "null";
            this.commodity = {
                dual: {
                    f: {},
                    f1: {},
                    f2: {},
                    discount: {},
                },
                luce: {
                    f: {},
                    f1: {},
                    f2: {},
                    discount: {},
                },
                gas: {
                    f: {},
                    discount: {},
                },
                selected: {
                    commodity: null,
                    fare: null,
                    payment: null,
                    bill: null
                }
            };

            // load the first step
            this.getStepData(this.path);

            this.preselection = (this.gas && this.luce) ? 'Luce e Gas' : (this.gas) ? 'Gas' : 'Luce';

            this.updateHeader(this.preselection);
        },

        // call API to get staep information
        getStepData: function (url) {
            //let apiURL = ( window.origin.indexOf('localhost') >= 0 ) ? '/apiURL' + this.apiURL : this.apiURL ;

            fetch(this.apiURL + url, { mode: "no-cors" })
                .then((res) => res.json())
                .then((resultJson) => {
                    this.stepInit(resultJson.data.enigaseluceCfNuovoCarrelloAStepByPath.item);
                })
                .catch((err) => console.error(err));
        },

        // extract data from JSON and step inizialization
        stepInit: function (stepData) {
            console.log("Route stepInit", stepData);

            this.routeCompleted = false;

            let stepCurrent = fill(stepData);

            if (!this.initiazlized) {
                this.initiazlized = true;

                //- forced entry, not based on selection
                if (stepData.event_category?.length > 0) {
                    this.updateHeader(stepData.event_category);
                }
                this.promo = promo(stepData);

                //- set commodity base info --
                if (stepData.offertaRiferimentoResid) {
                    this.setCommodity(stepData.offertaRiferimentoResid, true);
                } else {
                    this.setCommodity(stepData.offertaRiferimentoBusiness, false);
                }

                //- extract price from fragment
                this.setAllPrices(
                    stepData.offertaRiferimentoResid.contentFragmentLuce,
                    stepData.offertaRiferimentoResid.contentFragmentGas
                );
            } else {
                this.promo.active = promoInStep(stepData);
            }

            stepCurrent.promo = this.promo;

            this.stepActivate(stepCurrent);


        },

        // make the step active
        stepActivate: function (step) {
            console.log("Route stepActivate", step, this.commodity);

            this.stepCurrent = step;
            this.stepCurrent.index = this.stepflow.length;

            if (step.type == "commodity-setup") {
                this.resetFarePaymentBill();
            }

            //- update step info --
            this.stepflow.push(step);

            this.boxClass = "step-box-" + this.stepflow.length;

            //- track new step activation ---
            track(this.commodity.selected.commodity, step.micro_step, step.micro_step, this.commodity.selected.fare, this.commodity.product, this.commodity.residenziale ? 'Residenziale' : 'Business');
        },

        // prepare for next step
        onStepCompleted: function (val) {
            console.log("Route onStepCompleted", val, this.stepCurrent, this.commodity.selected);

            let path = "";
            let nextStepId = this.stepCurrent.id + val[1].toString();
            console.log("Route onStepCompleted nextStepId", nextStepId);

            if (!this.stepCurrent.singlePath) {
                // multiple possible path: find the right one based on above answer
                for (let i = 0; i < this.stepCurrent.next_steps.length; i++) {
                    const element = this.stepCurrent.next_steps[i].nomeStep;

                    if (element == nextStepId) {
                        path = this.stepCurrent.next_steps[i]._path;
                    }
                }
            } else {
                // single path 
                path = this.stepCurrent.next_steps[0]._path;
            }

            //- call api to get data fron the next step
            this.getStepData(path);

            this.stepsValues.length = val[0];
            this.stepflow = this.stepflow.splice(0, val[0] + 1);
        },

        saveSupplyCode: function (val) {
            console.log("Route saveSupplyCode", val);
            this.supplyCode = val;
        },

        saveFare: function (val) {
            console.log("Route saveFare", val);
            this.commodity.selected.fare = val;
        },

        savePayment: function (val) {
            this.commodity.selected.payment = val;
            console.log("Route savePayment", val, this.commodity);
        },

        saveBill: function (val) {
            this.commodity.selected.bill = val;
            console.log("Route saveBill", val, this.commodity);
        },

        resetFarePaymentBill: function () {
            this.commodity.selected.fare = null;
            this.commodity.selected.payment = null;
            this.commodity.selected.bill = null;
        },

        updateHeader: function (val) {
            console.log("Route updateHeader", val);
            this.preselection = val;
            this.commodity.selected.commodity = val;
        },

        setCommodity: function (product, residenziale) {
            this.commodity.residenziale = residenziale;
            this.commodity.codiceCampagna = product.codiceCampagna;
            this.commodity.codiceCanale = product.codiceCanale;
            this.commodity.codiceConvenzione = product.codiceConvenzione;
            this.commodity.codiceOfferta = product.codiceOfferta;
            this.commodity.codiceTpCanale = product.codiceTpCanale;
            this.commodity.product = removeHTMLTags(product.nomeOfferta.html);

            this.commodity.dual.discount.digital = product.scontoDigitaleDualEnabled;
            this.commodity.dual.discount.direct = product.scontoAddebitoDirettoDual;
            this.commodity.dual.discount.dettaglio = product.paragrafoBoxScontoConfigurazionePagamentoAttivabileDual;

            this.commodity.force = [
                product.obbligaConfigurazionePagamento,
                product.obbligaTipoBolletta
            ];
        },

        setAllPrices: function (luce, gas) {
            console.log("route setAllPrices", luce, gas);

            let residenziale = this.commodity.residenziale;

            //- ---

            if (!luce.corrispettivoVariabileLuceMonorario) {
                this.commodity.luce.variabile = true;
                this.commodity.luce.f.base = this.convertPrice(luce.corrispettivoLuceMonorarioPrezzo);
                this.commodity.luce.f.discount = this.convertPrice(luce.corrispettivoLuceMonorarioScontato);
                this.commodity.luce.f.tooltip = removeHTMLTags(luce.tooltipCarrelloLuceH24.html);
                this.commodity.luce.f1.base = residenziale ? this.convertPrice(luce.corrispettivoLuceBiorarioF1) : this.convertPrice(luce.corrispettivoLuceBiorarioF1);
                this.commodity.luce.f1.discount = residenziale ? this.convertPrice(luce.corrispettivoLuceBiorarioF1Scontato) : this.convertPrice(luce.corrispettivoLuceBiorarioF1Scontato);
                this.commodity.luce.f1.tooltip = removeHTMLTags(luce.tooltipCarrelloLuceF1.html);
                this.commodity.luce.f2.base = residenziale ? this.convertPrice(luce.corrispettivoLuceBiorarioF23) : this.convertPrice(luce.corrispettivoLuceBiorarioF23);
                this.commodity.luce.f2.discount = residenziale ? this.convertPrice(luce.corrispettivoLuceBiorarioF23Scontato) : this.convertPrice(luce.corrispettivoLuceBiorarioF23Scontato);
                this.commodity.luce.f2.tooltip = removeHTMLTags(luce.tooltipCarrelloLuceF23.html);
            } else {
                this.commodity.luce.variabile = false;
                this.commodity.luce.f.base = this.convertPrice(luce.corrispettivoVariabileLuceMonorario);
                this.commodity.luce.f.discount = this.convertPrice(luce.corrispettivoVariabileLuceMonorarioScontato);
                this.commodity.luce.f.tooltip = removeHTMLTags(luce.tooltipCarrelloLuceH24.html);
                this.commodity.luce.f1.base = this.convertPrice(luce.corrispettivoVariabileLuceF1);
                this.commodity.luce.f1.discount = this.convertPrice(luce.corrispettivoVariabileLuceF1);
                this.commodity.luce.f1.tooltip = removeHTMLTags(luce.tooltipCarrelloLuceF1.html);
                this.commodity.luce.f2.base = this.convertPrice(luce.corrispettivoVariabileLuceF23);
                this.commodity.luce.f2.discount = this.convertPrice(luce.corrispettivoVariabileLuceF23);
                this.commodity.luce.f2.tooltip = removeHTMLTags(luce.tooltipCarrelloLuceF23.html);
            }
            this.commodity.luce.indexed = luce.prezzoAllingrossoLuce == "PUN" ? true : false;
            this.commodity.luce.discountSecondYear = luce.invertPricesLuce ? true : false;
            this.commodity.luce.commercializzazione = luce.commercializzazioneLuceMese;
            this.commodity.luce.discount.digital = luce.scontoDigitaleLuceEnabled;
            this.commodity.luce.discount.direct = luce.scontoAddebitoDirettoLuce;
            this.commodity.luce.discount.percent = (luce.scontoPercentualeLuce) ? luce.scontoPercentualeLuce[0] : 0;
            this.commodity.luce.discount.dettaglio = luce.paragrafoBoxScontoConfigurazionePagamentoAttivabileLuce;

            this.commodity.gas.f.base = this.convertPrice(gas.commercializzazioneGasSmc);
            this.commodity.gas.f.discount = this.convertPrice(gas.commercializzazioneGasSmc);
            this.commodity.gas.discountSecondYear = gas.invertPricesGas ? true : false;
            this.commodity.gas.indexed = gas.prezzoAllingrossoGas == "PSV" ? true : false;
            this.commodity.gas.commercializzazione = gas.commercializzazioneGasMese;
            this.commodity.gas.discount.digital = gas.scontoDigitaleGasEnabled;
            this.commodity.gas.discount.direct = gas.scontoAddebitoDirettoGas;
            this.commodity.gas.discount.percent = (gas.scontoPercentualeGas) ? gas.scontoPercentualeGas[0] : 0;
            this.commodity.gas.discount.dettaglio = luce.paragrafoBoxScontoConfigurazionePagamentoAttivabileGas;

            this.commodity.dual.discount.percent = this.commodity.gas.discount.percent || this.commodity.luce.discount.percent;

            //attivazioneVariantePrezziIndicizzati

            // tipologie sconti
            // sconto digitale attivo o no? (sia per luce che per gas)
            // attivazioneVariantePrezziIndicizzati > prezzo all'ingrosso PSV(gas) PUN(luce) chiedere a luca e monica
            // console.log ("prices", this.f, this.f1, this.f2, this.gas);
        },

        convertPrice: function (price) {
            return price ? parseFloat(price.replace(/,/g, ".")) : 0;
        },

        goStep: function (i) {
            console.log("Route goStep");

            //RIATTIVARE*** $('[sf-component="cart-modal-exits"] .exit.active').removeClass('active');
            this.exitOpen = false;

            this.stepsValues = this.stepsValues.splice(0, i - 1);
            this.stepflow = this.stepflow.splice(0, i);
            console.log("this.stepflow.length: ", this.stepflow.length);

            this.stepActivate(this.stepflow.pop());
        },

        swipeDown: function () {
            console.log("Route swipeDown");

            this.prevStep = this.stepflow.length - 1;
            console.log("prevStep -->", this.prevStep);

            if (this.prevStep > 0 && !this.routeCompleted && !this.changeconfig) {
                console.log("Swipe down allowed, prevStep = ", this.prevStep);
                this.goStep(this.prevStep);
            } else {
                console.log("Swipe down not allowed");
            }
        },

        goNext: function () {
            console.log("Route goNext", " --- ");
        },

        goFirst: function () {
            console.log("Route goFirst", " --- ");
            this.goStep(1);
        },

        goPrev: function () {
            console.log("Route goPrev");

            this.prevStep = this.stepflow.length - 1;
            console.log("prevStep -->", this.prevStep);

            if (this.prevStep > 0 && !this.routeCompleted && !this.changeconfig) {
                console.log("goPrev allowed, prevStep = ", this.prevStep);

                this.goStep(this.prevStep);
            } else {
                console.log("goPrev not allowed");
            }
        },

        gotolaststep: function () {
            console.log("gotolaststep | Route");

            this.exitOpen = false;
            this.routeCompleted = false;

            this.goStep(this.stepflow.length);
        },

        reconfig: function () {
            console.log("Route reconfig");

            this.changeconfig = true;
        },

        closeconfigsummary: function () {
            console.log("Route closeconfigsummary");

            this.changeconfig = false;
        },

        changeflow: function (node) {
            console.log("Route changeflow", node);

            this.routeCompleted = false;
            this.goStep(node);
        },
    },
};
</script>

<style lang="scss">
$min-desktop-res: 1024px;
$max-mobile-res: 1023px;
$desktop-step-height: 595px; //era 555px
$mobile-step-height: 100vh;
$headerbar-height: 85px;

/* Colors */
$primary: #ffcd00;
$green: #7fa545;
$green30: #2f460a;
$red: #ff4d6c;
$violet: #917ba8;

$blue-teal: #0885ae;
$link-water: #cee7ef;
$jade: #21ad72;
$blue-romance: #d7f0e5;

$info-border: $blue-teal;
$info-bkg: $link-water;
$active-border: $jade;
$active-bkg: $blue-romance;

$white: white;
$gray10: #f3f3f3;
$gray15: #f4f4f4;
$gray20: #eaeaea;
$gray30: #b9b9b9;
$gray80: #767676;
$gray90: #444444;
$dark: #333333;
$black: black;

.noScroll {
    overflow: hidden;
}

.sf-cart-modal[sf-component="cart-modal"][sf-version="1.0"] {
    font-family: "Source Sans Pro", sans-serif;
    /*
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    */
    //background-color: $gray10;
    background-color: rgba(51, 51, 51, 0.8);
    background-attachment: fixed;
    z-index: -10;
    opacity: 0;

    .mobileOnly {
        @media (min-width: $min-desktop-res) {
            display: none !important;
        }
    }

    .desktopOnly {
        @media (max-width: $max-mobile-res) {
            display: none !important;
        }
    }

    &.open {
        opacity: 1;
        z-index: 1500;
        display: flex;
        //overflow-y: auto; // cancellare quando implementato
    }

    >div {
        border-radius: 12px;
        width: 100%;
        height: 680px; // era 640px;
        background-color: $gray10;
        margin: auto;
        overflow: hidden;

        @media (max-width: $max-mobile-res) {
            width: 100vw;
            height: 100vh;
            border-radius: 0px;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .tooltip-step {
        cursor: pointer;
        position: relative;
        display: inline-block;
        width: 22px;
        height: 22px;
        background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/tooltip-copy%20(1).svg");
        //background-image: url("../../assets/tooltip.svg");
        //background-image: url("http://enigaseluce.com/it_IT/static/images/listing/carrelli/tooltip.svg");
        background-size: contain;
        top: 5px;
        margin-left: 8px;
    }

    .tooltip-step .tooltiptext {
        width: 182px;
        height: 66px;
        box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1), 0 0 30px 0 rgba(0, 0, 0, 0.08);
        visibility: hidden;
        position: absolute;
        background-color: $dark;
        color: $white;
        text-align: center;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 14px;
        padding: 15px;
        text-align: left;
    }

    .tooltip-right {
        top: -24px;
        left: 140%;
    }

    .tooltip-right::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 7px;
        border-style: solid;
        color: $dark;
        border-color: transparent $dark transparent transparent;
    }

    .tooltip-step:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .tooltip-step:hover {
        background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/tooltip-copy%20(1).svg");
        //background-image: url("../../assets/tooltip.svg");
        //background-image: url("http://enigaseluce.com/it_IT/static/images/listing/carrelli/tooltip.svg");
    }

    // #app {}

    .text-center {
        text-align: center;
    }

    .no-padding {
        padding: 0px;
    }

    .no-padding-left {
        padding-left: 0px !important;
    }

    .no-padding-right {
        padding-right: 0px !important;
    }

    ul li {
        list-style-type: none;
    }

    #app .container {
        width: 100%;
        max-width: 1000px;
        min-width: 330px;
        //padding: 0 15px;
        //display: none;
    }

    .header {
        color: $dark;
        background-color: $white;
        box-shadow: 0 8px 25px -15px rgba(154, 154, 154, 0.5);
        position: relative;
        width: 100%;
        height: $headerbar-height;
        z-index: 1000;
        top: 0px;

        .container {
            width: 100%;
            max-width: 1000px;
            min-width: 330px;
            //padding: 15px;
            position: relative;
            height: 79px;
        }

        .back {
            cursor: pointer;
            text-align: center;
            position: absolute;
            color: $dark;
            font-size: 14px;

            @media (max-width: $max-mobile-res) {
                top: 25px;
                left: 18px;
            }

            @media (min-width: $min-desktop-res) {
                display: none;
            }

            span.text {
                @media (max-width: $max-mobile-res) {
                    display: none;
                }
            }

            .icon.icon-dropdown_up {
                font-size: 18px;
                font-weight: bold;
                transform: rotate(270deg);
                display: block;
                line-height: 30px;
            }
        }

        .reset {
            cursor: pointer;
            text-align: center;
            font-size: 20px;
            line-height: 30px;
            font-weight: bold;
            position: absolute;
            top: 26px;
            left: 30px;
            text-transform: uppercase;
            display: flex;

            width: auto;
            height: auto;
            border-radius: 0;
            border: none;
            margin-top: 0;

            .text {
                position: relative;

                &:before {
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    background-color: #ffcd00;
                    height: 5px;
                    bottom: 2px;
                    z-index: 0;
                }
            }

            .icon.icon-dropdown_up {
                font-size: 12px;
                font-weight: bold;
                transform: rotate(270deg);
                display: inline-block;
            }
        }

        // .back:hover { background: #b6b6b6; }

        .progress {
            font-size: 14px;
            font-weight: normal;
        }

        .steptitle {
            font-size: 20px;
            font-weight: 600;
            position: absolute;
            top: 26px;
            left: 30px;

            &.first {
                //left: 30px;
            }

            @media (max-width: $max-mobile-res) {
                position: static;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 79px;
            }

            .titlewrapper {
                @media (max-width: $max-mobile-res) {
                    max-width: 80%;
                    text-align: center;
                }
            }

            .stepid {
                color: $gray30;
                font-size: 14px;
                position: absolute;
                top: 26px;
                left: 0px;

                @media (max-width: $max-mobile-res) {
                    top: 40px;
                }
            }

            .product {
                text-transform: capitalize;
            }

            .commodity {
                text-transform: lowercase;
            }
        }

        .close {
            position: absolute;
            top: 30px;
            right: 30px;
            width: 21px;
            height: 21px;
            z-index: 9999;
            cursor: pointer;
            background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/7-icons-close-x.png");
            background-size: 21px 21px;
            background-repeat: no-repeat;

            @media (max-width: $max-mobile-res) {
                right: 15px;
            }

            &:hover {
                opacity: 0.65;
            }

            span {
                height: 2px;
            }
        }

        .progressbar {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 6px;
            background-color: $gray20;

            .filler {
                background-color: $primary;
                height: 6px;
                width: 0%; //da automatizzare
            }
        }

        .decoration {
            position: absolute;
            top: 15px;
            left: 77px;
            width: 4px;
            height: 48px;
            border-radius: 3px;
            background-color: $primary;

            @media (max-width: $max-mobile-res) {
                top: 15px;
                left: 50px;
            }
        }
    }

    .info {
        font-size: 12px;
        color: $green30;
    }

    .statusinfo {
        font-size: 12px;
        color: $dark;
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #00000020;
        padding: 5px;
    }

    .singleStepContainer {
        background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/base-modale-oval@3x.png");
        //background-image: url("../../assets/base-modale-oval@3x.png");
        background-size: 100% 595px; //era 555px
        background-repeat: no-repeat;
        background-repeat: repeat-y;
        //background-attachment: fixed;
        width: auto;
        max-width: 1000px;
        margin: auto;

        @media (max-width: $max-mobile-res) {
            /*
            max-width: 100%;
            background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/oval-2-oval-2-copy-mask.svg");
            background-size: 100%;
            */
            /* background-image on .step class */
            background-image: none;
        }

        .box-wrapper {
            display: flex;
            flex-direction: row;
            gap: 60px;

            @media (max-width: $max-mobile-res) {
                flex-direction: column;
                height: 100%;
            }

            &.no-flex {
                display: block;
            }

            >* {
                flex: 1;
            }

            .leftbox-wrapper {
                height: 100%;
            }

            .box {
                margin: auto;

                @media (max-width: $max-mobile-res) {
                    /*
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    */
                    height: 100%;
                }
            }

            .rightbox-wrapper {

                @media (max-width: $max-mobile-res) {
                    display: flex;
                    flex-direction: column;
                }

                .rightbox {
                    display: block;
                }
            }
        }
    }

    .step {
        // border-bottom: 1px solid $white; // cancellare quando implementato

        display: flex;
        justify-content: center;
        align-items: center;

        //height: calc(~"100vh - 86px");

        height: 595px; //era 555px
        min-width: 360px;
        position: relative;
        //background-color: $green;
        //background: linear-gradient(167deg, #7fa545 88%, transparent 0%), #55791e;

        //padding-top: $headerbar-height; //altezza dell'header
        padding-left: 30px;
        padding-right: 30px;
        overflow: hidden;
        scroll-behavior: smooth;

        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;

        /* Firefox */
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }

        //transition: 0.5s all;  // riattiva animazione

        @media (max-width: $max-mobile-res) {
            //height: calc(100vh - 85px);
            display: block;
            height: 100vh;
            padding-left: 0px;
            padding-right: 0px;
            overflow-y: scroll;

            background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/oval-2-oval-2-copy-mask.svg");
            background-size: 100%;
        }

        &:first-child {
            &.step-box-1 {
                margin-top: 0;
            }

            &.step-box-2 {
                margin-top: calc(#{-$desktop-step-height} * 1);
            }

            &.step-box-3 {
                margin-top: calc(#{-$desktop-step-height} * 2);
            }

            &.step-box-4 {
                margin-top: calc(#{-$desktop-step-height} * 3);
            }

            &.step-box-5 {
                margin-top: calc(#{-$desktop-step-height} * 4);
            }

            &.step-box-6 {
                margin-top: calc(#{-$desktop-step-height} * 5);
            }

            &.step-box-7 {
                margin-top: calc(#{-$desktop-step-height} * 6);
            }

            &.step-box-8 {
                margin-top: calc(#{-$desktop-step-height} * 7);
            }

            &.step-box-9 {
                margin-top: calc(#{-$desktop-step-height} * 8);
            }

            &.step-box-10 {
                margin-top: calc(#{-$desktop-step-height} * 9);
            }

            &.step-box-11 {
                margin-top: calc(#{-$desktop-step-height} * 10);
            }

            /*
                @media (max-width: $max-mobile-res) {
                    &.step-box-1  { margin-top: 0; }
                    &.step-box-2  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 1 ); }
                    &.step-box-3  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 2 ); }
                    &.step-box-4  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 3 ); }
                    &.step-box-5  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 4 ); }
                    &.step-box-6  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 5 ); }
                    &.step-box-7  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 6 ); }
                    &.step-box-8  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 7 ); }
                    &.step-box-9  { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 8 ); }
                    &.step-box-10 { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 9 ); }
                    &.step-box-11 { margin-top: calc(#{-$mobile-step-height} #{-$headerbar-height} * 10 ); }
                }
                */

            @media (max-width: $max-mobile-res) {
                &.step-box-1 {
                    margin-top: 0;
                }

                &.step-box-2 {
                    margin-top: calc(#{-$mobile-step-height} * 1);
                }

                &.step-box-3 {
                    margin-top: calc(#{-$mobile-step-height} * 2);
                }

                &.step-box-4 {
                    margin-top: calc(#{-$mobile-step-height} * 3);
                }

                &.step-box-5 {
                    margin-top: calc(#{-$mobile-step-height} * 4);
                }

                &.step-box-6 {
                    margin-top: calc(#{-$mobile-step-height} * 5);
                }

                &.step-box-7 {
                    margin-top: calc(#{-$mobile-step-height} * 6);
                }

                &.step-box-8 {
                    margin-top: calc(#{-$mobile-step-height} * 7);
                }

                &.step-box-9 {
                    margin-top: calc(#{-$mobile-step-height} * 8);
                }

                &.step-box-10 {
                    margin-top: calc(#{-$mobile-step-height} * 9);
                }

                &.step-box-11 {
                    margin-top: calc(#{-$mobile-step-height} * 10);
                }
            }
        }

        &.check_fornitura,
        &.intestatario {
            .container {
                margin-top: -70px;

                @media (max-width: $max-mobile-res) {
                    margin-top: auto;
                }
            }
        }

        &.scelta_tariffa,
        &.pagamento_bolletta {
            display: block;
            padding-top: 30px;
        }

        ul {
            padding-inline-start: 0;
        }

        .main_img,
        .promo_img {
            position: absolute;
            right: 0;
            top: 0;
            width: 420px;
            height: 595px; // era 555px

            @media (max-width: $max-mobile-res) {
                display: none;
            }
        }

        .promo_box {
            height: 130px;
            padding: 22px 30px 15px 30px;

            &::before {
                content: "";
                top: 10px;
                left: 0;
                width: 390px;
                height: 160px;
                position: absolute;
                background-color: $primary;
                background-color: var(--promo-bkg);
                border-radius: 15px;
                transform: perspective(10);
                transform: skewY(-3deg);

                @media (max-width: $max-mobile-res) {
                    display: none;
                }
            }

            @media (max-width: $max-mobile-res) {
                background-color: $primary;
                background-color: var(--promo-bkg);
                background-image: none;
                height: auto;
                border-radius: 15px;
                padding: 15px 25px;
                margin-bottom: 30px;
            }

            @media (min-width: $min-desktop-res) {
                position: absolute;
                right: 15px;
                bottom: 0;
                width: 390px;
            }

            &.on {
                display: block;
            }

            &.off {
                display: none;
            }

            .wrapper {
                position: relative;
                z-index: 1;
                display: flex;
                gap: 30px;
                align-items: center;

                @media (max-width: $max-mobile-res) {
                    justify-content: space-between;
                }

                .text {
                    font-size: 18px;
                    font-weight: normal;
                    line-height: 1.22;
                    letter-spacing: -0.4px;
                    color: $dark;

                    @media (max-width: $max-mobile-res) {
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.43;
                    }

                    p {
                        margin: 0;
                    }
                }

                img {
                    width: 90px;
                    height: 90px;

                    @media (max-width: $max-mobile-res) {
                        width: 42px;
                        height: 42px;
                    }
                }
            }
        }

        .container {
            @media (max-width: $max-mobile-res) {
                padding-top: 30px;
                padding-bottom: 30px;
                //padding-bottom: 120px;
                height: calc(100% - 86px);
            }
        }

        &.normal {
            .container {
                display: flex;
                flex-direction: column;

                .questions {
                    li {
                        justify-content: flex-start;
                    }
                }
            }
        }

        &.withimage {
            padding-left: 60px;
            padding-right: 480px;

            @media (max-width: $max-mobile-res) {
                padding-left: 0px;
                padding-right: 0px;
            }
        }

        &.scelta_tariffa,
        &.pagamento_bolletta {
            @media (max-width: $max-mobile-res) {

                padding-top: 0;

                .container {
                    display: block;
                    height: auto;
                    min-height: calc(100vh - 145px);
                    padding-bottom: 115px;

                    .box-wrapper {
                        //height: auto;
                        gap: 20px;
                        min-height: calc(100vh - 145px);

                        .leftbox-wrapper {
                            flex-grow: 0;
                        }

                        .rightbox-wrapper {
                            flex-grow: 0;
                        }

                        .btn-wrapper {
                            flex-grow: 0;
                            margin-top: auto;
                        }
                    }
                }

                .questions {
                    justify-content: flex-start;
                }
            }

        }

        &.uscita {
            padding: 0 15px;

            .container {
                padding-left: 0;
                padding-right: 0;
            }

            @media (max-width: $max-mobile-res) {

                padding-top: 0;

                .container {
                    //height: calc(100% + 300px);
                    height: auto;
                    min-height: 100%;
                    padding-bottom: 115px;
                }

                .questions {
                    justify-content: flex-start;
                }

                .box-wrapper {
                    height: auto;
                    gap: 20px;
                }

            }
        }

        &.scelta_tariffa {
            .box-wrapper {
                .rightbox {

                    .question,
                    .detail {
                        @media (max-width: $max-mobile-res) {
                            display: none;
                        }
                    }
                }
            }
        }


        .intro {
            color: $dark;
            text-align: center;
            font-size: 24px;
            line-height: 28px;
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid #d9d9d9;

            @media (max-width: $max-mobile-res) {
                font-size: 20px;
                margin-bottom: 15px;
                padding-bottom: 15px;
            }

            span {
                font-size: 30px;
                font-weight: bold;
                //background: linear-gradient(to bottom,transparent 70%,#ffcd00 70%,#ffcd00 0);
                background: linear-gradient(to bottom,
                        transparent 65%,
                        #ffcd00 65%,
                        #ffcd00 90%,
                        transparent 0);
            }
        }

        .question {
            color: $dark;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;

            @media (max-width: $max-mobile-res) {
                //text-align: center;
                font-size: 18px;
            }
        }
    }

    .summary {
        margin-bottom: 15px;
        background-color: $dark;
        -webkit-border-radius: 15px;
        -webkit-border-bottom-right-radius: 12px;
        -webkit-border-bottom-left-radius: 12px;
        -moz-border-radius: 15px;
        -moz-border-radius-bottomright: 12px;
        -moz-border-radius-bottomleft: 12px;
        border-radius: 15px;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;

        &.fare-setup {
            background-color: transparent;
            padding: 0;
            margin: 0;
        }

        &.discount-active {
            background-color: $green;

            .info {
                text-align: center;
                color: $white !important;
            }
        }

        .discount {
            color: $white;
            padding: 5px 30px 5px 30px;

            .info {
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 16px;
                color: $primary;
                margin-bottom: 15px;

                .icons {
                    font-size: 21px;
                    font-weight: normal;
                }

                .icon.icon-check {
                    margin-right: 10px;
                }
            }

            .explanation {
                font-size: 12px;
                letter-spacing: 0;
                color: $white;
                margin-bottom: 15px;
            }
        }

        .fare-info {
            font-size: 12px;
            color: $gray80;
            line-height: 16px;
        }

        .detail {
            color: $dark;
            border: 1px solid $dark;
            background-color: $white;
            margin: 15px 0px;
            padding: 30px;
            font-size: 14px;
            border-radius: 12px;
            //height: 283px;

            @media (max-width: $max-mobile-res) {
                padding: 20px 15px;
            }

            >div:first-child {
                margin-bottom: 15px;
            }

            .fare-name {
                font-size: 16px;
                font-weight: bold;
            }

            .fare-price {
                margin-top: -7px;
                text-align: right;

                .price {
                    font-size: 30px;
                    font-weight: bold;
                }

                .secondyear,
                .unit {
                    font-size: 16px;
                    margin-top: -5px;
                }
            }
        }
    }

    .questions {
        padding: 0;
        margin: 0;

        @media (max-width: $max-mobile-res) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
            width: 100%;
        }

        .btn-wrapper {
            position: absolute;
            width: 100%;
            left: 0px;
            bottom: 45px;
            display: flex;
            gap: 30px;
            justify-content: center;

            @media (max-width: $max-mobile-res) {
                position: static;
            }
        }

        li {
            @media (max-width: $max-mobile-res) {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
            }
        }

        &.discount-active {
            background-color: $green;

            .info {
                text-align: center;
                color: $white !important;
            }
        }

        .discount {
            padding: 15px 30px;
            border-radius: 15px;
            border: solid 1px $info-border;
            background-color: $info-bkg;
            margin-bottom: 15px;
            margin-top: 30px;

            @media (max-width: $max-mobile-res) {
                padding: 15px;
            }

            &.active {
                border: solid 1px $active-border;
                background-color: $active-bkg;
            }

            .info {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;

                @media (max-width: $max-mobile-res) {
                    justify-content: flex-start;
                }

                .info-wrapper {
                    max-width: 300px;
                }


                .status {
                    color: $dark;
                    font-size: 16px;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 1;
                }

                .explanation {
                    font-weight: normal;
                    font-size: 12px;
                    margin-top: 4px;
                }
            }

            .ico {
                width: 26px;
                height: 26px;
                background-size: 26px 26px;
                background-repeat: no-repeat;

                &.info {
                    flex: 0 0 26px;
                    background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/tooltip-copy.svg");
                }

                &.active {
                    flex: 0 0 26px;
                    background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/sconto-digitale-attivo.svg");
                }
            }


        }
    }

    .note {
        font-size: 12px;
        color: $gray80;
        margin-bottom: 20px;
    }

    .btn-container {
        display: flex;
        justify-content: center;
        column-gap: 30px;
        margin-bottom: 45px;

        &.min-space {
            margin-bottom: 20px;
        }


        @media (max-width: $max-mobile-res) {
            column-gap: 20px;
            margin-bottom: 0;
        }

        >div {
            flex: 1;

            @media (max-width: $max-mobile-res) {
                margin-right: 0px;
                margin-bottom: 30px;
                width: 100%;

                &:last-child {
                    margin-bottom: 0px;
                }
            }

            button {
                margin-bottom: 0px;
                width: 100%;
            }
        }

        &.large {
            @media (max-width: $max-mobile-res) {
                align-items: center;
                flex-direction: column;
            }
        }
    }

    button {
        font-size: 16px;
        background-color: $white;
        border-bottom: 5px solid $white;
        width: 120px;
        height: 97px;
        border-radius: 10px;
        border: none;
        //margin-right: 15px;
        border-bottom: 5px solid transparent;
        padding: 0px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.14);

        +.explain {
            margin-top: 10px;
            font-size: 16px;
            text-align: center;

            @media (max-width: $max-mobile-res) {
                font-size: 14px;
            }
        }

        &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.14);
        }

        &:last-child {
            margin-right: 0px;
        }

        &.longbutton {
            width: 250px;
            height: 70px;
            font-size: 16px;
            padding: 10px 20px 5px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: $max-mobile-res) {
                margin-bottom: 20px;
                margin-right: 0px;
                width: 100%;
            }

            .text {
                max-width: 210px;
                text-transform: uppercase;

                @media (max-width: $max-mobile-res) {
                    max-width: none;
                }
            }
        }

        &.yesnobutton {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 390px;
            height: 70px;
            text-transform: uppercase;

            @media (max-width: $max-mobile-res) {
                width: 100%;
                margin-bottom: 15px;
                margin-right: 0px;
            }
        }

        &.iconbutton {
            width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: $max-mobile-res) {
                width: 100%;
                min-width: 97px;

                &.alternative-width {
                    width: 150px;
                }
            }

            .text {
                font-size: 15.5px;
                line-height: 1.13;
                padding-top: 10px;
                letter-spacing: -0.6px;
            }

            .icon {
                font-size: 22px;
            }

            .text-min {
                font-size: 18px;
                line-height: normal;
            }

            .icon-cont {
                height: 25px;
                display: flex;
            }
        }

        &.large {
            display: flex;
            flex-direction: column;
            gap: 15px;
            justify-content: space-evenly;
            width: 100%;
            min-width: 330px;
            height: 135px;
            margin-bottom: 15px;
            font-size: 20px;
            text-align: left;
            padding: 30px 30px;
            position: relative;

            @media (max-width: $max-mobile-res) {
                height: auto;
            }

            &.active {
                border-bottom: 5px solid $primary;
                font-weight: normal;

                .check {
                    border: 1px solid $primary;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:before {
                        content: "";
                        width: 14px;
                        height: 14px;
                        position: absolute;
                        border-radius: 50%;
                        background-color: $primary;
                    }
                }

                .title {
                    font-weight: 600;
                }
            }

            .pricebox {
                width: 100%;
                border-top: 1px solid $gray80;
                padding-top: 15px;
            }

            .title {
                display: flex;
                gap: 15px;
                align-items: center;
                line-height: 20px;
            }

            .check {
                width: 24px;
                height: 24px;
                border: 1px solid #dedede;
                position: absolute;
                top: 15px;
                right: 15px;
                border-radius: 50%;
            }
        }

        &.middlebutton {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 70px;

            @media (max-width: $max-mobile-res) {
                width: 100%;
                min-width: 150px;
                //margin-bottom: 15px;
                //margin-right: 0px;
            }
        }

        &.active {
            color: $dark;
            font-weight: bold;
            border-bottom: 5px solid $primary;
            box-sizing: border-box;
        }
    }

    .step-btn {
        font-size: 20px;
        font-weight: 600;
        width: 300px;
        height: 50px;
        border-radius: 3px;
        text-transform: none;
        margin: 0;
        border-bottom: none;
        box-shadow: none;

        @media (max-width: $max-mobile-res) {
            width: 100%;
        }

        &:hover {
            font-weight: bold;
        }

        &:after {
            content: none;
        }

        &.confirm {
            color: $dark;
            background-color: $primary;

            @media (max-width: $max-mobile-res) {
                margin-top: 30px;
            }
        }

        &.back {
            border: solid 1px $gray80;
            background-color: $white;

            @media (max-width: $max-mobile-res) {
                display: none;
            }
        }

        &.off {
            opacity: 0.5;
            pointer-events: none;
        }

        &.mb {
            margin-bottom: 120px;
        }
    }

    .exitway {

        display: flex;
        flex-direction: column;
        padding-top: 60px;


        .exitway_cont {
            border-radius: 12px;
            width: 1000px;
            height: 680px; // era 640px;
            background-color: $gray10;
            overflow: hidden;

            @media (max-width: $max-mobile-res) {
                width: 100%;
                height: 100vh;
                border-radius: 0px;
            }
        }


        a {
            font-weight: bold;
            cursor: pointer;
        }

        .row.padded {
            padding: 0px 90px;

            .bordered:first-child {
                border-right: 1px solid #d9d9d9;

                @media (max-width: $max-mobile-res) {
                    border-right: 0px;
                }
            }

            @media (max-width: $max-mobile-res) {
                display: flex;
                flex-direction: column-reverse;
                padding: 0px;
            }
        }

        .header {
            background-color: $white;
            font-size: 18px;
            font-weight: bold;
            color: $dark;
            letter-spacing: 0.5;
            z-index: 1010;
            height: 70px;

            .title {
                background: linear-gradient(to bottom,
                        transparent 70%,
                        #ffcd00 70%,
                        #ffcd00 0);
                display: inline-block;
                position: relative;

                &:before {
                    content: "\e97d";
                    font-family: EGL-Icon-font;
                    font-weight: 600;
                    font-size: 10px;
                    transition: all 0.2s ease-in-out;
                    position: absolute;
                    top: 50%;
                    left: -20px;
                    transform: translateY(-50%) rotate(270deg);
                    line-height: 20px;
                }
            }
        }

        .container.inside {
            padding-top: 30px;
            /* padding-bottom: 50px; */
            height: 567px;
            overflow-y: hidden;

            @media (max-width: $max-mobile-res) {
                padding-bottom: 120px;
                height: 100vh;
                overflow-y: scroll;
            }
        }

        .container.withimage {
            padding-top: 30px;
            padding-right: 420px;
            height: 567px;
            overflow-y: hidden;
            margin-left: 0;

            @media (max-width: $max-mobile-res) {
                padding-left: 15px;
                padding-right: 15px;
                height: 100vh;
                overflow-y: scroll;
            }
        }

        .container.padded {
            padding-top: 78px;
            padding-bottom: 50px;
            height: 100vh;
            overflow-y: hidden;

            .bordered:first-child {
                border-right: 1px solid #d9d9d9;
                overflow-y: scroll;
            }
        }

        .claim-container {
            position: relative;

            @media (max-width: $max-mobile-res) {
                margin-top: -60px;
                margin-bottom: 60px;
            }

            @media (min-width: $min-desktop-res) {
                position: absolute;
                left: 30px;
                top: 30px;
                max-width: 50%;
            }

            &.double_card {
                @media (min-width: $min-desktop-res) {
                    right: 30px;
                    max-width: none;
                }
            }

            .claim {
                font-size: 20px;
                color: $dark;
                padding-left: 15px;
                margin-bottom: 5px;
                z-index: 1000;

                p {
                    margin-bottom: 0;
                }

                @media (max-width: $max-mobile-res) {
                    margin-bottom: 0px;
                }
            }

            .subclaim {
                color: $gray80;
                font-size: 16px;
                padding-left: 15px;

            }

            &:before {
                content: "";
                width: 6px;
                height: 100%;
                border-radius: 3px;
                background-color: $primary;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;

                @media (max-width: $max-mobile-res) {
                    width: 6px;
                    height: 100%
                }
            }
        }

        .failed {
            width: 80px;
            height: 80px;
            background-size: 80px 80px;
            background-image: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/7-icons-thankyoupage-failed.svg");
            background-repeat: no-repeat;
            margin: 0 auto;
        }

        .card-wrapper {
            display: flex;
            gap: 45px;
            justify-content: center;
            align-items: flex-start;

            @media (max-width: $max-mobile-res) {
                /*
                display: flex;
                flex-direction: column;
                gap: 30px;
                */
                display: block;
            }

            .divider {
                width: 2px;
                height: 325px;
                background-color: $gray20;

                @media (max-width: $max-mobile-res) {
                    display: none;
                }
            }

            &.single {
                justify-content: left;
                margin-left: 45px;
                margin-top: 20px;

                @media (max-width: $max-mobile-res) {
                    margin: auto;
                }

                .exitbox {
                    @media (max-width: $max-mobile-res) {
                        margin-left: auto;
                    }
                }
            }

            &.suggestion {
                display: block;
                width: 100%;
                height: 450px;
                position: relative;
            }

            .suggestion {
                display: block;
                position: absolute;
                width: 100%;
                bottom: 0;

                .failed {
                    margin-bottom: 60px;
                }

                .text-suggestion-title,
                .text-suggestion-info {
                    font-size: 20px;
                    text-align: center;
                }

                .text-suggestion-title {
                    font-weight: bold;
                    margin-bottom: 90px;
                }
            }
        }

        .exitbox {
            width: 400px;
            height: 385px;
            margin: auto;
            background-color: $white;
            border-radius: 15px;
            box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.15);

            @media (max-width: $max-mobile-res) {
                width: auto;
                min-width: 330px;
                border-radius: 15px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
                margin-bottom: 30px;
            }

            &.exitbox-ko {
                text-align: center;
                color: $dark;
                width: 380px;

                @media (max-width: $max-mobile-res) {
                    width: auto;
                    min-width: 330px;
                }

                strong {
                    font-size: 20px;
                }

                .bodybox {
                    padding: 15px 15px 30px 15px;
                }

                .icon.big {
                    font-size: 80px;
                    display: inline-block;
                    margin: 30px auto 20px auto;
                }
            }

            &.plain {
                background-color: $white;
                border: 1px solid $gray20;
                border-radius: 15px;
                box-shadow: none;
                display: flex;
                justify-items: center;
                align-items: center;

                .bodybox {
                    border-radius: 15px;
                    height: 385px;
                    width: 400px;
                    margin: auto;
                    justify-content: center;

                    @media (max-width: $max-mobile-res) {
                        width: auto;
                    }

                    .text {
                        margin: 0;
                        padding: 0 40px;
                    }
                }

                &.suggestion-box {
                    height: auto;
                    width: 100%;

                    .bodybox {
                        height: auto;
                        width: 100%;
                        padding: 30px;
                        margin: 0;

                    }
                }
            }

            &.empty {
                .bodybox {
                    height: 100%;
                }
            }

            button.more {
                margin-top: 15px;
            }

            .promo {
                padding: 25px 30px 10px 30px;
                border-bottom-right-radius: 15px;
                border-bottom-left-radius: 15px;
                margin-top: -20px;
                display: flex;
                gap: 15px;
                justify-content: center;
                background-color: #333;

                .text {
                    font-size: 14px;
                    color: $white;

                    p {
                        margin: 0;
                    }
                }

                .promo_img {
                    position: static;
                    width: 40px;
                    height: 40px;
                }
            }


            .headerbox {
                height: 105px;
                padding: 15px 30px;
                color: $white;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-radius: 15px 15px 0px 0px;

                @media (max-width: $max-mobile-res) {
                    border-bottom: none;
                }

                &.new {
                    color: $violet;

                    @media (max-width: $max-mobile-res) {
                        color: $white;
                        background-color: $violet;
                    }
                }

                &.alert {
                    color: $green;

                    @media (max-width: $max-mobile-res) {
                        color: $white;
                        background-color: $green;
                    }
                }

                &.ko {
                    color: $red;

                    @media (max-width: $max-mobile-res) {
                        color: $white;
                        background-color: $red;
                    }
                }

                &.success .offer,
                &.alert .offer,
                &.new .offer {
                    font-size: 40px;
                    font-weight: bold;
                    line-height: 42px;

                    @media (max-width: $max-mobile-res) {
                        font-size: 30px;
                        line-height: 32px;
                    }
                }

                .product {
                    font-size: 40px;
                    font-weight: 600;
                    line-height: 42px;

                    @media (max-width: $max-mobile-res) {
                        font-size: 30px;
                        line-height: 32px;
                    }
                }

                .supply {
                    font-size: 20px;
                    font-weight: normal;
                    text-transform: uppercase;
                }
            }
        }

        .bodybox {
            position: relative;
            font-size: 16px;
            padding: 15px 30px 30px 30px;
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
            height: 280px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            background-color: $white;

            .text {
                border-radius: 12px;

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 15px;

                    li {
                        position: relative;
                        padding-left: 30px;

                        &:before {
                            content: url("https://eniplenitude.com/etc.clientlibs/enigaseluce/clientlibs/clientlib-site/resources/assets/7-icons-check.svg");
                            top: 3px;
                            left: 0;
                            position: absolute;
                        }
                    }
                }
            }

            .text-docs {

                ul {
                    margin-top: 15px;
                }

                ul li {
                    margin-bottom: 15px;
                    position: relative;
                    padding-left: 25px;

                    &:before {
                        content: "\e97c";
                        font-family: EGL-Icon-font;
                        font-weight: 600;
                        font-size: 15px;
                        transition: all 0.2s ease-in-out;
                        position: absolute;
                        color: $primary;
                        left: 0px;
                    }
                }
            }

            .text-ko-title {
                font-size: 20px;
                text-align: center;
            }

            .text-ko-info {
                font-size: 18px;
                text-align: center;
            }

            button {
                margin-top: auto;
            }
        }

        .underbox-title {
            color: $dark;
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
            margin-bottom: 5px;
            padding: 0px 15px;
        }

        .underbox-text {
            color: $dark;
            font-size: 16px;
            padding: 0px 15px;

            a {
                font-weight: bold;
                color: $dark;
                text-decoration: underline;
            }
        }

        button {
            width: 100%;
            height: 50px;
            font-size: 20px;
            color: $dark;
            background-color: $primary;
            border-radius: 5px;

            &:hover {
                font-weight: bold;
                box-shadow: none;
            }
        }
    }

    .configSummary {
        top: 0;
        left: 0;
        position: fixed;
        z-index: 2000;
        width: 100vw;
        height: 100vh;
        color: $dark;
        font-size: 16px;
        overflow-y: scroll;
        padding-bottom: 40px;
        letter-spacing: normal;

        .header {
            background-color: $gray15;
            font-size: 18px;
            font-weight: bold;
            color: $dark;
            letter-spacing: 0.5;
            height: 140px;

            .title {
                background: linear-gradient(to bottom,
                        transparent 70%,
                        #ffcd00 70%,
                        #ffcd00 0);
                display: inline-block;
                position: relative;
                margin-bottom: 30px;

                &:before {
                    content: "\e97d";
                    font-family: EGL-Icon-font;
                    font-weight: 600;
                    font-size: 10px;
                    transition: all 0.2s ease-in-out;
                    position: absolute;
                    top: 50%;
                    left: -20px;
                    transform: translateY(-50%) rotate(270deg);
                    line-height: 20px;
                }
            }

            .decoration {
                top: 73px;
                height: 30px;
            }

            .steptitle {
                font-weight: normal;
                margin-bottom: 3px;
            }

            .substeptitle {
                font-size: 15px;
                font-weight: normal;
                letter-spacing: normal;
            }
        }

        .content {
            margin-top: 160px;
            padding: 0px 15px 0px 35px;
            margin-bottom: 50px;
            position: relative;
        }

        .stepchoice {
            color: $white;
            margin-bottom: 30px;

            &:before {
                content: "";
                position: absolute;
                width: 1px;
                background-color: $white;
                top: 10px;
                bottom: 180px;
                left: 20px;
            }

            &.shortline {
                &:before {
                    content: "";
                    position: absolute;
                    width: 1px;
                    background-color: $white;
                    top: 10px;
                    bottom: 90px;
                    left: 20px;
                }
            }

            .questionNumber {
                font-size: 14;
                position: relative;

                &:after {
                    content: "";
                    position: absolute;
                    width: 11px;
                    height: 11px;
                    border-radius: 50%;
                    background-color: $white;
                    top: 6px;
                    left: -20px;
                }
            }

            .question {
                font-size: 20px;
                font-weight: bold;

                &.more {
                    margin-top: 15px;
                }
            }

            .info {
                color: $white;
                font-size: 14px;
                font-weight: bold;
                margin-top: 15px;

                .icon {
                    margin-right: 7px;
                }
            }

            .answer {
                margin-top: 10px;
                width: 200px;
                height: 40px;
                background-color: $white;
                border-bottom: solid 5px $primary;
                border-radius: 8px;
                text-transform: uppercase;
                color: $dark;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                padding-top: 7px;
                position: relative;
                padding-right: 20px;

                &:before {
                    content: "\e9c8";
                    font-family: EGL-Icon-font;
                    font-weight: 600;
                    font-size: 15px;
                    transition: all 0.2s ease-in-out;
                    position: absolute;
                    top: 25%;
                    right: 10px;
                    line-height: 20px;
                    color: $dark;
                }
            }
        }
    }

    .step {
        &.step-box-1 {

            .promo_box {
                @media (max-width: $max-mobile-res) {
                    position: absolute;
                    top: 15px;
                    width: calc(100% - 30px);
                }
            }

        }
    }
}
</style>
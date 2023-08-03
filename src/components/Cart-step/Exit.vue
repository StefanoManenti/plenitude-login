<template id="exit">
    <div class="exitway">

        <div class="exitway-cont">

            <div v-if="subtype != 'suggestion'" :class="subtype" class="claim-container">
                <div class="claim" v-html="info.title"></div>
                <div v-if="info.subtitle" class="subclaim" v-html="info.subtitle"></div>
            </div>

            <!-- <div class="exitway_cont"></div> -->
            <div v-if="subtype == 'single_card'" class="card-wrapper single"> <!-- single card -->
                <exit-card :info="info.cards[0]" :promo="promo" :commodity="commodity" :iban="iban"
                    @activated="onActivated"></exit-card>
            </div>

            <div v-if="subtype == 'double_card'" class="card-wrapper double">
                <!-- double card | la signola centrale si ottiene allo stesso modo, eliminando l'altra card e il divider -->
                <!-- <exit-card :type="cardtype.blank" :texts="texts"></exit-card> --> <!-- Esempio card blank -->
                <exit-card :info="info.cards[0]" :promo="promo" :commodity="commodity" :iban="iban"
                    @activated="onActivated"></exit-card>
                <div v-if="info.cards[1].type" class="divider"></div>
                <exit-card v-if="info.cards[1].type" :info="info.cards[1]" :commodity="commodity" :promo="promo"
                    :iban="iban" @activated="onActivated"></exit-card>
            </div>

            <div v-if="subtype == 'suggestion'" class="card-wrapper suggestion"> <!-- suggestion -->
                <exit-card-suggestion :info="info.cards[0]" @activated="onActivated"></exit-card-suggestion>
            </div>
        </div>

    </div>
</template>


<script>

import ExitCard from './ExitCard.vue';
import ExitCardSuggestion from './ExitCardSuggestion.vue';
import Url from "./helpers/Url.js";
import Obj from "./helpers/Obj.js";

export default {
    template: '#exit',

    components: {
        ExitCard,
        ExitCardSuggestion
    },

    props: ['info', 'subtype', 'commodity', 'promo'],


    data: function () {
        return {
            iban: false,

            //type: "double_card", // single_card, double_card, suggestion
            //type: stepCurrent.subtype;

            // cardtype: {
            //     success: "success",
            //     ko: "ko",
            //     blank: "blank",
            //     suggestion: "suggestion"
            // },

            // texts: {
            //     claim: "<strong>Lorem ipsum</strong> dolor sit amen",
            //     subclaim: "Lorem ipsum dolor sit <strong>lorem ipsum</strong> dolor sit amen</div>",

            //     text: "<strong>Avrai bisogno di alcuni dati.</strong><br>Tieni a portata di mano:",
            //     text_docs: "<ul><li><strong>CODICE PDR</strong> per il gas</li><li><strong>Documento d’identità</strong></li></ul>",

            //     text_ko: "Ci dispiace, [NOME OFFERTA] [LUCE/GAS] non è disponibile per il cambio offerta.",
            //     text_ko_info: "In alternativa ti proponiamo di attivare <strong>Trend Casa</strong>.",

            //     text_blank: "Lorem ipsum dolor sit amen <a href='#'>lorem ipsum</a> dolor sit amen.",

            //     text_suggestion: "Ci dispiace,  [NOME OFFERTA] non è disponibile per il cambio offerta.",
            //     text_suggestion_info: "In alternativa ti proponiamo di attivare <strong>Trend Casa</strong>.",

            //     btn_label: "Lorem Ipsum",
            //     btn_url: "#",
            // },

            // promo_on_card: {
            //     active: true,

            //     background: "background-color: #" + "333333" + "; height: 440px;",
            //     text: "Lorem ipsum dolor sit amet augue maecenas nunc lectus diam congun",
            //     textcolor: "color: #" + "ffffff",

            //     image_path: "https://eniplenitude.scene7.com/is/image/enigaseluce/" + "300x300_PhilipsRes_Feb23" + "?hei=300&wid=300&fmt=png-alpha",

            // },

            // promo_on_card_not_active: {
            //     active: false,

            //     background: "background-color: #" + "333333" + "; height: 440px;",
            //     text: "Lorem ipsum dolor sit amet augue maecenas nunc lectus diam congun",
            //     textcolor: "color: #" + "ffffff",

            //     image_path: "https://eniplenitude.scene7.com/is/image/enigaseluce/" + "300x300_PhilipsRes_Feb23" + "?hei=300&wid=300&fmt=png-alpha",
            // },

        };
    },

    created: function () {

        //console.log("changeconfig --->", this.changeconfig);

        //let origin = window.location.origin;

        this.url_myeni = '/my-eni',
            //this.url_nuovaFornitura = '/offerta/casa/nuova-fornitura',
            this.url_nuovaFornituraLuce = '/offerta/casa/nuova-fornitura/luce',
            this.url_nuovaFornituraGas = '/offerta/casa/nuova-fornitura/gas',
            this.url_voltura = '/offerta/casa/nuova-fornitura/voltura'

    },

    beforeMount: function () {
        console.log('Exit beforeMount', this.info, this.promo, this.subtype, this.commodity);

        this.iban = (this.commodity.selected.payment == "addebito diretto") ? true : false;
    },

    methods: {

        onActivated: function (val) {
            console.log('Exit onActivated', val, this.commodity);

            let url = '';
            let path = val.link;

            switch (val.weborder) {
                case "cambio_prodotto":
                    path = (path) ? path+'?' : '/cambio-prodotto/index.html?';
                    url = this.goWeborder(path, 0, val.commodity)
                    break;
                case "voltura":
                    path = (path) ? path+'?' : '/voltura/index.html?';
                    url = this.goWeborder(path, 1, val.commodity)
                    break;
                case "switchin":
                    path = (path) ? path+'?' : '/attiva-offerta-casa/index.html?';
                    url = this.goWeborder(path, 0, val.commodity)
                    break;
                case "switchinVoltura":
                    path = (path) ? path+'?' : '/attiva-offerta-casa-swvoltura/index.html?';
                    url = this.goWeborder(path, 0, val.commodity)
                    break;
                default:
                    url = path;
                    break;
            }

            console.log('Exit onActivated', url);
            window.location.href = url;
        },

        goWeborder: function (base, voltura, commodity) {
            console.log("exit");

            if (window.origin.indexOf('eniplenitude.com') < 0) {
                base = 'https://pp.eniplenitude.com' + base;
            }

            if (!commodity) {
                // important for double card exit: use user selection as commodity becaouse not specified in the card
                commodity = this.commodity.selected.commodity;
            }

            let bill = (this.commodity.selected.bill == "cartaceo") ? "cartacea" : this.commodity.selected.bill;

            let codeSegments = this.commodity.codiceOfferta.split(/-|_/);
            let codiceOfferta = (commodity == 'luce') ? codeSegments[0] + '_' + codeSegments[1] : (commodity == 'gas') ? codeSegments[0] + '_' + codeSegments[2] : this.commodity.codiceOfferta;
            let commodityLabel = (commodity == 'luce') ? 'luce' : (commodity == 'gas') ? 'gas' : 'gaseluce';

            let queryParams = {
                "codiceProdotto": codiceOfferta?.toUpperCase(),
                "codiceOfferta": codiceOfferta?.toUpperCase(),
                "commodity": commodityLabel,
                "opzione": this.commodity.selected.fare?.toLowerCase(),
                "bill-type": bill?.toLowerCase(),
                "direct-debit": this.iban,
                "codiceCanale": (voltura) ? this.commodity.codiceCanale?.toUpperCase() + 'V' : this.commodity.codiceCanale?.toUpperCase(),
                "codiceTpCanale": (voltura) ? 'VL' + this.commodity.codiceTpCanale?.toUpperCase() : this.commodity.codiceTpCanale?.toUpperCase(),
                "coupon": 'undefined',
                "codiceConvenzione": (voltura) ? this.commodity.codiceConvenzione?.toUpperCase() + 'V' : this.commodity.codiceConvenzione?.toUpperCase()
            }

            if (Url.getParams("codiceTpCanale")) {
                const inputParams = {
                    codiceConvenzione: Url.getParams("codiceConvenzione")?.toLowerCase(),
                    codiceAgente: Url.getParams("codiceAgente")?.toLowerCase(),
                    codiceTpCanale: Url.getParams("codiceTpCanale")?.toLowerCase(),
                    idPartner: Url.getParams("idPartner")?.toLowerCase()
                }

                queryParams = Obj.merge(queryParams, inputParams);
            }

            let weborder_url = base + Obj.join(queryParams, '&');

            return weborder_url;
        },

        closeCartStep: function () {
            document.getElementById('cart-step').classList.remove('open');
        },
    }
}
</script>
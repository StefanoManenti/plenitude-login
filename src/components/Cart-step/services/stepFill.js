import {
    removeHTMLTags,
    getStartImage
} from "./helpers"

export function fill(stepData) {

    let stepCurrent = {
        id: stepData.nomeStep,
        micro_step: stepData.tipologiaschermata,
        type: "",
        subtype: "default",
        singlePath: false,
        label: stepData.label,
        intro: stepData.introschermata,
        rightbox: "",
        questions: [stepData.questions],
        choices: [],
        choicesexplain: [],
        choiceTracking: [],
        icons: [],
        promo: null,
        promo_txt: null,
        promo_img: null,
        recapGas: true,
        recapLuce:  true,

        labels: [],
        next_steps: stepData.fragmentFigliStepSuccessivi,
        previous_step: stepData.fragmentStepPrecedente,

        event_labels: 'event_labels',
        trackingclass: 'trackingclass',
    };

    let choicesexplain = null;
    let configurazionepagamento = null;

    //- single step specific information --
    switch (stepData.tipologiaschermata) {
        // STEP 1
        case "scelta_fornitura":
            stepCurrent.type = "commodity-setup";
            stepCurrent.subtype = "iconbuttons";

            stepCurrent.rightbox = "none";

            // //- set commodity base info --
            // this.setCommodity(stepData.offertaRiferimentoResid);

            // //- extract price from fragment
            // this.setAllPrices(
            //     stepData.offertaRiferimentoResid.contentFragmentLuce,
            //     stepData.offertaRiferimentoResid.contentFragmentGas
            // );

            stepCurrent.choices = [
                {
                    "answer": stepData.nomeFornitura[0],
                    "details": null,
                    "tracking": (stepData.trackingid != null && stepData.trackingid[0]) ? stepData.trackingid[0] : stepData.nomeFornitura[0]
                },{
                    "answer": stepData.nomeFornitura[1],
                    "details": null,
                    "tracking": (stepData.trackingid != null && stepData.trackingid[1]) ? stepData.trackingid[1] : stepData.nomeFornitura[1]
                },{
                    "answer": stepData.nomeFornitura[2],
                    "details": null,
                    "tracking": (stepData.trackingid != null && stepData.trackingid[2]) ? stepData.trackingid[2] : stepData.nomeFornitura[2]
                }
            ];

            stepCurrent.icons = ["icon-dual", "icon-lampadina", "icon-gas"];

            stepCurrent.main_img = getStartImage( stepData.offertaRiferimentoResid?.imgHeroBanner?._path, "big" );

            // if (stepData.visualizzaPromoInQuestoStep) {
            //     stepCurrent.promo_active = true;
            //     stepCurrent.promo_txt = stepData.promozioneRiferimento.copyPromozione.html;
            //     stepCurrent.promo_img = getStartImage(stepData.promozioneRiferimento.immagineHeroBanner?._path, "big");
            //     stepCurrent.promo_img_small = getStartImage(stepData.promozioneRiferimento.immagineFasciaPromo?._path, "small");
            //     stepCurrent.promo_color = stepData.promozioneRiferimento.coloreBackgroundFasciaPromozionale;
            //     stepCurrent.promo_color_style = "--promo-bkg: #" + stepCurrent.promo_color;

            //     stepCurrent.promo_activefor = stepData.promozioneRiferimento.tipologiaPromozione;

            //     for (let i = 0; i < stepCurrent.promo_activefor.length; i++) {
            //         if (stepCurrent.promo_activefor[i] == "dual") {
            //             stepCurrent.promo_activefor[i] = "luce e gas";
            //         }
            //     }
            // }

            break;
            // STEP 2
        case "check_fornitura":
            stepCurrent.type = "commodity-setup";
            stepCurrent.subtype = "normal";

            stepCurrent.rightbox = "none";

            choicesexplain = stepData.notaSottostanteLoStatoOIntestatarioFornitura ? stepData.notaSottostanteLoStatoOIntestatarioFornitura.split("|") : null;
            stepCurrent.choices = [];
            for (let i = 0; i < stepData.statoFornitura.length; i++) {
                stepCurrent.choices.push({
                    "answer": stepData.statoFornitura[i],
                    "details": (choicesexplain) ? choicesexplain[i] : null,
                    "tracking": (stepData.trackingid && stepData.trackingid[i]) ? stepData.trackingid[i] : stepData.statoFornitura[i]
                });

            }
            break;

        case "intestatario":
            stepCurrent.type = "commodity-setup";
            stepCurrent.subtype = "normal";

            stepCurrent.rightbox = "none";

            choicesexplain = stepData.notaSottostanteLoStatoOIntestatarioFornitura ? stepData.notaSottostanteLoStatoOIntestatarioFornitura.split("|") : null;
            stepCurrent.choices = [];
            for (let i = 0; i < stepData.intestatarioFornitura.length; i++) {
                stepCurrent.choices.push({
                    "answer": stepData.intestatarioFornitura[i],
                    "details": (choicesexplain) ? choicesexplain[i] : null,
                    "tracking": (stepData.trackingid && stepData.trackingid[i]) ? stepData.trackingid[i] : stepData.intestatarioFornitura[i]
                });

            }

            break;

        case "scelta_tariffa":
            stepCurrent.type = "fare-setup";
            stepCurrent.subtype = "largebuttons";

            stepCurrent.singlePath = true;

            stepCurrent.rightbox = "paymentSummary";

            stepCurrent.questions[0] = stepData.titoloColonna1Tariffe;
            stepCurrent.rightBoxTitle = stepData.titoloColonna2Riepiloghi;

            stepCurrent.labels["labelTariffa1"] = stepData.labelTariffa1;
            stepCurrent.labels["descrTariffa1"] = stepData.descrizioneTariffa1.html;
            stepCurrent.labels["tooltipTariffa1"] = stepData.tooltipTariffa1;

            stepCurrent.labels["labelTariffa2"] = stepData.labelTariffa2;
            stepCurrent.labels["descrTariffa2"] = stepData.descrizioneTariffa2.html;
            stepCurrent.labels["tooltipTariffa2"] = stepData.tooltipTariffa2;

            stepCurrent.labels["fare_info"] = removeHTMLTags(
                stepData.noteRiquadroRiepilogo.html
            );

            break;

        // STEP 5
        case "pagamento_bolletta":
            stepCurrent.type = "payment-setup";

            stepCurrent.singlePath = true;

            stepCurrent.rightbox = "paymentSummary";
            stepCurrent.questions = [
                stepData.titoloModalitDiPagamento,
                stepData.titoloTipoBolletta,
            ];

            stepCurrent.recapGas = stepData.visualizzariepilogogas || !(stepData.visualizzariepilogogas || stepData.visualizzariepilogoluce);
            stepCurrent.recapLuce = stepData.visualizzariepilogoluce || !(stepData.visualizzariepilogogas || stepData.visualizzariepilogoluce);
            stepCurrent.rightBoxTitle = stepData.titoloColonna2Riepiloghi;

            configurazionepagamento = [
                JSON.parse(stepData.configurazionepagamento[0]),
                JSON.parse(stepData.configurazionepagamento[1])
            ]

            stepCurrent.discount = {
                'nota': stepData.notaSconto,
                'koTitolo': configurazionepagamento[0]?.titolonotapagamento,
                'koTesto': configurazionepagamento[0]?.testonotapagamento,
                'okTitolo': configurazionepagamento[1]?.titolonotapagamento,
                'okTesto': configurazionepagamento[1]?.testonotapagamento
            }

            stepCurrent.choices = {
                0: [
                    configurazionepagamento[0].etichettapagamento,
                    configurazionepagamento[1].etichettapagamento,
                ],
                1: [
                    JSON.parse(stepData.configurazionebolletta[0]).etichettabolletta,
                    JSON.parse(stepData.configurazionebolletta[1]).etichettabolletta,
                ],
            };
            stepCurrent.icons = {
                0: ["icon-bollettino-postale", "icon-CC-bancario"],
                1: ["icon-bolletta-cartacea", "icon-bollette-digitale"],
            };
            stepCurrent.event_labels = {
                0: ["addebito_cartacea", "addebito_digitale"],
                1: ["bollettino_cartacea", "bollettino_digitale"],
            };

            break;

        case "uscita":
            // tipologie: single_card, double_card, suggestion
            // tipo card: header_card, ko_card, empty_card

            //stepCurrent.label = "";

            stepCurrent.type = "exit";
            stepCurrent.subtype = (stepData.subtype)?stepData.subtype:'double_card'; //single_card, double_card, suggestion
            stepCurrent.rightbox = "none";

            stepCurrent.exit = {
                title: stepData.testoIntroduttivoUscite.html,
                subtitle: false,

                cards: [{
                    type: stepData.varianteuscitabox1,
                    color: ( stepData.coloreEsadecimaleSfondoBox1 && stepData.coloreEsadecimaleSfondoBox1.length > 0 ) ? stepData.coloreEsadecimaleSfondoBox1 : "#ffcd00",
                    text: stepData.testoBox1.html,
                    commodity: stepData.commoditybox1,
                    details: false,
                    weborder: (stepData.linkAtterraggio1Applicativo)?stepData.operazionebox1:false,
                    cta: stepData.labelcta1,
                    link: stepData.linkAtterraggio,
                    promo: stepData.visualizzaPromoInBox1,
                }, {
                    type: stepData.varianteuscitabox2,
                    color: ( stepData.coloreEsadecimaleSfondoBox2 && stepData.coloreEsadecimaleSfondoBox2.length > 1 ) ? stepData.coloreEsadecimaleSfondoBox2 : "#ffcd00",
                    text: stepData.testoBox2.html,
                    commodity: stepData.commoditybox2,
                    details: false,
                    weborder: (stepData.linkAtterraggio2Applicativo)?stepData.operazionebox2:false,
                    cta: stepData.labelcta2,
                    link: stepData.linkAtterraggio2,
                    promo: stepData.visualizzaPromoInBox2,
                }]
            }

            break;
    }

    return stepCurrent;
}

export function promo(stepData) {

    let promo = {
        active: false,
        placeholder: getStartImage( stepData.offertaRiferimentoResid?.imgHeroBanner?._path, "big" )
    };

    if (stepData.visualizzaPromoInQuestoStep) {
        promo.active = true;
        promo.txt = stepData.promozioneRiferimento.copyPromozione.html;
        promo.img = getStartImage(stepData.promozioneRiferimento.immagineHeroBanner?._path, "big");
        promo.img_small = getStartImage(stepData.promozioneRiferimento.immagineFasciaPromo?._path, "small");
        promo.color = stepData.promozioneRiferimento.coloreBackgroundFasciaPromozionale;
        promo.color_style = "--promo-bkg: #" + promo.color;

        promo.activefor = stepData.promozioneRiferimento.tipologiaPromozione;

        for (let i = 0; i < promo.activefor.length; i++) {
            if (promo.activefor[i] == "dual") {
                promo.activefor[i] = "luce e gas";
            }
        }
    }

    return promo;
}

export function promoInStep(stepData) {
    return (stepData.visualizzaPromoInQuestoStep)?true:false;
}
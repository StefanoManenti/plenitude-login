export function track(commodity, micro_step, pagename, opzione, prodotto, settore) {
    try {
        micro_step = ( commodity == 'gas' || commodity == 'luce' ) && ( micro_step=='intestatario' || micro_step=='check_fornitura' ) ? micro_step +'_'+ commodity : micro_step;

        //- track analytics ---
        window.callDataLayer({
            commodity: commodity, //luce,
            event: "customSubscription",
            from: window.datalayerPageInfo?.from,
            listino: "base",
            macro_step: "0_overlay_step",
            micro_step: micro_step, // "intestatario_luce",
            operazione: "weborder",
            opzione: opzione, // monoraria 
            pageName: pagename, // "intestatario",
            page_location: window.location.href,
            prodotto: prodotto, // prodotto
            settore: settore, // "Residenziale",
            siteSection1: window.datalayerPageInfo?.siteSection1,
            siteSection2: window.datalayerPageInfo?.siteSection2,
            userLoginState: window.dataLayerUser?.userLoginState
        });

        //- track contentn square ---
        // window._uxa = window._uxa || [];
        // window._uxa.push([
        //     "trackPageview",
        //     window.location.pathname +
        //     window.location.hash.replace("#", "?__") +
        //     "?cs-offerta-link-luce-gas=" +
        //     micro_step,
        // ]);
    } catch (error) {
        // tracking is not ready
        console.error("analytics track", {
            commodity: commodity, //luce,
            event: "customSubscription",
            from: window.datalayerPageInfo?.from,
            listino: "base",
            macro_step: "0_overlay_step",
            micro_step: micro_step, // "intestatario_luce",
            operazione: "weborder",
            opzione: opzione, // monoraria 
            pageName: pagename, // "intestatario",
            page_location: window.location.href,
            prodotto: prodotto, // prodotto
            settore: settore, // "Residenziale",
            siteSection1: window.datalayerPageInfo?.siteSection1,
            siteSection2: window.datalayerPageInfo?.siteSection2,
            userLoginState: window.dataLayerUser?.userLoginState
        })
    }
}

export function trackButton(commodity, action) {
    try {
        //- track analytics ---
        window.callDataLayer({
            event: "customEvent",
            eventAction: action,
            eventCategory: "carrello_step",
            eventLabel: commodity
        });

    } catch (error) {
        // tracking is not ready
        console.error("analytics trackButton", {
            event: "customEvent",
            eventAction: action,
            eventCategory: "carrello_step",
            eventLabel: commodity
        })
    }
}
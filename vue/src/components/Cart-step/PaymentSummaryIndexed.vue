<template id="payment-summary-default">
    <div class="wrapper">
        <div>
            <span>Prezzo all'ingrosso</span>
            <span class="text-right"><strong>{{ index }}</strong></span>
        </div>
        <div>
            <span>Contributo al consumo</span>
            <span class="text-right"><strong>{{ this.formatPrice( f ) }} </strong>€/{{ unit }}</span>
        </div>
        <div>
            <span>Costi commercializzazione e vendita</span>
            <span class="text-right"><strong>{{ commercializzazione }} </strong>€/mese</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentSummaryIndexed",
    template: '#payment-summary-indexed',

    props: ["f", "unit", "index", "commercializzazione"],
    data: function () {
        return {
            //value: -1
        };
    },

    created: function () {
        //this.value = -1;
    },
    beforeMount: function () {
        //this.value = -1;
    },

    methods: {
        siDec: function (x, decimals) {   // Sistema Internazionale Unità di Misura con numero di decimali variabile
            return x.toFixed(decimals).replace('.', ',');
        },

        formatPrice: function (price) {
            return price.toFixed(4).replace(".", ",").replace(/[.,]*(000+)$/g, "");
        }
    }
}
</script>

<style lang="scss" scoped>

$min-desktop-res: 1024px;
$max-mobile-res: 1023px;

.wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        line-height: 1.4em;
        font-size: 14px;
        gap: 10px;

        .text-right {
            text-align: right;
            flex-grow: 1;
            flex-shrink: 0;
        }

        strong {
            font-size: 24px;
            font-weight: 700;

            @media (max-width: $max-mobile-res) {
                font-size: 18px;
            }
        }

        span:last-child {font-size: 16px;}
    }
}
</style>
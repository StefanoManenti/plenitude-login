<template id="payment-summary-default">
    <div>
        <div class="wrapper">
            <div>
                <span class="fare-name">{{label}}</span>
                <div class="tooltip-step" v-if="f.tooltip">
                    <span class="tooltiptext tooltip-right" v-html="f.tooltip"></span>
                </div>
            </div>

            <div v-if="(((bill == 'digitale') && (payment == 'addebito diretto')) || (paymentsetup == 'fare-setup'))"
                class="fare-price">
                <div>
                    <span class="price">{{ price }} </span>
                    <span class="unit">€/{{ unit }}</span>
                </div>
                <div class="secondyear">dal 2° anno {{ priceSecondYear }}</div>
            </div>
            <div v-else class="fare-price">
                <div>
                    <span class="price">{{ price }} </span>
                    <span class="unit">€/{{ unit }}</span>
                </div>
                <div class="secondyear">dal 2° anno {{ priceSecondYear }}</div>
            </div>
        </div>
        <div class="wrapper commercializzazione" v-if="commercializzazione">
            <div>
                <span>Costi commercializzazione e vendita</span>
            </div>

            <div class="fare-price">
                <div>
                    <span class="price">{{ commercializzazione }} </span>
                    <span class="unit">€/{{ unit }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentSummarySecondYear",
    template: '#payment-summary-second-year',

    props: ['payment', 'bill', 'paymentsetup', "f", "unit", 'discountType', 'discountIsActive', "commercializzazione", "label", 'discountPercent'],
    data: function () {
        return {
            price: 0
            //value: -1
        };
    },

    created: function () {
        //this.value = -1;
    },
    beforeMount: function () {
        console.log('PaymentSummarySecondYear beforeMount', this.f, this.commercializzazione);

        //this.value = -1;
        this.calculatePrice();
    },
    watch: {
        discountType: function (newVal, oldVal) { // watch it
            console.log('PaymentSummaryDefault discountType changed: ', newVal, ' | was: ', oldVal);
            this.calculatePrice();
        },
        discountIsActive: function (newVal, oldVal) { // watch it
            console.log('PaymentSummaryDefault discountIsActive changed: ', newVal, ' | was: ', oldVal);
            this.calculatePrice();
        }
    },
    methods: {
        siDec: function (x, decimals) {   // Sistema Internazionale Unità di Misura con numero di decimali variabile
            return x.toFixed(decimals).replace('.', ',');
        },

        formatPrice: function (price) {
            return price.toFixed(4).replace(".", ",").replace(/[.,]*(000+)$/g, "");
        },

        calculatePrice: function () {
            let discount = 1;

            if (this.discountIsActive) {
                if (this.discountType == 'digital') {
                    discount = (100 - this.discountPercent) / 100;
                } else if (this.discountType == 'direct') {
                    discount = (100 - this.discountPercent) / 100;
                }
            }

            this.price = this.formatPrice(this.f.base * discount);
            this.priceSecondYear = this.formatPrice(this.f.discount * discount);
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    &.commercializzazione > div:first-child {
        padding-top: 8px;
    }
}
</style>
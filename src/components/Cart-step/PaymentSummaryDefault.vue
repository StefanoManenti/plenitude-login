<template id="payment-summary-default">
    <div v-if="loaded">
        <div class="wrapper">
            <div>
                <span class="fare-name">{{label}}</span>
                <div class="tooltip-step" v-if="f.tooltip">
                    <span class="tooltiptext tooltip-right" v-html="f.tooltip"></span>
                </div>
            </div>

            <div class="fare-price">
                <price :price="price" :unit="unit"></price>
            </div>
        </div>
        <div class="wrapper commercializzazione" v-if="commercializzazione">
            <div>
                <span>Costi commercializzazione e vendita</span>
            </div>

            <div class="fare-price">
                <price :price="commercializzazione" :unit="unit"></price>
            </div>
        </div>
    </div>
</template>

<script>
import Price from './Price.vue';

export default {
    name: "PaymentSummaryDefault",
    template: '#payment-summary-default',

    components: {
        Price
    },

    props: ['payment', 'bill', 'paymentsetup', "f", "unit", 'discountType', 'discountIsActive', "commercializzazione", "label", 'discountPercent'],
    data: function () {
        return {
            price: 0,
            loaded: false
            //value: -1
        };
    },

    created: function () {
        console.log('PaymentSummaryDefault created', this.f, this.commercializzazione);
        //this.value = -1;
    },
    beforeMount: function () {
        console.log('PaymentSummaryDefault beforeMount', this.f, this.commercializzazione);

        //this.value = -1;
        this.calculatePrice();
    },
    mounted: function () {
        console.log('PaymentSummaryDefault mounted', this.f, this.commercializzazione);

        //this.value = -1;
        this.loaded = true;
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
        calculatePrice: function () {
            console.log('PaymentSummaryDefault calculatePrice:', this.discountType, this.discountIsActive, this.discountPercent);

            let discount = 1;

            if (this.discountIsActive) {
                if (this.discountType == 'digital') {
                    discount = (100 - this.discountPercent) / 100;
                } else if (this.discountType == 'direct') {
                    discount = (100 - this.discountPercent) / 100;
                }
            }

            this.price = this.f.base * discount;
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
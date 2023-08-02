<template id="payment-summary">
    <div :class="[((bill == 'digitale') && (payment == 'addebito diretto')) ? 'summary' : 'summary']">

        <div class="detail">
            <div v-if="show.luce">

                <div v-if="!commodity.luce.indexed && !commodity.luce.discountSecondYear" :class="{ 'monoraria': show.monoraria, 'bioraria': show.bioraria }">
                    <payment-summary-default :f="commodity.luce.f" :unit="'kWh'" :payment="payment" :bill="bill" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :paymentsetup="paymentsetup" label="LUCE 24h" :commercializzazione="commodity.luce.commercializzazione"></payment-summary-default>

                    <payment-summary-default :f="commodity.luce.f1" :unit="'kWh'" :payment="payment" :bill="bill" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :paymentsetup="paymentsetup" label="LUCE F1"></payment-summary-default>

                    <payment-summary-default :f="commodity.luce.f2" label="LUCE F2-F3" :unit="'kWh'" :payment="payment" :bill="bill" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :paymentsetup="paymentsetup" :commercializzazione="commodity.luce.commercializzazione"></payment-summary-default>
                </div>

                <div v-if="!commodity.luce.indexed && commodity.luce.discountSecondYear" :class="{ 'monoraria': show.monoraria, 'bioraria': show.bioraria }">
                    <payment-summary-second-year :unit="'kWh'" :payment="payment" :bill="bill" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :paymentsetup="paymentsetup" :f="commodity.luce.f" label="LUCE 24h" :commercializzazione="commodity.luce.commercializzazione"></payment-summary-second-year>

                    <payment-summary-second-year :unit="'kWh'" :payment="payment" :bill="bill" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :paymentsetup="paymentsetup" :f="commodity.luce.f1" label="LUCE F1"></payment-summary-second-year>

                    <payment-summary-second-year :unit="'kWh'" :payment="payment" :bill="bill" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :paymentsetup="paymentsetup" :f="commodity.luce.f2" label="LUCE F2-F3" :commercializzazione="commodity.luce.commercializzazione"></payment-summary-second-year>
                </div>

                <div v-if="commodity.luce.indexed">
                    <div class="summary-title">Luce {{ fare }}</div>

                    <payment-summary-indexed :unit="'kWh'" :f="commodity.luce.f.base" :index="'PUN'" :commercializzazione="commodity.luce.commercializzazione"></payment-summary-indexed>
                </div>
            </div>

            <div v-if="show.gas && type != 'fare-setup'">

                <div v-if="!commodity.gas.indexed && !commodity.gas.discountSecondYear">
                    <hr v-if="show.luce">
                
                    <payment-summary-default :unit="'Smc'" :payment="payment" :bill="bill" :paymentsetup="paymentsetup" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :f="commodity.gas.f" label="GAS" :commercializzazione="commodity.gas.commercializzazione"></payment-summary-default>
                </div>

                <div v-if="!commodity.gas.indexed && commodity.gas.discountSecondYear">
                    <hr v-if="show.luce">
                
                    <payment-summary-second-year :unit="'Smc'" :payment="payment" :bill="bill" :paymentsetup="paymentsetup" :discountIsActive="discountIsActive" :discountType="discountType" :discountPercent="discountPercent"
                        :f="commodity.gas.f" label="GAS" :commercializzazione="commodity.gas.commercializzazione"></payment-summary-second-year>
                </div>

                <div v-if="commodity.gas.indexed">
                    <div class="summary-title">Gas</div>

                    <payment-summary-indexed :unit="'Smc'" :f="commodity.gas.f.base" :index="'PSV'" :commercializzazione="commodity.luce.commercializzazione"></payment-summary-indexed>
                </div>
            </div>
        </div>

        <div v-if="paymentsetup == 'fare-setup'" class="fare-info">
            {{ labels["fare_info"] }}
        </div>
    </div>
</template>

<script>
import PaymentSummaryDefault from './PaymentSummaryDefault.vue';
import PaymentSummaryIndexed from './PaymentSummaryIndexed.vue';
import PaymentSummarySecondYear from './PaymentSummarySecondYear.vue';

export default {
    name: "PaymentSummary",
    template: '#payment-summary',

    components: {
        PaymentSummaryDefault,
        PaymentSummaryIndexed,
        PaymentSummarySecondYear
    },


    props: ['commodity', 'fare', 'payment', 'bill', 'paymentsetup', "preselection", 'labels', 'type', 'gas', 'luce', 'discountType', 'discountIsActive', 'discountPercent'],
    watch: {
        fare: function (newVal) { // watch it
            this.visibility(newVal);
        },
        discountType: function (newVal, oldVal) { // watch it
            console.log('PaymentSummary discountType changed: ', newVal, ' | was: ', oldVal);
        },
        discountIsActive: function (newVal, oldVal) { // watch it
            console.log('PaymentSummary discountIsActive changed: ', newVal, ' | was: ', oldVal);
        }
    },
    data: function () {
        return {
            show: {
                gas: false,
                luce: false,
                monoraria: false,
                bioraria: false
            }
        };
    },

    created: function () {
        this.supply = this.preselection.toUpperCase();
    },

    beforeMount: function () {
        console.log("PaymentSummary created", this.commodity );

        this.visibility(this.fare);
    },

    methods: {
        visibility: function (commodity) { 
            console.log('payment-summary visibility', commodity);  // Sistema Internazionale Unità di Misura con numero di decimali variabile
            // price box visibility
            this.show.gas = (this.supply == 'GAS' || this.supply == 'GAS E LUCE' || this.supply == 'LUCE E GAS') && this.gas;
            this.show.luce = (this.supply == 'LUCE' || this.supply == 'GAS E LUCE' || this.supply == 'LUCE E GAS') && this.luce;
            this.show.monoraria = this.show.luce && commodity == 'monoraria';
            this.show.bioraria = this.show.luce && commodity == 'bioraria';
        }
    }
}
</script>

<style lang="scss">

@import "./styles/variables";

.summary-title {
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    text-transform: uppercase;

    &:after {
        content: "\00a0";
        height: 1px;
        background-color: $dark;
        display: block;
        margin: 15px 0;
    }
}

.detail {
    .monoraria {
        > * {display: none;
            &:first-child {display: block;}
        }
    }

    .bioraria {
        > * {display: block;
            &:first-child {display: none;}
        }
    }
}
</style>

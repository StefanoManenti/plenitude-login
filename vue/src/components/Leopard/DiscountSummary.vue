<template id="discount-summary">
    <div>
        <discount-summary-digital v-if="type=='digital'" :isActive="isActive" :config="configDefault"></discount-summary-digital>
        <discount-summary-direct v-if="type=='direct'" :isActive="isActive" :config="configDefault"></discount-summary-direct>
    </div>
</template>

<script>

import DiscountSummaryDigital from "./DiscountSummaryDigital.vue";
import DiscountSummaryDirect from "./DiscountSummaryDirect.vue";

export default {
    name: "DiscountSummary",

    components: {
        DiscountSummaryDigital,
        DiscountSummaryDirect
    },

    template: '#discount-summary',

    props: ["bill", "payment", "discount", "config"],
    data: function () {
        return {
            isActive: false,
            type: 'none'
        };
    },
    watch: {
        bill: function (newVal, oldVal) { // watch it
            console.log('DiscountSummary bill changed: ', newVal, ' | was: ', oldVal);

            this.checkDiscount();
        }, 
        payment: function (newVal, oldVal) { // watch it
            console.log('DiscountSummary payment changed: ', newVal, ' | was: ', oldVal);

            this.checkDiscount();
        }, 
        discount: function (newVal, oldVal) { // watch it
            console.log('DiscountSummary payment changed: ', newVal, ' | was: ', oldVal);

            this.checkDiscount();
        }
    },
    created: function () {
    },
    beforeMount: function () {
        console.log('DiscountSummary beforeMount', this.discount, this.bill, this.payment);

        this.configDefault = {
            koTitolo: this.config.koTitolo ? this.config.koTitolo : "RISPARMIA CON LO SCONTO DIGITALE.",
            koTesto: this.config.koTesto ? this.config.koTesto : "Per usufruire dello sconto digitale è necessario impostare l’addebito diretto e la bolletta digitale.",
            okTitolo: this.config.okTitolo ? this.config.okTitolo : "SCONTO DIGITALE ATTIVO.",
            okTesto: this.config.okTesto ? this.config.okTesto : null,
        } 
    },

    methods: {
        checkDiscount: function(){
            console.log('DiscountSummary checkDiscount', this.discount, this.bill, this.payment)

            if (this.discount.direct) {
                this.type = "direct";
                if (this.payment == 'addebito diretto') {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            } else if (this.discount.digital) {
                this.type = "digital";
                if ((this.bill == 'digitale') && (this.payment == 'addebito diretto')) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }

            this.$emit('setDiscount', {"type":this.type, "isActive":this.isActive});
        }
    }
}
</script>

<style lang="scss" scoped></style>
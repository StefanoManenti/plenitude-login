<template id="question-fare-setup">
    <li>
        <!-- <div class="info">question-fare-setup</div> -->
        <div v-html="question" class="question"></div>
        <div>
            <button :data-automation="trackingclass + '-yes'" :class="[value == 0 ? 'active' : '']"
                @click="updateValue(index, 0)" class="large">

                <div class="check"></div>
                <div class="title">
                    <span class="icon icon-monoraria"></span>
                    <div class="uppercase">{{ labels["labelTariffa1"] }}</div>
                </div>

                <div class="details">
                    <div v-html="labels['descrTariffa1']"></div>
                    <div>
                        <price :price="f" unit="kWh"></price>
                    </div>
                </div>

                <div v-if="focusCommodity.luce.indexed" class="pricebox mobileOnly">
                    <payment-summary-indexed :unit="'kWh'" :f="focusCommodity.luce.f.base" :index="'PUN'"
                        :commercializzazione="focusCommodity.luce.commercializzazione"></payment-summary-indexed>
                </div>

            </button>

            <button :data-automation="trackingclass + '-no'" :class="[value == 1 ? 'active' : '']"
                @click="updateValue(index, 1)" class="large">
                <div class="check"></div>
                <div class="title">
                    <div>
                        <span class="icon icon-bioraria-sx"></span>+<span class="icon icon-bioraria-dx"></span>
                    </div>
                    <div class="uppercase">{{ labels["labelTariffa2"] }}</div>
                </div>

                <div class="details">
                    <div v-html="labels['descrTariffa2']"></div>
                    <div>
                        <price :price="f1" unit="kWh"></price>
                        <price :price="f2" unit="kWh"></price>
                    </div>
                </div>

                <div v-if="focusCommodity.luce.indexed" class="pricebox mobileOnly">
                    <payment-summary-indexed :unit="'kWh'" :f="focusCommodity.luce.f.base" :index="'PUN'"
                        :commercializzazione="focusCommodity.luce.commercializzazione"></payment-summary-indexed>
                </div>
            </button>
        </div>
    </li>
</template>

<script>
import PaymentSummaryIndexed from './PaymentSummaryIndexed.vue';
import Price from './Price.vue';

export default {
    name: "QuestionFareSetup",
    template: '#question-fare-setup',

    components: {
        PaymentSummaryIndexed,
        Price
    },

    props: ['question', 'fare', 'index', 'trackingclass', 'labels', 'commodity', 'focusCommodity'],
    data: function () {
        return {
            value: 0,
            f: 0,
            f1: 0,
            f2: 0,
            selectedFare: this.fare
        };
    },

    created: function () {
    },

    beforeMount: function () {

    },

    mounted: function () {
        console.log('QuestionFareSetup mounted', this.focusCommodity);

        this.f = this.focusCommodity.luce.f.base;
        this.f1 = this.focusCommodity.luce.f1.base;
        this.f2 = this.focusCommodity.luce.f2.base;

        //if (this.selectedFare == null) {
        // preselect the first value
        this.updateValue(0, 0);
        //}
    },

    methods: {
        updateValue: function (index, val) {
            console.log('question-fare updateValue', index, val);
            this.value = val;

            switch (val) {
                case 0:
                    this.selectedFare = this.labels["labelTariffa1"].toLowerCase();
                    //this.fare = "bioraria";
                    break;
                case 1:
                    this.selectedFare = this.labels["labelTariffa2"].toLowerCase();
                    //this.fare = "monoraria";
                    break;
            }

            console.log('question-fare emit', this.selectedFare);
            this.$emit('update-fare-setup', this.selectedFare);
            this.$emit('update-value', [index, val]);
        }
    }
}
</script>

<style lang="scss" scoped>
$min-desktop-res: 1024px;
$max-mobile-res: 1023px;

.details {
    width: 100%;
    font-size: 16px;

    @media (max-width: $max-mobile-res) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    p {
        margin: 0;
    }

    >div {
        span {
            font-weight: normal;
            font-size: 14px;
        }

        &:first-child {
            @media (min-width: $min-desktop-res) {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                gap: 5px;
            }
        }


        &:last-child {
            display: flex;
            flex-direction: column;
            gap: 21px;

            @media (min-width: $min-desktop-res) {
                display: none;
            }
        }
    }
}
</style>

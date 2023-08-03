<template id="discount-summary-direct">
    <div class="wrapper">
        <div v-if="isActive">
            <div class="discount active">
                <div class="info">
                    <div class="ico active"></div>
                    <div class="status">{{ config.okTitolo }}</div>
                    <div class="explanation" v-if="config.okTesto">{{ config.okTesto }}</div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="discount">
                <div class="info">
                    <div class="ico info"></div>
                    <div class="info-wrapper">
                        <div class="status">{{ config.koTitolo }}</div>
                        <div class="explanation">{{ config.koTesto }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscountSummaryDirect",
    template: '#discount-summary-direct',

    props: ["isActive", "config"],
    data: function () {
        return {

        };
    },

    created: function () {
    },
    beforeMount: function () {
    },

    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
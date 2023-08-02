<template id="discount-summary-digital">
    <div class="wrapper">
        <div v-if="isActive">
            <div class="discount active">
                <div class="info">
                    <div class="ico active"></div>
                    <div class="status">SCONTO DIGITALE ATTIVO.</div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="discount">
                <div class="info">
                    <div class="ico info"></div>
                    <div class="info-wrapper">
                        <div class="status">RISPARMIA CON LO SCONTO DIGITALE</div>
                        <div class="explanation">Per usufruire dello sconto digitale è necessario impostare l’addebito
                            diretto e la bolletta digitale.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscountSummaryDigital",
    template: '#discount-summary-digital',

    props: ["isActive"],
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
<template id="claim">
    <div>
        Stare Insieme è un'esperienza sorprendente
    </div>
</template>

<script>
export default {
    name: "Claim",

    props: [],
    watch: {

    },
    data: function () {
        return {
            value: -1
        };
    },
    created: function () {
        this.value = -1;
    },

    beforeMount: function () {
        this.value = -1;
    },

    methods: {
        
    }
}
</script>


<style lang="scss" scoped>
    /*
    @import "./styles/variables";

    .mobileOnly {
        @media (min-width: $min-desktop-res){
            display: none !important;
        }
    }

    .desktopOnly {
        @media (max-width: $max-mobile-res){
            display: none !important;
        }
    }
    */
</style>
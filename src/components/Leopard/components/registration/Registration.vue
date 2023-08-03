<template id="registration">
    <div>
        <div>Registrazione</div>
        <div>Inserisci dati</div>
    </div>
</template>

<script>
export default {
    name: "Registration",

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
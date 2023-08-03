<template id="step">
    <div class="step bounceIn">
        <div class="container">
            
            <login-or-register></login-or-register>
            <registration></registration>

        </div>
    </div>
</template>


<script>
import LoginOrRegister from './components/loginorregister/LoginOrRegister.vue';
import Registration from './components/registration/Registration.vue';

// import { trackButton } from "./services/analytics";

export default {
    name: "Step",

    components: {
        LoginOrRegister,
        Registration,
    },

    props: ['step', 'index'],
    data: function () {
        return {
        
        };
    },

    created: function () {

    },

    mounted: function () {
        console.log("Step mounted");
        console.log("Step id: ", this.step.id);
    },

    methods: {

        /*
        goPrev: function () {
            this.$emit('go-prev');
        },
        */

    }
}
</script>

<style lang="scss" scoped>
    //@import "./styles/variables";

    .code {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color:#F4F4F4;
    }

    /*
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

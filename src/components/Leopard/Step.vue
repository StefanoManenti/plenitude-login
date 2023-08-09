<template id="step">
    <div class="step bounceIn">
        <div class="container">
            <login-or-register v-if="stepCurrent == 'login-or-register'"></login-or-register>
            <registration v-if="stepCurrent == 'registration'"></registration>
        </div>

        <switcher @update-component="onUpdateComponent"></switcher>
    </div>
</template>


<script>
import Switcher from './components/switcher/Switcher.vue';
import LoginOrRegister from './components/loginorregister/LoginOrRegister.vue';
import Registration from './components/registration/Registration.vue';

// import { trackButton } from "./services/analytics";

export default {
    name: "Step",

    components: {
        Switcher,
        LoginOrRegister,
        Registration,
    },

    props: ['step', 'index'],
    data: function () {
        return {
            stepCurrent: "login-or-register",
        };
    },

    created: function () {

    },

    mounted: function () {
        console.log("Step mounted");
        console.log("Step id: ", this.step.id);
    },

    methods: {
        onUpdateComponent: function(cmp) {
            console.log('onUpdateComponent', cmp);
            this.stepCurrent = cmp;
        }

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

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
import LoginOrRegister from './components/login-or-register/LoginOrRegister.vue';
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

.step__content {
  display: flex;
  flex-direction: row;
  height: 75vh;
}

//.step__editorial {
//  flex-basis: 26vw;
//}


</style>

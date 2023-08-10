<template id="step">
  <div class="step bounceIn">
    <div class="container">
      <login-or-register v-if="stepCurrent === 'login-or-register'"></login-or-register>
      <registration v-if="stepCurrent === 'registration'"></registration>
      <mail-verification v-if="stepCurrent === 'mail-verification'"></mail-verification>
    </div>

    <switcher @update-component="onUpdateComponent"></switcher>
  </div>
</template>


<script>
import Switcher from './components/switcher/Switcher.vue';
import LoginOrRegister from './components/login-or-register/LoginOrRegister.vue';
import Registration from './components/registration/Registration.vue';
import MailVerification from "@/components/Leopard/components/registration/MailVerification.vue";

export default {
  name: "Step",

  components: {
    MailVerification,
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
    onUpdateComponent: function (cmp) {
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


</style>

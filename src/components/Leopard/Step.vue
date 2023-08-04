<template id="step">
  <div class="step bounceIn">
    <div class="step__content">

<!--      <div class="step__editorial">-->
<!--        <picture></picture>-->
<!--      </div>-->

      <login-or-register></login-or-register>

    </div>
  </div>
</template>


<script>
import LoginOrRegister from './components/login-or-register/LoginOrRegister.vue';
// import Registration from './components/registration/Registration.vue';

// import { trackButton } from "./services/analytics";

export default {
  name: "Step",

  components: {
    LoginOrRegister,
    // Registration,
  },

  props: ['step', 'index'],
  data: function () {
    return {};
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

.step__content {
  display: flex;
  flex-direction: row;
  height: 75vh;
}

//.step__editorial {
//  flex-basis: 26vw;
//}


</style>

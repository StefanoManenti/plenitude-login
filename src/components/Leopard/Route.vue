<template id="flow">
  <div v-touch="touch">
    <div class="container no-padding">
      <step></step>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);

import Step from "./Step.vue";

/*
import { track } from "./services/analytics"
import { fill, promo, promoInStep } from "./services/stepFill"
import { removeHTMLTags } from "./services/helpers"
*/

export default {
  name: "Flow",

  components: {
    Step,
  },

  props: [],

  data: function () {
    return {};
  },

  watch: {},

  created: function () {
    console.log("Leopard Route created");
    this.init();
  },
  destroied: function () {
  },
  mounted: function () {

    console.log("Leopard Route mounted");
  },

  computed: {
    touch: function () {
      return {
        x: this.x,
        y: this.y,
        methods: true,
      };
    },
  },

  methods: {

    init: function () {
    },


    convertPrice: function (price) {
      return price ? parseFloat(price.replace(/,/g, ".")) : 0;
    },

  },
};
</script>

<style lang="scss">

@import "./styles/variables";

.pln-login[sf-component="pln-login"][sf-version="1.0"] {
  font-family: "Source Sans Pro", sans-serif;
  background-color: $white;


  .noScroll {
    overflow: hidden;
  }
}

.component-content {
  margin: 75px auto auto;
  width: 30vw;
}

.title {
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 600;
}

.text {
  font-size: 16px;
}

.link-bottom-input {
  margin-top: 5px;
}

.link {
  color: rgb(9, 88, 165);
  font-weight: 600;
}

.sub-title {
  font-size: 24px;
  font-weight: 600;
}

.btn-outline {
  border: 1px solid;
}


</style>
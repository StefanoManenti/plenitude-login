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
        return {
        };
    },

    watch: {
    },

    created: function () {
        console.log("Leopard Route created");
        this.init();
    },
    destroied: function () { },
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
$min-desktop-res: 1024px;
$max-mobile-res: 1023px;
$desktop-step-height: 595px; //era 555px
$mobile-step-height: 100vh;
$headerbar-height: 85px;

/* Colors */
$primary: #ffcd00;
$green: #7fa545;
$green30: #2f460a;
$red: #ff4d6c;
$violet: #917ba8;

$blue-teal: #0885ae;
$link-water: #cee7ef;
$jade: #21ad72;
$blue-romance: #d7f0e5;

$info-border: $blue-teal;
$info-bkg: $link-water;
$active-border: $jade;
$active-bkg: $blue-romance;

$white: white;
$gray10: #f3f3f3;
$gray15: #f4f4f4;
$gray20: #eaeaea;
$gray30: #b9b9b9;
$gray80: #767676;
$gray90: #444444;
$dark: #333333;
$black: black;



.pln-login[sf-component="pln-login"][sf-version="1.0"] {
    font-family: "Source Sans Pro", sans-serif;
    background-color: $white;


    .noScroll {
    overflow: hidden;
}
}


</style>
<template id="price">
    <div class="wrapper">
        <span class="price">{{ f }} </span>
        <span class="unit">€/{{ unit }}</span>
    </div>
</template>


<script>
import { formatPrice } from "./services/helpers"

export default {
    template: '#price',

    components: {
    },

    props: ['price', 'unit'],


    data: function () {
        return {
            f:0
        };
    },

    created: function () {
        // this.f = formatPrice(this.price);
    },

    mounted: function () {
        this.f = formatPrice(this.price);
    },

    watch: {
         price: function (newVal) { // watch it
             this.f = formatPrice(newVal);
         },
    },

    methods: {

    }
}
</script>

<style lang="scss" scoped>

    .wrapper{
        line-height: 30px;
        
        .price {font-size:30px; font-weight: bold;}

        .unit {font-size: 16px;}
    }

</style>
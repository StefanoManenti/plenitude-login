<template id="exit-card">
    <div>   

        <exit-card-ko @activated="onActivated" v-if="info.type == 'ko'" :info="info"></exit-card-ko>

        <exit-card-empty @activated="onActivated" v-if="info.type == 'empty'" :info="info"></exit-card-empty>

        <exit-card-empty @activated="onActivated" v-if="info.type == 'noheader'" :info="info"></exit-card-empty>

        <exit-card-header @activated="onActivated" v-else-if="info.type == 'header'" :info="info" :promo="promo" :commodity="commodity" :iban="iban" ></exit-card-header>

    </div>
</template>

<script>

import ExitCardHeader from './ExitCardHeader.vue';
import ExitCardKo from './ExitCardKo.vue';
import ExitCardEmpty from './ExitCardEmpty.vue';

export default {
    template: '#exit-card',

    components: {
        ExitCardHeader,
        ExitCardEmpty,
        ExitCardKo
    },

    props: ['info', 'promo', 'commodity', 'iban'],

    data: function () {
        return {
        };
    },
    created: function () { 
        
    },

    mounted: function () { 
        console.log("ExitCard:", this.info, this.promo, this.commodity);
    },

    methods: {
        onActivated: function (val) {
            this.$emit('activated', val);
        },
    }
}
</script>
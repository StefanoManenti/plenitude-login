<template id="question">
    <li>
        <div v-html="question" class="question"></div>
        <div class="btn-container large">

            <div class="btn-single">
                <button :data-automation="trackingclass+'-no'" :class="[ value==1 ? 'active' : '' ]" @click="updateValue( index, 1 )" class="yesnobutton">{{choices[1]}} </button>

                <div class="explain" v-if="choicesexplain[1] != ''">{{choicesexplain[1]}}</div>
            </div>
   
            <div class="btn-single">
                <button :data-automation="trackingclass+'-yes'" :class="[ value==0 ? 'active' : '' ]" @click="updateValue( index, 0 )" class="yesnobutton">{{choices[0]}}</button>
                 <div class="explain" v-if="choicesexplain[0] != ''">{{choicesexplain[0]}}</div>
            </div>
            
        </div>
    </li>
</template>

<script>
export default {
    template: '#question',
    
    props: ['question', 'index', 'choices', 'choicesexplain', 'trackingclass'],
    data: function () {
        return {
            value: -1
        };
    },
    created: function () {
        //console.log('sf-route question', 'created');
        //console.log('sf-route question', 'created', 'trackingclass', this.trackingclass);
        this.value = -1;
    },
    beforeMount: function () {
        //console.log('sf-route question', 'beforeMount');
        this.value = -1;
    },
    methods: {
        updateValue: function (index, val) {
            console.log('updateValue', index, val);
            this.value = val;
            this.$emit('update-value', [index, val]);
        }
    }
}
</script>
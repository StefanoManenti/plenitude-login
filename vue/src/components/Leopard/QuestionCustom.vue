<template id="question-custom">
    <li>
        <!-- <div class="info">question-custom-choices</div> -->
        <div v-html="question" class="question"></div>
        <div v-if="subtype=='iconbuttons'" class="btn-container">
            <button class="iconbutton" v-for="( choice, i ) in choices" :key="i" @click="updateValue( index, i+1 )"
                :class="[ value==i+1 ? 'active' : '' ]">

                <div v-if="icons[i]!='icon-dual'" class="icon-cont">
                    <span class="icon" :class="icons[i]"></span>
                </div>
                <div v-if="icons[i]=='icon-dual'" class="icon-cont">
                    <span class="icon icon-lampadina"></span>
                    <span class="text-min">+</span>
                    <span class="icon icon-gas"></span>
                </div> 

                <div class="text">{{ choice }}</div>
                
            </button>

            
        </div>

        <div v-else-if="subtype=='normal'" class="btn-container large">
 
            <div v-for="( choice, i ) in choices" :key="i" class="btn-single">
                <button class="longbutton" @click="updateValue( index, i )" :class="[ value==i ? 'active' : '' ]">
                    <div class="text">{{ choice }}</div>
                </button>
                <div class="explain" v-if="choicesexplain[i] != ''">{{choicesexplain[i]}}</div>
            </div>
            <!-- -->

        </div>
    </li>
</template>

<script>
export default {
    template: '#question-custom',

    props: ['question', 'index', 'choices', 'choicesexplain', 'icons', 'subtype', 'trackingclass'],
    data: function () {
        return {
            value: -1
        };
    },

    created: function () {
        this.value = -1;
    },
    beforeMount: function () {
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
<template id="config-summary">
    <div class="configSummary singleStepContainer">
    
        <div class="header">
            <div class="container">
                <span class="title">Modifica le tue risposte</span>
                <div class="steptitle">Conferma la tua <strong>configurazione</strong></div>
                <div class="substeptitle">Per modificare una risposta basta selezionarla.</div>
    
                <div class="close" @click="closeConfigSummary"></div>
                <div class="decoration"></div>
            </div>
        </div>

        <div class="content">
            <div class="stepchoice" v-for="(step, index) in stepflow" :key="step.id" :class="[ exitid[2] == 0 ? 'shortline' : '' ]" >
                <config-question :questions="step.questions" :index='index+diff[index]' :answer="exitid[index+1+diff[index]]" :diff="diff[index]" :exitid="exitid" :totalquestions="exitid.length-1-incr" :type="step.type" :fare="fare" :payment="payment" :bill="bill" @change-flow="changeflow"></config-question>
            </div>
        </div>
        <div class="text-center">
            <button class="sf-btn btn--confirm mb" @click="closeConfigSummary">Conferma</button>  
        </div> 
    </div>
</template>

<script>
import ConfigQuestion from './ConfigQuestion.vue';

export default {
    template: '#config-summary',

    components: {
        ConfigQuestion
    },
    
    props: ['stepflow', 'exitid', 'fare', 'payment', 'bill'],
    data: function () {
        return {
            value: -1
        };
    },

    created: function () {
        this.value = -1;
        //console.log(stepflow);
        console.log(this.stepflow);
        console.log(this.exitid);

        this.diff = [];
        this.incr = 0;

        let i = 0;

        for (i = 0; i < this.stepflow.length; i++) {
            console.log('stepflow: ', this.stepflow[i].questions.length);
            if (this.stepflow[i].type == 'normal') {
                this.incr = this.incr+this.stepflow[i].questions.length-1;
                this.diff.push(this.incr);
            } else {
                this.diff.push(this.incr);
            } 
        }
        console.log("diff ", this.diff);
    },
    beforeMount: function () {
        this.value = -1;
    },


    methods: {
        closeConfigSummary: function () {
            this.$emit('closeconfigsummary');
        },

        changeflow: function (node) {
            console.log("changeflow in config-summary", node);
            this.closeConfigSummary();
            this.$emit('changeflow-route', node);
        },
    }
}
</script>
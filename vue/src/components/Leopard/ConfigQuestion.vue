<template id="config-question">
    <div>
        <div class="questionNumber">Domanda {{ index+1-diff }} di {{ totalquestions }}</div>

        <div v-if="(type=='normal') && (questions.length > 1)">
            <div v-for="(quest, k) in questions" :key="k">
                <div class="question" :class="[ k!=0 ? 'more' : '' ]">{{ quest }}</div>
                
                 <!-- {{ exitid }} | {{ index+k }} | {{ k }} --> 
                <div v-if="exitid[index+k]==1" class="answer" @click="changeAnswer(index-diff)">SÌ</div>
                <div v-else-if="exitid[index+k]==0" class="answer" @click="changeAnswer(index-diff)">NO</div>
            </div> 
        </div>
        <div v-if="(type=='normal') && (questions.length == 1)">
            <div class="question">{{ questions[0] }}</div>
                
            <div v-if="answer==1" class="answer" @click="changeAnswer(index)">SÌ</div>
            <div v-else-if="answer==0" class="answer" @click="changeAnswer(index)">NO</div>
        </div>

        <div v-if="(type=='multi')&&(index==0)"> 
            <!-- non gerenale, realizzato su misura sulla prima domanda -->
            <div class="question">{{ questions[0] }}</div>

            <div v-if="answer==1" class="answer" @click="changeAnswer(index)">LUCE E GAS</div>
            <div v-else-if="answer==2" class="answer" @click="changeAnswer(index)">LUCE</div>
            <div v-else-if="answer==3" class="answer" @click="changeAnswer(index)">GAS</div>
        </div>

        <div v-if="type=='fare-setup'">
            <div class="question">{{ questions[0] }}</div>
            <div class="answer" @click="changeAnswer(index)">{{ fare }}</div>
        </div>

        <div v-if="type=='payment-setup'">
            <div class="question">{{ questions[0] }}</div>
            <div class="answer" @click="changeAnswer(index)">{{ payment }}</div>
        
            <div class="question more">{{ questions[1] }}</div>
            <div class="answer" @click="changeAnswer(index)">{{ bill }}</div>
        
            <div v-if="(bill == 'digitale')&&(payment == 'addebito diretto')">
                <div class="info">
                    <span class="icon icon-check"></span> Sconto digitale ATTIVO
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    template: '#config-question',
    
    props: ['questions', 'index', 'answer', 'diff', 'exitid', 'totalquestions', 'type', 'fare', 'payment', 'bill'],
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
        changeAnswer: function (node) {
            node++;
            console.log("changeAnswer in config-question", node);
            this.$emit('change-flow', node);
        },

    }
}
</script>
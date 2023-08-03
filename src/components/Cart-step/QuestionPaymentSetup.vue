<template id="question-payment-setup">
    <li :class="[force ? 'disable' : '']">
        <!-- <div class="info">question-payment-setup</div> -->
        <div v-html="question" class="question"></div>
        <div class="btn-container min-space">
            <button :id="'btn_' + lowerize(choice)" class="middlebutton" v-for="( choice, i ) in choices" :key="i"
                @click="onClick(index, i)" :class="[value == i ? 'active' : '']">
                <span>{{ choice }}</span>
            </button>
        </div>
    </li>
</template>


<script>
export default {
    template: '#question-payment-setup',


    props: ['question', 'event_category', 'index', 'choices', 'event_labels', 'payment', 'bill', 'force'],
    data: function () {
        return {
            value: 1
        };
    },

    created: function () {
    },

    beforeMount: function () {
        let forced = false;

        if (this.force) {
            for (let i = 0; i < this.choices.length; i++) {
                if (this.force.toLowerCase() == this.choices[i].toLowerCase()) {
                    forced = true;
                    this.updateValue(this.index, i);
                }
            }
        }

        if (!forced) {
            this.updateValue(this.index, this.value);
        }
    },

    mounted: function () {
        console.log('question-payment-setup mounted question', this.question);
        console.log('question-payment-setup mounted choices', this.choices);
    },

    methods: {

        onClick: function (index, val) {
            if (this.force) {
                return false;
            }

            this.updateValue(index, val);
        },

        updateValue: function (index, val) {


            console.log('updateValue', index, val);
            this.value = val;

            console.log('this.value payment setup ----> ', this.index, this.value);

            switch (this.index) {
                case 0:
                    this.$emit('payment-setup-update', 'payment', (this.value == 0) ? "bollettino" : "addebito diretto");
                    break;
                case 1:
                    this.$emit('payment-setup-update', 'bill', (this.value == 0) ? "cartaceo" : "digitale");
                    break;
            }

            // this.trackClicks(this.event_labels[index][val], this.event_category);
            this.$emit('update-value', [index, val]);
        },

        lowerize: function (val) {
            val = val.toLowerCase().replace(/\s+/g, '');
            return val;
        },

        // trackClicks: function (event_label, event_category) {
        //     try {
        //         console.log('Route trackClicks event_label', event_label);
        //         console.log('Route trackClicks event_category', event_category);

        //         //- track analytics ---
        //         window.callDataLayer({
        //             'event': "customEvent",
        //             'eventAction': "carrello_step",
        //             'eventLabel': event_label,
        //             'eventCategory': event_category,
        //         });

        //         console.log('QuestionPaymentSetup trackClicks --> after callDataLayer()');

        //         //- track content square ---
        //         //window._uxa = window._uxa || [];
        //         //window._uxa.push(['trackPageview', window.location.pathname+window.location.hash.replace('#','?__') + '?cs-offerta-link-luce-gas='+this.micro_step]);
        //     } catch (error) {
        //         // tracking is not ready
        //     }
        // },
    }
}
</script>

<style lang="scss" scoped>
button {
    span {
        max-width: 150px;
    }
}

li.disable {
    &>div {
        button {
            cursor: default;

            &:first-child {
                opacity: 0.5;
            }
        }
    }
}
</style>
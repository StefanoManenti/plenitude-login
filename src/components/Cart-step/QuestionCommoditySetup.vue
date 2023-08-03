<template id="question-commodity-setup">
    <li>
        <!-- <div class="info">question-custom-choices</div> -->
        <!-- <div v-html="question" class="question"></div> -->
        <div class="question">{{ question }}</div>
        <div v-if="subtype == 'iconbuttons'" class="btn-container">
            <button class="iconbutton" v-for="( choice, i ) in choices" :key="i"
                :id="'commodity_' + lowerize(choice.answer)" @click="updateValue(index, i + 1)"
                :class="[value == i + 1 ? 'active' : '']">

                <div v-if="icons[i] != 'icon-dual'" class="icon-cont">
                    <span class="icon" :class="icons[i]"></span>
                </div>
                <div v-if="icons[i] == 'icon-dual'" class="icon-cont">
                    <span class="icon icon-lampadina"></span>
                    <span class="text-min">+</span>
                    <span class="icon icon-gas"></span>
                </div>

                <div class="text uppercase">{{ choice.answer }}</div>
            </button>
        </div>

        <!-- -->

        <div v-else-if="subtype == 'normal'" class="btn-container large">

            <div v-for="( choice, i ) in choices" :key="i">
                <button class="longbutton" @click="updateValue(index, i)" :class="[value == i ? 'active' : '']">
                    <div class="text">{{ choice.answer }}</div>
                </button>
                <div class="explain" v-if="choice.details">{{ choice.details }}</div>
            </div>

        </div>
    </li>
</template>

<script>

export default {
    template: '#question-commodity-setup',

    props: ['question', 'index', 'choices', 'icons', 'subtype', 'preselection', 'trackingclass', 'labels', 'supplyCode'],
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

    mounted: function () {
        console.log('question-commodity-setup', this.index, this.choices);

        if (this.subtype == 'iconbuttons') {
            // commodity check preselection

            for (let i = 0; i < this.choices.length; i++) {
                if (this.choices[i].answer?.toLowerCase() == this.preselection?.toLowerCase()) {
                    this.updateValue(this.index, i + 1);
                }
            }
        }
    },

    methods: {
        updateValue: function (index, val) {
            console.log('question-commodity-setup updateValue', index, val);
            let trackingKey = (this.subtype == 'iconbuttons') ? this.choices[val - 1].tracking : this.choices[val].tracking;
            console.log('question-commodity-setup updateValue', trackingKey);

            this.value = val;

            this.$emit('update-value', [index, val, trackingKey]);
        },

        lowerize: function (val) {
            val = val.toLowerCase().replace(/\s+/g, '');
            return val;
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
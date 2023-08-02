<template id="headerbar">
    <div class="header">
        <div class="container">
            <!-- Back command on header -->

            <div v-if="(stepId != 0)&&(type != 'exit')" class="back" @click="goPrev"> 
                <span class="icon icon-dropdown_up"></span> 
                <span class="text">Indietro</span>
            </div>


            <div v-if="type != 'exit'" id="steptitle" :class="[(stepId == 0) ? 'steptitle first' : 'steptitle']">
                <div class="titlewrapper">
                    {{ headerLabel }}
                    <span class="product"> {{ product }} </span>
                    <span class="commodity"> {{ preselection }}</span>
                </div>
                <!-- <span class="stepid">id: {{ stepId }}</span> -->
            </div>


            <!-- Exit strange behaviour for desktop & mobile -->
            <!-- comportamento confermato da UX UI -->
                <div v-if="type == 'exit'" class="reset desktopOnly" @click="resetCartStep"> 
                    <span class="icon icon-dropdown_up"></span>
                    <span class="text">Ricomincia</span>
                </div>

                <div v-if="type == 'exit'" class="back mobileOnly" @click="resetCartStep"> 
                    <span class="icon icon-dropdown_up"></span> 
                    <span class="text">Indietro</span>
                </div>

                <div v-if="type == 'exit'" id="steptitle" :class="[(stepId == 0) ? 'steptitle first' : 'steptitle']" class="mobileOnly">
                    <div class="titlewrapper">
                        {{ headerLabel }}
                        <span class="product"> {{ product }} </span>
                        <span class="commodity"> {{ preselection }}</span>
                    </div>
                </div>
            <!-- Exit strange behaviour for desktop & mobile - END -->


            <div class="close" sf-cart-modal-close @click="closeCartStep()"></div>

        </div>
        <div class="progressbar">
            <div id="filler" class="filler"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Headerbar",

    props: ['preselection', 'stepData', 'stepflow', 'headerLabel', 'stepId', 'product', 'type'],
    watch: {
        stepflow: function (newVal) { // watch it
            let totalSteps = 8;
            let advancement = 100;

            if (this.type != 'exit') {
                switch (this.preselection) {
                    case 'Luce':
                    case 'luce':
                        totalSteps = 6;
                        break
                    case 'Gas':
                    case 'gas':
                        totalSteps = 6;
                        break
                }
                advancement = 100 / totalSteps * newVal;
            }
            
            document.getElementById('filler').style.width = advancement + '%';

            
        }
    },
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
        resetCartStep: function () {
            this.$emit('go-first');
        },
        closeCartStep: function () {
            this.$emit('go-first');
            document.body.classList.remove("noScroll");
            document.getElementById('cart-step').classList.remove('open');
        },
        goPrev: function () {
            this.$emit('go-prev');
        }
    }
}
</script>


<style lang="scss" scoped>
    /*
    @import "./styles/variables";

    .mobileOnly {
        @media (min-width: $min-desktop-res){
            display: none !important;
        }
    }

    .desktopOnly {
        @media (max-width: $max-mobile-res){
            display: none !important;
        }
    }
    */
</style>
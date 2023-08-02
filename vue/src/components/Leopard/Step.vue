<template id="step" @payment-setup-completed="onPaymentSetupCompleted" @normal-question-confirmation="onNormalQuestionConfirmation">
    <div class="step bounceIn" :class="[step.id == 0 ? 'withimage bkg-image' : 'normal ' + step.micro_step]">
        <div class="container">
            <!-- PROMO right cols -->
                <img v-if="(step.id == 0 || step.subtype == 'single_card')" v-bind:src="step.promo.placeholder" class="main_img"
                    alt="alt text" loading="lazy">

                <div v-if="( step.promo.active && step.promo.activefor.includes(preselection.toLowerCase()) ) && (step.id == 0 || step.subtype == 'single_card')"
                    :class="[step.id == 0 ? 'on' : 'off']">
                    <img v-bind:src="step.promo.img" class="promo_img" alt="alt text" loading="lazy">
                    
                    <div class="promo_box" :style="step.promo.color_style">
                        <div class="wrapper">
                            <div class="text" v-html="step.promo.txt"></div>
                            <img v-bind:src="step.promo.img_small" alt="alt text" loading="lazy">
                        </div>
                    </div>
                </div>

            <div v-if="step.intro != null">
                <div class="intro" v-html="step.intro"></div>
            </div>

            <div class="box-wrapper" :class="[(step.rightbox != 'none') && (step.id != 0) ? 'supplementary-width' : 'no-flex']">
                <div class="leftbox-wrapper" :class="[(step.rightbox != 'none') && (step.id != 0) ? '' : '']">

                    <div class="box">
                        <div class="icon colorize" v-bind:class='step.icon'></div>

                        <ul v-if="step.type == 'commodity-setup'" class="questions">
                            <question-commodity-setup v-for="( question, index ) in step.questions" :key="index"
                                :question="question" :index="index" :choices="step.choices" :icons="step.icons"
                                :subtype="step.subtype" :preselection="preselection"
                                :trackingclass="step.trackingclass[index]" @update-value="onUpdateAnswer">
                            </question-commodity-setup>

                            <div class="text-center" v-if="step.subtype == 'iconbuttons'">
                                <button ref="commoditySetupButton" class="step-btn confirm mt"
                                    :class="[(commoditySetupCompleted) ? '' : 'off']"
                                    @click="onCommoditySetupCompleted">Conferma e continua</button>
                                <span id="confirmbutton-commoditysetup"></span>
                            </div>

                            <div class="text-center btn-wrapper" v-if="step.subtype == 'normal'">
                                <button class="step-btn back" @click="goPrev">Indietro</button>
                                <button class="step-btn confirm" :class="[(this.completed) ? '' : 'off']"
                                    @click="onNormalQuestionConfirmation">Continua</button>
                            </div>
                        </ul>

                        <ul v-else-if="step.type == 'fare-setup'" class="questions">
                            <div v-if="step.subtype = 'largebuttons'">
                                <question-fare-setup v-for="( question, index ) in step.questions" :key="index"
                                    :question="question" :fare="selected.fare" :index="index" :commodity="preselection"
                                    :trackingclass="step.trackingclass[index]" :labels="step.labels" :focusCommodity="commodity"
                                    @update-value="onUpdateAnswer"
                                    @update-fare-setup="onUpdateFareSetup"></question-fare-setup>
                            </div>
                            <!-- la combinazione setup + normal non è contemplata al momento -->

                            <div class="text-center btn-wrapper desktopOnly">
                                <button class="step-btn back" @click="goPrev">Indietro</button>
                                <button ref="fareSetupButton" class="step-btn confirm mt"
                                    :class="[(completed) ? '' : 'off']" @click="onFareSetupCompleted">Continua</button>
                                <span id="confirmbutton-faresetup"></span>
                            </div>

                        </ul>

                        <ul v-else-if="step.type == 'payment-setup'" class="questions">

                            <question-payment-setup v-for="( question, index ) in step.questions" :key="index" :force="commodity.force[index]"
                                :question="question" :event_category="step.event_category" :index="index" :commodity="preselection"
                                :choices="step.choices[index]" :event_labels="step.event_labels" :payment="selected.payment"
                                :bill="selected.bill" @payment-setup-update="onPaymentSetupUpdate" @update-value="onUpdateAnswer">
                            </question-payment-setup>
                            
                            <discount-summary :bill="selected.bill" :payment="selected.payment" :discount="discount" :config="this.step.discount" @setDiscount="onSetDiscount"></discount-summary>

                            <div class="note" v-if="this.step.discount.nota">
                                {{this.step.discount.nota}}
                            </div>

                            <div class="text-center btn-wrapper desktopOnly">
                                <button class="step-btn back" @click="goPrev">Indietro</button>
                                <button ref="paymentSetupButton" class="step-btn confirm"
                                    :class="[(completed) ? '' : 'off']" @click="onPaymentSetupCompleted">Continua</button>
                                <span id="confirmbutton"></span>
                            </div>

                        </ul>

                        <ul v-else-if="step.type == 'exit'">
                            <exit :info="step.exit" :promo="step.promo" :subtype="step.subtype" :commodity="commodity"></exit>
                        </ul>
                    </div>
                </div>

                <div v-if="step.rightbox != 'none'" class="rightbox-wrapper">
                    
                    <div class="rightbox">
                        <div v-if="step.type == 'fare-setup' || step.type == 'payment-setup'" class="question">
                            {{ step.rightBoxTitle }}
                        </div>
                        <payment-summary v-if="step.rightbox == 'paymentSummary'" :commodity="commodity"
                            :type="step.type" :gas="step.recapGas" :luce="step.recapLuce" :discountIsActive="discountActive" :discountType="discountType" :discountPercent="this.discount.percent" 
                            :fare="selected.fare" :payment="selected.payment" :bill="selected.bill" :paymentsetup="step.type"
                            :class="step.type" :preselection="preselection" :labels="step.labels"></payment-summary>
                    </div>

                    
                    <!-- mobile buttons -->

                    <!-- l'altra nota va bene anche per il mobile -->
                    <!--
                    <div v-if="step.type == 'payment-setup'" class="note mobileOnly">
                        Ti ricordiamo che se scegli di pagare con il bollettino, ti addebiteremo il deposito cauzionale
                        nella prima bolletta.
                    </div>
                    -->
                </div>

                <!-- mobile buttons -->
                <div v-if="step.type == 'fare-setup'" class="text-center btn-wrapper mobileOnly">
                        <button ref="fareSetupButton" class="step-btn confirm mt" :class="[(completed) ? '' : 'off']"
                            @click="onFareSetupCompleted">Continua</button>
                        <span id="confirmbutton-faresetup"></span>
                    </div>

                    <div v-if="step.type == 'payment-setup'" class="text-center btn-wrapper mobileOnly">
                        <button ref="paymentSetupButton" class="step-btn confirm" :class="[(completed) ? '' : 'off']"
                            @click="onPaymentSetupCompleted">Continua</button>
                        <span id="confirmbutton"></span>
                    </div>


            </div>

            <span class="code">{{ step.id }}</span>

        </div>
    </div>
</template>


<script>
//import Question from './Question.vue';
//import QuestionCustom from './QuestionCustom.vue';
import QuestionCommoditySetup from './QuestionCommoditySetup.vue';
import QuestionFareSetup from './QuestionFareSetup.vue';
import QuestionPaymentSetup from './QuestionPaymentSetup.vue';
import PaymentSummary from './PaymentSummary.vue';
import DiscountSummary from './DiscountSummary.vue';
import Exit from "./Exit.vue";
import { trackButton } from "./services/analytics"

export default {
    name: "Step",

    components: {
        //Question,        
        //QuestionCustom,
        QuestionCommoditySetup,
        QuestionFareSetup,
        QuestionPaymentSetup,
        PaymentSummary,
        DiscountSummary,
        Exit
    },

    props: ['step', 'index', 'preselection', "commodity"],
    data: function () {
        return {
            answer: [],
            completed: false,
            trackingKey: '',
            value: '',
            commoditySetupCompleted: false,
            paymentSetupCompleted: false,
            fareSetupCompleted: false,
            discount: {
                digital: false,
                direct: false
            },
            selected: {
                fare: this.commodity.selected.fare,
                payment: this.commodity.selected.payment,
                bill: this.commodity.selected.bill
            },
            discountActive: false,
            discountType: "none"
        };
    },

    created: function () {
        for (let i = 0; i < this.step.questions.length; i++) {
            console.log('Step answer.push', this.step);
            // set answer as -1 which means unanswered
            this.answer.push(-1)
        }
    },

    mounted: function () {
        console.log("Step mounted");
        console.log("Step id: ", this.step.id);

        if (this.step.type == 'payment-setup') {
            
            switch (this.preselection.toUpperCase()) {
                case 'GAS':
                    this.discount = this.commodity.gas.discount;
                    break;
                case 'LUCE':
                    this.discount = this.commodity.luce.discount;
                    break;
                default:
                    this.discount = this.commodity.dual.discount;
                    break;
            }
        }
    },

    methods: {

        goPrev: function () {
            this.$emit('go-prev');
        },

        onUpdateAnswer: function (val) {

            // val is array [ questionIndex, questionValue ]
            console.log('Step onUpdateAnswer', val);

            if (val) {
                // valorize the answer
                console.log('Step onUpdateAnswer', val[0], val[1]);
                this.answer[val[0]] = val[1];
            }

            this.value = '';
            this.completed = true;
            this.trackingKey = val[2];
            console.log("Step steptype", this.step.type);

            // check if user answered all the questions
            for (let i = 0; i < this.answer.length; i++) {
                let v = this.answer[i];

                if (v < 0) {
                    this.completed = false;
                    break;
                } else {
                    this.value = this.value + v;
                }
            }

            if (this.completed === true) {

                // if is commodity step we need to update header information
                if (this.step.type == 'commodity-setup' && this.step.subtype == "iconbuttons") {
                    this.commoditySetupCompleted = true;
                    let comm = val[1] - 1;
                    this.$emit('update-header', this.step.choices[comm].answer.toLowerCase());
                }

            }

        },

        onSetDiscount: function (val) {
            this.discountActive = val.isActive;
            this.discountType = val.type;

            console.log('Step onSetDiscount', this.discount.active, this.discount);
        },

        onUpdateFareSetup: function (val) {
            console.log('Step onUpdateFareSetup', val);
            this.selected.fare = val;
            this.$emit('set-fare', val);
        },

        onPaymentSetupUpdate: function (what, value) {
            if (what == 'payment') {
                this.selected.payment = value;
                this.$emit('set-payment', value);
            } else if (what == 'bill') {
                this.selected.bill = value;
                this.$emit('set-bill', value);
            }
            console.log('Step onPaymentSetupUpdate:', what, value);
        },

        onCommoditySetupCompleted: function () {
            trackButton(this.trackingKey, 'scelta_fornitura');

            this.$emit('step-completed', [this.index, this.value]);
        },

        onNormalQuestionConfirmation: function () {
            let stepCommodity = this.preselection;
            if ( this.preselection.indexOf(' e ') > 0 ){
                stepCommodity = (this.step.index>2)?'gas':'luce';
            }

            trackButton(stepCommodity, this.trackingKey);

            this.$emit('step-completed', [this.index, this.value]);
        },

        onFareSetupCompleted: function () {
            let fare = this.preselection.indexOf(' e ') > 0 ? "dual_"+this.selected.fare : "luce_"+this.selected.fare ;
            
            trackButton('luce', fare);

            this.$emit('step-completed', [this.index, this.value]);
        },

        onPaymentSetupCompleted: function () {
            let payment = this.selected.payment == 'bollettino' ? 'bollettino' : 'addebito';
            let action = this.preselection.indexOf(' e ') > 0 ? "dual_pagamento_bolletta" : this.preselection+"_pagamento_bolletta" ;

            trackButton(payment+'_'+this.selected.bill, action);
            
            this.$emit('step-completed', [this.index, this.value]);
        }
        
    }
}
</script>

<style lang="scss" scoped>
    //@import "./styles/variables";

    .code {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color:#F4F4F4;
    }

    /*
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

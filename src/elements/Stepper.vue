<template>
    <div>
        <div class="label">{{ question }}</div>
        <div class="stepper">
            <div @click="doMore()" class="less" :class="[ selected<=min ? 'disabled' : '' ]">-</div>
            <div class="value">{{ selected }} {{ info }}</div>
            <div @click="doLess()" class="more" :class="[ selected>=max ? 'disabled' : '' ]">+</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Stepper",
        props: {
            question: String,
            default: Number,
            step: Number,
            info: String,
            min: {
                default: 0,
                type: Number
            },
            max: {
                default: 100,
                type: Number
            }
        },
        data() {
            return {
                selected: ''
            };
        },
        mounted() {
            console.log( 'Stepper mounted ' );

            this.selected = this.default;
        },
        computed: {
                
        },
        methods: {
            doMore: function() {
                console.log( 'Stepper doMore' );

                this.selected = ( this.selected - this.step > this.min ) ? this.selected - this.step : this.min;

                this.$emit( 'onChanged', { 'val': this.selected } );
            },
            doLess: function() {
                console.log( 'Stepper doLess' );

                this.selected = ( this.selected + this.step < this.max ) ? this.selected + this.step : this.max;

                this.$emit( 'onChanged', { 'val': this.selected } );
            }
        },
    };

</script>

<style scoped>

    .label {font-size: 16px; font-weight: bold; margin-bottom: 15px;}

    .stepper {display: flex; justify-content: space-between; width: 150px; line-height: 30px;}

    .value {font-weight: bold;} 

    .less, .more {
        width: 30px; height: 30px; border-radius: 50%; color: #fff; text-align: center; line-height: 30px; background: #ffd300; cursor: pointer;
    }
    .less.disabled, .more.disabled {
        background: #DCDCDC;
    }

</style>
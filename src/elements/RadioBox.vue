<template>
    <div class="radio-box">
        <div class="question-label">{{ question }}</div>
        <div class="answer">
            <div v-for="item in items" @click="onClick( item.value )" :key="item.value" :class="[ item.class, selected==item.value ? 'selected' : '' ]">{{item.label}}</div>
            <div class="placeholder" v-for="item in placeholder" :key="item"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RadioBox",
        props: {
            question: String,
            default: String,
            items: Array,
            elements: {
                default: 0,
                type: Number
            }
        },
        data() {
            return {
                selected: '',
                placeholder: 0
            };
        },
        mounted() {
            console.log( 'RadioBox mounted ', this.items.length, this.items );

            if ( this.elements ){
                this.placeholder = this.elements - this.items.length;    
            }

            if (this.default){
                this.selected = this.default;
            } else {
                this.selected = this.items[0].value;
            }
        },
        computed: {
                
        },
        methods: {
            onClick: function( value ) {
                console.log( 'RadioBox onChange ', value );

                this.selected = value;

                this.$emit( 'onChanged', { 'val': this.selected } );
            }
        },
    };

</script>

<style scoped>

    .answer {
        display: flex; margin-left: -15px; margin-right: -15px; margin-top: 15px;
    }
    .answer > * {
        background: #fff; border-radius: 10px; line-height: 48px; margin: 0 15px; box-shadow: 0 0 5px #ddd;
        overflow: hidden; color: #767676; padding: 9px 15px; text-align: center; flex: 1 1 0px; line-height: 32px;
        text-transform: uppercase; cursor: pointer;
     }

    .answer > *.longText {
        line-height: 16px;
    }

    .answer > *.placeholder {
        opacity: 0;
    }

    .answer > *.selected {
        color: #333; position: relative; font-weight: bold; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    
    .answer > *.selected::after {
         position: absolute; bottom: 0; left: 0; right: 0; background: #ffd300; content: ''; height: 5px;
    }

    .answer > *::before { display: inline-block; margin-right: 9px; font-family: 'EGL-Icon-font' !important; transform: scale(1.5); font-weight: normal;}
    .answer > *.dual::before { content: '\e99a'; transform: scale(2.8); margin-right: 16px; }
    .answer > *.luce::before { content: '\e900'; }
    .answer > *.gas::before { content: '\e901'; }

    .answer > *.day::before { content: '\e93e'; }
    .answer > *.night::before { content: '\e945'; }

</style>
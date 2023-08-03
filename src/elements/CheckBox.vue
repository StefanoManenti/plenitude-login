<template>
    <div class="check-box">
        <div class="question-label">{{ question }}</div>
        <div class="answer">
            <div v-for="item in items" @click="onClick( item.value )" :key="item.value" :class="[ item.class, selected.indexOf( item.value ) > -1 ? 'selected' : '' ]">{{item.label}}<span></span></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CheckBox",
        props: {
            question: String,
            default: Array,
            items: Array,
            voidable: {
                default: true,
                type: Boolean
            }
        },
        data() {
            return {
                selected: ''
            };
        },
        mounted() {
            console.log( 'CheckBox mounted ', this.default );

            this.selected = this.default;
        },
        computed: {
            
        },
        methods: {
            onClick: function( value ) {
                console.log( 'CheckBox onChange ', this.selected, value );

                const i = this.selected.indexOf( value );
                console.log( 'CheckBox onChange i', i );
                if (i > -1) {
                    if ( !this.voidable && this.selected.length > 1 ){
                        this.selected.splice(i, 1);
                    }
                } else {
                    this.selected.push( value );
                }

                console.log( 'CheckBox onChange ', this.selected, value );
                
                this.$emit( 'onChanged', { 'val': this.selected } );
            }
        },
    };

</script>

<style scoped>

    .answer {
        display: flex; margin-left: -15px; margin-right: -15px;
    }
    .answer > * {
        background: #fff; border-radius: 10px; line-height: 48px; margin: 0 15px; box-shadow: 0 0 5px #ddd; cursor: pointer;
        overflow: hidden; color: #767676; padding: 0 15px; flex: 1 1 0px; text-transform:uppercase; position: relative;
    }

    .answer > * > span {
        position: absolute; right: 15px; top: 50%; transform: translateY(-50%); border: 1.5px solid #333; width: 15px; height: 15px; border-radius: 2px;
    }

    .answer > *.placeholder {
        opacity: 0;
    }

    .answer > *.selected {
        color: #333; position: relative; font-weight: bold; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .answer > *.selected > span::before {
        content: '\e97c'; position: absolute; top: 3px; left: 10px; transform: translate(-50%, -50%); color: #ffd300; font-family: 'EGL-Icon-font' !important;
        font-size: 25px;
    }
    
    .answer > *.selected::after {
         position: absolute; bottom: 0; left: 0; right: 0; background: #ffd300; content: ''; height: 5px;
    }

    .answer > *::before { display: inline-block; margin-right: 9px; font-family: 'EGL-Icon-font' !important; transform: scale(1.5); font-weight: normal;}
    .answer > *.cooking::before { content: '\e934'; }
    .answer > *.water::before { content: '\e920'; }
    .answer > *.heating::before { content: '\e950'; }

</style>
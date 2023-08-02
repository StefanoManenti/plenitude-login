<template>
    <select v-model="selected" @change="onChange($event)">
        <option v-for="item in items" v-bind:value="item.value" :key="item.value">{{item.label}}</option>
    </select>
</template>

<script>

    export default {
        name: "SelectBox",
        props: {
            items: Array
        },
        data() {
            return {
                selected: ''
            };
        },
        mounted() {
            console.log( 'SelectBox mounted ', this.items.length, this.items );

            if (this.items.length){
                console.log( 'SelectBox mounted selected', this.items[0].value );
                this.selected = this.items[0].value;
            }
        },
        computed: {
                
        },
        methods: {
            onChange: function( event ) {
                console.log( 'SelectBox onChange ', event );

                this.$emit( 'onChanged', { 'val': this.selected } );
            }
        },
    };

</script>

<style scoped>

</style>
<template id="exit-card-header">

    <div class="exitbox" :style="'background-color:'+info.color">
        <div class="headerbox">
            <div class="product">{{ productLabel }}</div>
            <div class="supply">{{commodityLabel +' '+ fareLabel}}</div>
        </div>

        <div class="bodybox" ref="childTarget">
            <div class="text" v-html="info.text"></div>
            <div v-if="info.details" class="text-docs" v-html="info.details"></div>
            <button @click="activate()" v-if="info.cta && info.cta.length">{{ info.cta }}</button>
        </div>

        <div v-if="promo.active && info.promo" class="promo">
            <div v-html="promo.txt" class="text"></div>
            <img v-bind:src="promo.img_small" class="promo_img" alt="alt text" loading="lazy">
        </div>
    </div>

</template>

<script>
export default {
    template: '#exit-card-header',

    props: ['info', 'promo', 'commodity', 'iban'],

    data: function () {
        return {
            productLabel: '',
            fareLabel: '',
            commodityLabel: ''
        };
    },
    created: function () { 
    },

    mounted: function () { 
        console.log( 'ExitCard header mounted: ', this.info );

        this.fareLabel = ( this.commodity.selected.commodity == 'luce' ) ? (this.commodity.selected.fare) ? this.commodity.selected.fare : '' : '';

        this.productLabel = (this.info.link?.indexOf('nuova-fornitura') > 0 && this.info.link?.indexOf('voltura') < 0) ? 'Nuova attivazione' : this.commodity.product;

        this.commodityLabel = (this.info.commodity) ? this.info.commodity : this.commodity.selected.commodity;
        if ( this.commodityLabel == 'Dual' || this.commodityLabel == 'dual' ){
            this.commodityLabel = "Luce e Gas";
        }

        if (this.iban){
            // 011011
            // label = "<strong>IBAN</strong> per l'addebito diretto";
            let label = document.createElement('strong');
            label.appendChild( document.createTextNode('IBAN') );
            let newNode = document.createElement('li');
            newNode.appendChild( label );
            newNode.appendChild( document.createTextNode(" per l'addebito diretto") );
            this.$refs.childTarget.getElementsByTagName("ul")[0].appendChild(newNode);
            console.log('exit-card-header', this.$refs);
            console.log('exit-card-header', this.$refs.childTarget);
            console.log('exit-card-header', this.$refs.childTarget.get);

        }
    },

    methods: {
        activate: function () {
            this.$emit('activated', {'weborder': this.info.weborder, 'link':this.info.link, 'commodity':this.info.commodity});
        },
    }
}
</script>
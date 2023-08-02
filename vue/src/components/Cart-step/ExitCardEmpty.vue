<template id="exit-card-empty">
    <div class="exitbox empty">
        <div class="bodybox">
            <div class="text" v-html="info.text"></div>
            <button @click="activate()" v-if="info.cta && info.cta.length">{{ info.cta }}</button>
        </div>
    </div>
</template>

<script>
export default {
    template: '#exit-card-empty',

    props: ['info'],

    data: function () {
        return {
        };
    },
    created: function () {
    },

    mounted: function () {
        console.log('ExitCard empty mounted: ', this.info);
    },

    methods: {
        activate: function () {
            this.$emit('activated', { 'weborder': this.info.weborder, 'link': this.info.link, 'commodity':this.info.commodity });
        },
    }
}
</script>

<style lang="scss" scoped>
.exitbox {
    padding: 70px 0px 0px;

    &.plain {
        .bodybox {
            height: 315px;

            .text {
                padding: 0 50px;
            }
        }
    }
}
</style>
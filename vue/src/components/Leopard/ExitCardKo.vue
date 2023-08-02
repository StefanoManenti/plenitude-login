<template id="exit-card-ko">

    <div class="exitbox plain">
        <div class="bodybox">
            <div class="failed"></div>
            <div class="text-ko-title" v-html="info.text"></div>
            <div v-if="info.details" class="text-ko-info" v-html="info.details"></div>
            <button v-if="showCta > 0" @click="activate()">{{ info.cta }}</button>
        </div>
    </div>

</template>

<script>
export default {
    template: '#exit-card-ko',

    props: ['info'],

    data: function () {
        return {
            showCta: false
        };
    },
    created: function () {
    },

    mounted: function () {
        console.log('ExitCard ko mounted: ', this.info);
        this.showCta = this.info.cta?.length;
    },

    methods: {
        activate: function () {
            this.$emit('activated', { 'weborder': this.info.weborder, 'link': this.info.link });
        },
    }
}
</script>
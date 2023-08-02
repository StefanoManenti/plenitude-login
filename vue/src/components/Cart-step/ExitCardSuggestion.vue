<template id="exit-card-suggestion">

    <div class="suggestion">
        <div class="failed"></div>
        <div class="text-suggestion-title" v-html="info.text"></div>

        <div class="exitbox plain suggestion-box">
            <div class="bodybox">
                <div class="text-suggestion-info" v-html="info.details"></div>
                <button @click="activate()">{{ info.cta }}</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    template: '#exit-card-suggestion',

    props: ['info'],

    data: function () {
        return {
        };
    },
    created: function () {
    },

    mounted: function () {
        console.log('ExitCard suggestion mounted: ', this.info);
    },

    methods: {
        activate: function () {
            this.$emit('activated', { 'weborder': this.info.weborder, 'link': this.info.link });
        },
    }
}
</script>
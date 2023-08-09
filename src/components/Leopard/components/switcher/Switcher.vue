<template id="switcher">
    <div class="switcher">
        <div for="components" class="label">Visualizza il componente:</div>

        <select name="components" id="components" v-on:change="updateComponent">
            <option value="login-or-register">Login or Register</option>
            <option value="registration">Registration</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "Switcher",

    props: [],
    watch: {

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
        updateComponent: function (e) {
            console.log("Change Component to:", e.target.value);
            this.$emit('update-component', e.target.value);
        },
    }
}
</script>


<style lang="scss" scoped>
    .switcher {
        position: fixed;
        top: 0px;
        right: 0px;
        background-color: #808080ad;
        padding: 15px;
        z-index: 100;
        border: 1px solid gray;

        .label {
            color: white;
            font-weight: 600;
            margin-bottom: 10px;
        }
    }
</style>
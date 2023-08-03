<template>
    <div id="pln-login" class="pln-login" sf-component="pln-login" sf-version="1.0">
        <route></route>
    </div>
</template>

<script>
import route from "./components/Leopard/Route.vue";

export default {
    name: "App",
    components: {
        route,
    },

    props: {
    },

    data: function () {
        return {
            ver: "2806a",
            preselection: "",
            active: false,
            path: '',
            luce: false,
            gas: false,
        };

    },


    created: function () {
    },

    methods: {

    },
}; 
</script>


<style ></style>
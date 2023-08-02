import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", function() {

    console.log( 'leopard init', document.getElementById('app-leopard'));

    if ( document.getElementById('app-leopard') ){

        console.log( 'leopard init do');

        let appLeopard = document.getElementById('app-leopard');

        let starturl = appLeopard.getAttribute("starturl");
        
        new Vue({
            components: {App},

            //template: '<App :f="f" :f1="f1" :f2="f2" :gas="gas" :starturl="starturl"/>',
            template: '<App :starturl="starturl"/>',
            
            computed: {

                starturl: function() {
                    return starturl;
                }
            }
            
        }).$mount('#app-leopard');
    }

});


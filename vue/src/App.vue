<template>
    <div id="cart-step" class="sf-cart-modal" sf-component="cart-modal" sf-version="1.0">
        <!-- <route v-if="active == true" :luce="luce" :gas="gas" :path="path" > </route> -->
        <flow v-if="active == true" :luce="luce" :gas="gas" :path="path" > </flow>
    </div>
</template>

<script>
import flow from "./components/Leopard/Flow.vue";

export default {
    name: "App",
    components: {
        flow,
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
        console.log("App", this.ver);

        let _self = this;

        function init(counter) {
            _self.stepcart();

            if (counter++ < 5) {
                setTimeout(function () {
                    init(counter);
                }, 1000);
            }
            console.log("[mm] scanning buttons: " + counter + " times");
        }

        init(0);
    },

    methods: {
        getPreselection: function (event) {
            let utility = "";
            let presel = window.jQuery(event.target).closest('[sf-cart-id="link"]');
            utility = presel.attr("sf-cart-utility");
            if (!utility) {
                presel = presel.find("[sf-cart-utility]");
                utility = presel.attr("sf-cart-utility");
            }
            this.preselection = utility;
        },

        clickPreselection: function () {
            //debugger;
            this.preselectionId = "commodity_" + this.preselection.toLowerCase().replace(/\s+/g, "");
            // document.getElementById(this.preselectionId).click();
        },

        stepcart: function () {
            let _self = this;

            let buttons = document.querySelectorAll('button[stepcart]:not([activated])');
            window.jQuery(buttons).attr('activated', 'true');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click", (event) => {
                    this.path = window.jQuery(event.target).attr('stepcart');
                    console.log('App addEventListener path', this.path);
                    
                    if ( window.jQuery(event.target).closest('.cart-listing')?.length > 0 ){
                        this.luce = window.jQuery(event.target).closest('.cart-listing').find('.card-fornitura-toggle-luce.fornitura-selezionata')?.length > 0;
                        this.gas = window.jQuery(event.target).closest('.cart-listing').find('.card-fornitura-toggle-gas.fornitura-selezionata')?.length > 0;
                    } else {
                        this.luce = window.jQuery(event.target).closest('.cart-page_cart').find('.card-fornitura-toggle-luce.fornitura-selezionata')?.length > 0;
                        this.gas = window.jQuery(event.target).closest('.cart-page_cart').find('.card-fornitura-toggle-gas.fornitura-selezionata')?.length > 0;
                    }

                    console.log('App addEventListener luce gas', this.luce, this.gas);
                    _self.active = true;
                    event.preventDefault();
                    event.stopPropagation();

                    setTimeout(function () {
                        //_self.getPreselection(event);
                        //_self.clickPreselection();

                        document.getElementById("cart-step").classList.add("open");
                    }, 250);

                    return false;
                });
            }
        },
    },
}; 
</script>


<style ></style>
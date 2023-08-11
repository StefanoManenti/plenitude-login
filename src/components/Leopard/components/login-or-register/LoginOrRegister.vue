<template id="LoginOrRegister">
  <form needs-validation="true" class="component-content" @submit="checkForm">

    <div class="section-container">
      <h3 class="section-title">
        Accedi o registrati
      </h3>

      <p class="section-text">
        Accedi con le tue credenziali o registrati. Se sei già un utente delle nostre
        app, utilizza la stessa e-mail.
      </p>
    </div>

    <div pln-component="input-text" pln-version="1.0" pln-template="">
      <div class="form-field">
        <label for="email">Email*</label>
        <input type="email" id="email" name="email" aria-label="Email" placeholder="nome.cognome@mail.com"
               required="">
        <output role="alert" class="blank">Inserisci un indirizzo email valido.</output>
      </div>
    </div>

    <div class="link-container">
      <a class="link-text" href="">Hai dimenticato la mail ?</a>
    </div>

    <button
        class="pln-btn-primary btn-margin "
        aria-label="Prosegui"
        type="submit"
        @click="emailExistenceCheck"
    >
      PROSEGUI
    </button>

    <LoginOrRegisterModal v-if="displayModal"></LoginOrRegisterModal>

    <p class="splitter">OPPURE</p>

    <button
        class="pln-btn-secondary btn-outline "
        aria-label="Prosegui tramite social"
        @click="emailExistenceCheck"
    >
      PROSEGUI TRAMITE SOCIAL
    </button>

  </form>

</template>

<script>

import LoginOrRegisterModal from "@/components/Leopard/components/modal/LoginOrRegisterModal.vue";
import {emailExistenceCheck} from "../../services/apiService"

export default {
  name: "LoginOrRegister",

  components: {
    LoginOrRegisterModal
  },

  data: function () {
    return {
      email: null,
      displayModal: false
    };
  },

  methods: {
    checkForm: function (e) {
      this.displayComponentModal()

      e.preventDefault();

    },

    displayComponentModal() {
      this.displayModal = true;
    },

    emailExistenceCheck: async function () {
      const response = await emailExistenceCheck(this.email);
      console.log(response);
    }
  },

}
</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.btn-margin {
  margin-top: 35px;
  margin-bottom: 20px;

}

.splitter {
  text-align: center;
  display: flex;
}

.splitter::before,
.splitter::after {
  content: " ";
  height: 1px;
  width: 10vw;
  background: $gray60;
  opacity: 40%;
  margin-top: 10px;
  flex: 1
}

.splitter::before {
  margin-right: 4vw;
}

.splitter::after {
  margin-left: 3vw;
}


</style>
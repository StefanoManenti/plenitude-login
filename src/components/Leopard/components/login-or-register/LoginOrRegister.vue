<template id="LoginOrRegister">
  <form needs-validation="true" class="login-or-register" @submit="checkForm">
    <div class="component-content">

      <h3 class="title">
        Accedi o registrati
      </h3>

      <p class="text">
        Accedi con le tue credenziali o registrati. Se sei già un utente delle nostre
        app, utilizza la stessa e-mail.
      </p>

      <div pln-component="input-text" pln-version="1.0" pln-template="">
        <div class="form-field">
          <label for="email">Email*</label>
          <input type="email" id="email" name="email" aria-label="Email" placeholder="nome.cognome@mail.com"
                 required="">
          <output role="alert" class="blank">Inserisci un indirizzo email valido.</output>
        </div>
      </div>

      <div class="link-bottom-input">
        <a class="link" href="">Hai dimenticato la mail ?</a>
      </div>

      <button
          class="pln-btn-primary"
          aria-label="prosegui"
          type="submit"
          @click="emailExistenceCheck"
      >
        PROSEGUI
      </button>

      <LoginOrRegisterModal v-if="displayModal"></LoginOrRegisterModal>

      <p class="login-or-register__splitter">OPPURE</p>

      <button
          class="pln-btn-secondary btn-outline"
          aria-label="Prosegui tramite social"
          @click="emailExistenceCheck"
      >
        PROSEGUI TRAMITE SOCIAL
      </button>

    </div>
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

.pln-btn-primary {
  margin-top: 35px;
  margin-bottom: 20px;
}

.login-or-register {
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
}

.login-or-register__label {
  margin-top: 1.5em;
  font-weight: 600;
}

.login-or-register__input {
  width: 100%;
  border-radius: .2em;
  height: 2.8em;
  border: 1px solid $dark;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
}

input[type=email] {
  padding-left: 1rem;
}

.input-error {
  border-color: $red;
}

.login-or-register__validation {
  margin-top: 1em;
  color: $red;
}

.login-or-register__forgot-mail {
  color: rgb(9, 88, 165);
  font-weight: 600;
}

.login-or-register__button--continue {
  margin-top: 1.8em;
  margin-bottom: 1.2em;
}

.login-or-register__splitter {
  text-align: center;
  display: flex;
}

.login-or-register__splitter::before,
.login-or-register__splitter::after {
  content: " ";
  height: 1px;
  width: 10vw;
  background: $gray60;
  opacity: 40%;
  margin-top: 10px;
  flex: 1
}

.login-or-register__splitter::before {
  margin-right: 4vw;
}

.login-or-register__splitter::after {
  margin-left: 3vw;
}


</style>
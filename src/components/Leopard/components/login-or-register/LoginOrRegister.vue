<template id="LoginOrRegister">
  <form class="login-or-register" @submit="checkForm" novalidate="true">
    <div class="login-or-register__content">

      <h3 class="login-or-register__title">
        Accedi o registrati
      </h3>

      <p class="login-or-register__text">
        Accedi con le tue credenziali o registrati. Se sei già un utente delle nostre
        app, utilizza la stessa e-mail.
      </p>

      <Input
          name="email"
          id="email"
          type="email"
          v-model="email"
          placeholder="nome.cognome@mail.com"
          ariaLabel="Inserisci email"
          forLabel="email"
          label="Mail"
      />

      <a class="login-or-register__forgot-mail" href="">Hai dimenticato la mail ?</a>

      <Button
          class="login-or-register__button--continue"
          color="button-yellow"
          variant="button-contained"
          aria-label="prosegui"
          type="submit"
          @click="emailExistenceCheck"
      >
        PROSEGUI
      </Button>

      <LoginOrRegisterModal v-if="displayModal"></LoginOrRegisterModal>

      <p class="login-or-register__splitter">OPPURE</p>

      <Button color="button-white">PROSEGUI TRAMITE SOCIAL</Button>

    </div>
  </form>

</template>

<script>

import LoginOrRegisterModal from "@/components/Leopard/components/modal/LoginOrRegisterModal.vue";
import {emailExistenceCheck} from "../../services/apiService"
import Button from "@/components/Leopard/components/common/Button.vue";
import Input from "@/components/Leopard/components/common/Input.vue";

export default {
  name: "LoginOrRegister",

  components: {
    Input,
    Button,
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

.login-or-register {
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
}

.login-or-register__content {
  margin: 4.5em auto auto;
  width: 30vw;
}

.login-or-register__title {
  margin-bottom: .5em;
  font-size: 2rem;
  font-weight: 600;
}

.login-or-register__text {
  font-size: 1rem;
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
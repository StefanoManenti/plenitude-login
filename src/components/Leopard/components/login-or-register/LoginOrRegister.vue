<template id="LoginOrRegister">
  <div class="login-or-register">
    <form class="login-or-register__content">

      <h3 class="login-or-register__title">
        Accedi o registrati
      </h3>

      <p class="login-or-register__text">
        Accedi con le tue credenziali o registrati. Se sei già un utente delle nostre
        app, utilizza la stessa e-mail.
      </p>

      <h6 class="login-or-register__label">Mail</h6>

      <input class="login-or-register__input" placeholder="nome.cognome@mail.com">

      <a class="login-or-register__forgot-mail" href="">Hai dimenticato la mail ?</a>

      <button class="login-or-register__button-continue" type="button">PROSEGUI</button>

      <p class="login-or-register__splitter">OPPURE</p>

      <button class="login-or-register__button-social">
        PROSEGUI TRAMITE SOCIAL
      </button>

    </form>
  </div>

</template>

<script>

export default {
  name: "LoginOrRegister",

  props: [],
  watch: {},
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

  methods: {}
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
  margin: 75px auto auto;
  width: 30vw;
}

.login-or-register__title {
  margin-bottom: .5em;
  font-size: 2.60em;
  font-weight: 600;
}

.login-or-register__label {
  font-weight: 600;
}

.login-or-register__input {
  width: 100%;
  border-radius: 4px;
  height: 45px;
  border: 1px solid $gray30;
  margin-top: 5px;
  margin-bottom: 5px;
}

.login-or-register__forgot-mail {
  color: rgb(9, 88, 165);
  font-weight: 700;
}

.login-or-register__button-continue {
  width: 100%;
  background: $primary;
  border: unset;
  border-radius: 4px;
  height: 45px;
  margin-top: 30px;
  margin-bottom: 20px;
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

.login-or-register__button-social {
  width: 100%;
  background-color: $white;
  border-radius: 4px;
  border: 1px solid $dark;
  height: 45px;
}


</style>
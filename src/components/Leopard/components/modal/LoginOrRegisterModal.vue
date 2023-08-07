<template id="LoginOrRegisterModal">
  <transition name="login-or-register-modal">
    <div class="login-or-register-modal__mask">
      <div class="login-or-register-modal__wrapper">

        <div class="login-or-register-modal__container">

          <div class="login-or-register-modal__header">
            <slot name="header">default header image</slot>
          </div>

          <div class="login-or-register-modal__body">
            <slot name="body">
              <h4>Un'unica registrazione per tutte le nostre App.</h4>
              <p>Accedi a Enjoy, EniLive e Plenitude con le stesse credenziali</p>
            </slot>
          </div>

          <div class="login-or-register-modal__footer">
            <slot name="footer">
              <button v-if="buttonContinue" class="login-or-register-modal__button" @click="$emit('close')">
               AVANTI
              </button>
              <button v-if="buttonBack" class="login-or-register-modal__button" @click="$emit('close')">
                AVANTI
              </button>
              <button v-if="buttonStart" class="login-or-register-modal__button" @click="$emit('close')">
                AVANTI
              </button>
            </slot>
          </div>

        </div>

      </div>
    </div>
  </transition>


</template>


<script>

export default {
  name: "LoginOrRegisterModal"
}

</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.login-or-register-modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.login-or-register-modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.login-or-register-modal__container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 42em;
  height: 39em;
  margin: 0px auto;
  padding: 1.3em 1.8em;
  background-color: $white;
  border-radius: 0.1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.login-or-register-modal__button {
  background-color: $primary;
  border: unset;
  border-radius: .3em;
  width: 13em;
  height: 3em;
}

.login-or-register-modal__footer {
  text-align: center;
  flex-grow: 1;
}

.login-or-register-modal__header {
  flex-grow: 10;
}


</style>
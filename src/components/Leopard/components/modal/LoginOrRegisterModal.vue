<template id="LoginOrRegisterModal">
  <transition name="login-or-register-modal">
    <div class="login-or-register-modal__mask">
      <div class="login-or-register-modal__wrapper">

        <div class="login-or-register-modal__container">

          <div class="login-or-register-modal__header">
            <slot name="header">
              <img class="login-or-register-modal__close-image" src="../../../../assets/iconsClose.svg">
              <img class="login-or-register-modal__image-header" v-bind:src="image">
            </slot>
          </div>

          <div class="login-or-register-modal__body">
            <slot name="body">
              <h4>{{ body.textTitle }}</h4>
              <p>{{ body.textContent }}</p>
            </slot>
          </div>

          <div class="login-or-register-modal__footer">
            <slot name="footer">
              <button v-if="buttons.buttonBack"
                      class="login-or-register-modal__button login-or-register-modal__button--back" @click="buttonBack">
                INDIETRO
              </button>
              <button v-if="buttons.buttonContinue"
                      class="login-or-register-modal__button login-or-register-modal__button--next"
                      @click="buttonContinue">
                AVANTI
              </button>
              <button v-if="buttons.buttonStart"
                      class="login-or-register-modal__button login-or-register-modal__button--next"
                      @click="buttonStart">
                INIZIA
              </button>
            </slot>
          </div>

        </div>

      </div>

      <div class="login-or-register-modal__indicator">
        <ul>
          <input type="radio" v-bind:class="indicatorFirst" disabled>
          <input type="radio" v-bind:class="indicatorSecond" disabled>
          <input type="radio" v-bind:class="indicatorThird" disabled>
        </ul>
      </div>
    </div>
  </transition>


</template>


<script>

const MODAL_FLOW = {
  header: {
    welcome: {
      img: require("../../../../assets/welcomeEni.svg")
    },
    introduction: {
      img: require("../../../../assets/introductionEni.svg")
    },
    start: {
      img: require("../../../../assets/startEni.svg")
    }
  },
  body: {
    welcome: {
      textTitle: "Un'unica registrazione per tutte le nostre App.",
      textContent: "Accedi a Enjoy, EniLive e Plenitude con le stesse credenziali"
    },
    introduction: {
      textTitle: "Un'unica registrazione per tutte le nostre App.",
      textContent: "Accedi a Enjoy, EniLive e Plenitude con le stesse credenziali"
    },
    start: {
      textTitle: "Inizia da Plenitude",
      textContent: "Un nuovo modo per gestire gas e luce, sempre sotto controllo."
    }

  },
  footer: {
    welcome: {
      buttons: {
        buttonContinue: true,
        buttonBack: false,
        buttonStart: false,
      },
      indicators: {
        showIndicatorFirst: true,
        showIndicatorSecond: false,
        showIndicatorThird: false
      },
      stepFirst: 1
    },
    introduction: {
      buttons: {
        buttonContinue: true,
        buttonBack: true,
        buttonStart: false,
      },
      indicators: {
        showIndicatorFirst: false,
        showIndicatorSecond: true,
        showIndicatorThird: false
      },
      stepSecond: 2
    },
    start: {
      buttons: {
        buttonContinue: false,
        buttonStart: true,
        buttonBack: true,
      },
      indicators: {
        showIndicatorFirst: false,
        showIndicatorSecond: false,
        showIndicatorThird: true
      },
      stepThird: 3
    }
  }
}

const MODAL_STEPS = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2
};


export default {
  name: "LoginOrRegisterModal",

  data: function () {
    return {
      buttons: {
        buttonContinue: true,
        buttonBack: false,
        buttonStart: false
      },
      body: {
        textTitle: MODAL_FLOW.body.welcome.textTitle,
        textContent: MODAL_FLOW.body.welcome.textContent
      },
      indicators: {
        showIndicatorFirst: true,
        showIndicatorSecond: false,
        showIndicatorThird: false
      },
      image: MODAL_FLOW.header.welcome.img,
      counterButtonContinue: 0
    }
  },

  methods: {

    buttonContinue: function () {
      this.counterButtonContinue++;

      if (this.counterButtonContinue === MODAL_STEPS.SECOND) {
        this.setModalIntroduction()
      } else if (this.counterButtonContinue === MODAL_STEPS.THIRD) {
        this.body = {...this.body, ...MODAL_FLOW.body.start}
        this.image = MODAL_FLOW.header.start.img;
        this.buttons = {...this.buttons, ...MODAL_FLOW.footer.start.buttons}
        this.indicators = {...this.indicators, ...MODAL_FLOW.footer.start.indicators}
      }
    },

    buttonBack: function () {
      this.counterButtonContinue--;

      if (this.counterButtonContinue === MODAL_STEPS.SECOND) {
        this.setModalIntroduction()

      } else { // return to first step
        this.body = {...this.body, ...MODAL_FLOW.body.welcome}
        this.image = MODAL_FLOW.header.welcome.img
        this.buttons = {...this.buttons, ...MODAL_FLOW.footer.welcome.buttons}
        this.indicators = {...this.indicators, ...MODAL_FLOW.footer.welcome.indicators}
      }
    },

    setModalIntroduction() {
      this.body = {...this.body, ...MODAL_FLOW.body.introduction}
      this.image = MODAL_FLOW.header.introduction.img;
      this.buttons = {...this.buttons, ...MODAL_FLOW.footer.introduction.buttons}
      this.indicators = {...this.indicators, ...MODAL_FLOW.footer.introduction.indicators}
    },

    buttonStart: function () {
      // go to registration page
    }

  },

  computed: {
    indicatorFirst: function () {
      return this.indicators.showIndicatorFirst ? 'login-or-register-modal__indicator--checked' : null
    },

    indicatorSecond: function () {
      return this.indicators.showIndicatorSecond ? 'login-or-register-modal__indicator--checked' : null
    },

    indicatorThird: function () {
      return this.indicators.showIndicatorThird ? 'login-or-register-modal__indicator--checked' : null

    }
  }

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
  //padding: 1.3em 1.8em;
  background-color: $white;
  border-radius: 0.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.login-or-register-modal__button {
  border-radius: .3em;
  width: 13em;
  height: 3em;
}

.login-or-register-modal__button--next {
  border: unset;
  background-color: $primary;
}

.login-or-register-modal__button--back {
  border: solid 1px;
  background-color: $white;
}

.login-or-register-modal__footer {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-grow: 1;
  padding-top: .8em;
  padding-bottom: 1.8em;
}

.login-or-register-modal__body {
  padding-left: 3em;;
}

.login-or-register-modal__header {
  flex-grow: 10;
  position: relative;
}

.login-or-register-modal__indicator {
  position: absolute;
  bottom: 10%;
  left: 50%;
}

.login-or-register-modal__indicator input[type="radio"] {
  appearance: none;
  border: 1px solid $white;
  height: 9px;
  width: 8px;
  border-radius: 10px;
  margin-left: 2px;
  cursor: unset;
}

.login-or-register-modal__indicator--checked {
  background-color: $white;
}

.login-or-register-modal__close-image {
  position: absolute;
  right: 20px;
  top: 30px;
}

.login-or-register-modal__image-header {
  width: 100%;
}


</style>
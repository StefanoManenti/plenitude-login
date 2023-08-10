<template id="LoginOrRegisterModal">

  <div pln-component="callmeback-modale" pln-version="2.0" pln-template="" id="modaleCaldaia-component"
       data-pln-active="true">
    <div pln-component="modale" pln-version="1.0" pln-template="" class="" data-pln-active="true">
      <div class="modal show modal-mask" tabindex="-1"
           aria-modal="true" role="dialog">
        <div class="modal-dialog ">
          <div class="modal-content" style="padding: unset; max-width: 600pt">
            <div class="modal-header">

              <img class="modal-image-header" v-bind:src="image">

              <button
                  type="button"
                  data-bs-dismiss="modal"
                  class="close"
                  aria-label="Chiudi">
                <img
                    loading="lazy"
                    src="../../../../assets/iconsClose.svg"
                    alt="chiudi modale"
                    aria-hidden="true">
              </button>
            </div>

            <!--Body modale-->
            <div class="modal-body padding-30">
              <div class="row-big-element title-header ">
                <h3>{{ body.textTitle }}</h3>
              </div>

              <div class="row-big-element subtitle-header ">
                <p>{{ body.textContent }}</p>
              </div>

              <div class="row-element d-flex justify-content-center gap-25">
                <button
                    v-if="buttons.buttonBack"
                    class="pln-btn-secondary btn-outline btn-small"
                    aria-label="Indietro"
                    @click="buttonBack"
                >
                  INDIETRO
                </button>

                <button
                    v-if="buttons.buttonContinue"
                    class="pln-btn-primary btn-small"
                    aria-label="Avanti"
                    @click="buttonContinue"
                >
                  AVANTI
                </button>

                <button
                    v-if="buttons.buttonStart"
                    class="pln-btn-primary btn-small"
                    aria-label="Inzia"
                    @click="buttonStart"
                >
                  INIZIA
                </button>
                <!--                    <button class="pln-btn-primary row-element" type="submit">Ti chiamiamo noi</button>-->
              </div>

              <div class="modal-indicator">
                <ul>
                  <input type="radio" v-bind:class="indicatorFirst" disabled>
                  <input type="radio" v-bind:class="indicatorSecond" disabled>
                  <input type="radio" v-bind:class="indicatorThird" disabled>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>

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
  components: {},

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
      return this.indicators.showIndicatorFirst ? 'modal-indicator-checked' : null
    },

    indicatorSecond: function () {
      return this.indicators.showIndicatorSecond ? 'modal-indicator-checked' : null
    },

    indicatorThird: function () {
      return this.indicators.showIndicatorThird ? 'modal-indicator-checked' : null

    }
  }

}

</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.modal-indicator {
  position: absolute;
  bottom: -3em;
  left: 50%;
}

.modal-indicator input[type="radio"] {
  appearance: none;
  border: 1px solid $white;
  height: 9px;
  width: 8px;
  border-radius: 10px;
  margin-left: 2px;
  cursor: unset;
}

.modal-image-header {
  width: 100%;
}

.modal-indicator-checked {
  background-color: $white;
}

.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  padding-right: 6px
}


</style>
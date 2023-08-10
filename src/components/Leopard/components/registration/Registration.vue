<template id="Registration">
  <form needs-validation="true" class="registration" @submit="checkFormRegistration">
    <div class="component-content">

      <h3 class="title">
        Registrazione
      </h3>

      <h4 class="sub-title">
        Inserisci dati
      </h4>

      <p class="text">
        Crea un account unico per accedere a tutte le app Eni.
      </p>

      <div class="text-your-mail">
        La tua mail:
      </div>
      <p>{{ this.mail }}</p>

      <div class="registration-form">

        <div class="form-field-content">

          <div pln-component="input-text" pln-version="1.0" pln-template="" class="form-field-container">
            <div class="form-field">
              <label for="nome">Nome*</label>
              <input type="text" value="" id="nome" name="nome" aria-label="Nome" required="">
              <output role="alert" class="blank">Questo campo è obbligatorio.</output>
            </div>
          </div>

          <div pln-component="input-text" pln-version="1.0" pln-template="" class="form-field-container">
            <div class="form-field">
              <label for="cognome">Cognome*</label>
              <input type="text" value="" id="cognome" name="cognome" aria-label="Cognome" required="">
              <output role="alert" class="blank">Questo campo è obbligatorio.</output>
            </div>
          </div>

        </div>

        <div pln-component="input-text" pln-version="1.0" pln-template="" class="form-field-container">
          <div class="form-field">
            <label for="password">Password*</label>
            <input type="password" value="" id="password" name="password" aria-label="Password" required="">
            <output role="alert" class="blank">Questo campo è obbligatorio.</output>
          </div>
        </div>
        <p>La password deve contenere un minimo di 8 caratteri, di cui uno maiuscolo (A-Z), un numero (0-9) ed un
          carattere speciale</p>

        <div pln-component="input-text" pln-version="1.0" pln-template="" class="form-field-container">
          <div class="form-field">
            <label for="ripetiPassword">Password*</label>
            <input type="password" value="" id="ripetiPassword" name="ripetiPassword" aria-label="Ripeti password"
                   required="">
            <output role="alert" class="blank">Questo campo è obbligatorio.</output>
          </div>
        </div>


        <div>
          <p>* Campi obbligatori</p>
          <p>
            Continuando accetti i
            <a href="#" class="registration__anchor">termini e condizioni</a> e la <a href="#"
                                                                                      class="registration__anchor">privacy
            policy</a> del servizio.
          </p>
        </div>

        <div class="registration__buttons">
          <button
              class="pln-btn-secondary btn-outline"
              aria-label="Torna indietro"
              type="submit"
          >
            TORNA INDIETRO
          </button>

          <button
              class="pln-btn-primary"
              aria-label="Continua"
          >
            CONTINUA
          </button>


        </div>

      </div>

    </div>


  </form>
</template>

<script>

export default {
  name: "Registration",
  components: {},

  data: function () {
    return {
      mail: "test@gmail.com",
      inputField: {
        name: {
          text: "",
          error: false,
          labelClassError: null,
          inputClassError: null
        },
        lastName: {
          text: "",
          error: false,
          labelClassError: null,
          inputClassError: null
        },
        password: {
          text: "",
          error: false,
          labelClassError: null,
          inputClassError: null
        },
        repeatPassword: {
          text: "",
          error: false,
          labelClassError: null,
          inputClassError: null
        }
      }
    };
  },

  methods: {
    checkFormRegistration(e) {
      e.preventDefault();

    },

    handleOutsideClickError(e) {
      const {id, value} = e.target;
      if (!value.length) {
        this.inputField[id].error = true;
        this.inputField[id].labelClassError = "registration__label--error";
        this.inputField[id].inputClassError = "registration__input--error"
      } else {
        this.inputField[id].error = false;
        this.inputField[id].labelClassError = null;
        this.inputField[id].inputClassError = null;

      }
    }

  },

}
</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.registration {
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
}

.text-your-mail {
  font-weight: 600;
}

.registration-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.registration__input {
  height: 45px;
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  padding-left: 1rem;
}

.registration__form-field {
  width: 100%;
}

.registration__form-field--small {
  width: 48%;
}

.registration__output-error {
  color: $red-ruby;
  font-size: 14px;
}

.registration__output-error:before {
  content: "!";
  border: 1px solid $red-ruby;
  color: $red-ruby;
  border-radius: 50%;
  margin-right: 5px;
  font-weight: 900;
  font-size: 14px;
  line-height: 15px;
  width: 17px;
  display: inline-block;
  text-align: center;
}

.registration__anchor {
  text-decoration: underline;
  color: rgb(9, 88, 165);
  font-weight: 600;
}

.registration__buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-basis: 100%;
}

.registration__button {
  border-radius: .3em;
  width: 100%;
  height: 3em;
}

.registration__button-back {
  background-color: $white;
}

.registration__button-continue {
  background-color: $primary;
  border: unset;
}

.form-field-content {
  display: flex;
  flex-basis: 100%;
  gap: 15px;
}

.registration__label--error {
  color: $red-ruby;
}

.registration__input--error {
  background-color: rgb(252, 237, 238);
  border-color: $red-ruby;

  &::placeholder {
    color: $red-ruby;
  }
}

.form-field-container {
  width: 100%;
}


</style>
<template id="Registration">
  <form needs-validation="true" class="registration" @submit="checkFormRegistration">
    <div class="component-content">

      <div class="section-container">
        <h3 class="section-title">
          Registrazione
        </h3>

        <h4 class="section-sub-title">
          Inserisci dati
        </h4>

        <p class="section-text">
          Crea un account unico per accedere a tutte le app Eni.
        </p>

        <div class="text-with-label-container">
          <span class="text-with-label">La tua mail:</span>
          <p>{{ this.mail }}</p>
        </div>

      </div>

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
            <label for="ripetiPassword">Ripeti password*</label>
            <input type="password" value="" id="ripetiPassword" name="ripetiPassword" aria-label="Ripeti password"
                   required="">
            <output role="alert" class="blank">Questo campo è obbligatorio.</output>
          </div>
        </div>


        <div>
          <p>* Campi obbligatori</p>
          <p>
            Continuando accetti i
            <a href="#" class="link-text">termini e condizioni</a>
            e la
            <a href="#" class="link-text">privacy policy</a>
            del servizio.
          </p>
        </div>

        <div class="container-buttons">
          <button class="pln-btn-secondary btn-outline" aria-label="Torna indietro">
            Torna indietro
          </button>

          <button class="pln-btn-primary" aria-label="Continua" type="submit">
            Continua
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

.text-with-label {
  font-weight: 600;
}

.registration-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
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
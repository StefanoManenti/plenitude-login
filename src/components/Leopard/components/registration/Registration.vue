<template id="Registration">
  <form class="registration" @submit="checkFormRegistration" novalidate="true">
    <div class="registration__content">

      <h3 class="registration__title">
        Registrazione
      </h3>

      <h4 class="registration__sub-title">
        Inserisci dati
      </h4>

      <p class="registration__text">
        Crea un account unico per accedere a tutte le app Eni.
      </p>

      <div class="registration__your-mail">
        La tua mail:
      </div>
      <p>{{ this.mail }}</p>

      <div class="registration__form">

        <div class="registration__form-field-content">

          <Input
              id="name"
              name="name"
              aria-label="name"
              placeholder="Inserisci nome"
              :inputValue="inputField.name.text"
              forLabel="name"
              label="Nome *"
              outputError="Il campo dev’essere compilato"
          />

          <Input
              id="lastName"
              name="lastName"
              aria-label="Inserisci cognome"
              placeholder="Inserisici cognome"
              :inputValue="inputField.lastName.text"
              forLabel="lastName"
              label="Cognome *"
              outputError="Il campo dev’essere compilato"
          />

        </div>

        <Input
            id="password"
            name="password"
            aria-label="Inserisci password"
            placeholder="Inserisici password"
            :inputValue="inputField.password.text"
            type="password"
            forLabel="password"
            label="Password *"
            outputError="Il campo dev’essere compilato"
        />
        <p>La password deve contenere un minimo di 8 caratteri, di cui uno maiuscolo (A-Z), un numero (0-9) ed un
          carattere speciale</p>

        <Input
            id="repeatPassword"
            name="repeatPassword"
            aria-label="Ripeti password"
            placeholder="Ripeti password"
            :inputValue="inputField.repeatPassword.text"
            type="password"
            forLabel="repeatPassword"
            label="Ripeti password *"
            outputError="Il campo dev’essere compilato"
        />

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
          <Button
              color="button-white"
              aria-label="Torna indietro"
          >
            INDIETRO
          </Button>
          <Button
              variant="button-contained"
              color="button-yellow"
              aria-label="Continua"
          >
            CONTINUA
          </Button>


        </div>

      </div>

    </div>


  </form>
</template>

<script>

import Button from "@/components/Leopard/components/common/Button.vue";
import Input from "@/components/Leopard/components/common/Input.vue";

export default {
  name: "Registration",
  components: {Button, Input},

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

.registration__content {
  width: 30vw;
}

.registration__title {
  font-size: 2rem;
  font-weight: 700;
}

.registration__sub-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.registration__your-mail {
  font-weight: 600;
}

.registration__form {
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

.registration__form-field-content {
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


</style>
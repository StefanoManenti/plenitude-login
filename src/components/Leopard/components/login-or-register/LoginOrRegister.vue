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
        <input type="email" id="email" name="email" v-model="email" aria-label="Email"
               placeholder="nome.cognome@mail.com"
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
    >
      PROSEGUI
    </button>


    <p class="splitter">OPPURE</p>

    <button
        class="pln-btn-secondary btn-outline "
        aria-label="Prosegui tramite social"
    >
      PROSEGUI TRAMITE SOCIAL
    </button>

  </form>

</template>

<script>

// import {emailExistenceCheck} from "../../api/apiService"
import {verificaEsistenzaMail} from "@/components/Leopard/mock/data";

const COD_EVT = {
  EXCEPTION: "000",
  FREE_MAIL: "007",
}

export default {
  name: "LoginOrRegister",

  data: function () {
    return {
      email: null,
      displayModal: false,
    };
  },


  methods: {
    checkForm: async function (e) {
      e.preventDefault();

      //const response = await emailExistenceCheck(this.email, {"isPivaFE": false});
      const response = verificaEsistenzaMail
      console.log(response)

      if (response) {
        const {codEvt, errMsgEvt} = response;
        this.selectPageComponent(codEvt, errMsgEvt);

        console.log("email", this.email);
        this.$emit("user-email", this.email)
      }
    },

    selectPageComponent(codEvt, errMsgEvt) {
      switch (codEvt) {
        case COD_EVT.EXCEPTION:
          console.log("Error", errMsgEvt); // view error with ...?
          break;
        case COD_EVT.FREE_MAIL:
          this.$emit('update-component', 'registration');
          break;
      }
    },

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
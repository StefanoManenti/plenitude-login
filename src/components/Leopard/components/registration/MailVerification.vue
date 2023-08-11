<template>
  <form class="component-content">

    <div class="section-container">
      <h3 class="section-title">
        Verifica mail
      </h3>

      <h4 class="section-sub-title">
        Inserisci codice di sicurezza
      </h4>

      <p class="section-text">
        Abbiamo inviato un codice di sicurezza alla tua e-mail. Inseriscilo qui per continuare la registrazione.
      </p>
    </div>

    <div pln-component="input-text" pln-version="1.0" pln-template="" class="input-text-small">
      <div class="form-field">
        <label for="otp">Codice di sicurezza</label>
        <input type="number" id="otp" name="otp" placeholder="Inserisci OTP" aria-label="Inserisci otp">
        <output role="alert" class="blank">Questo campo è obbligatorio.</output>
      </div>
    </div>

    <div class="link-container">
      <a class="link-text" href="">Invia di nuovo</a>
    </div>

    <div class="container-buttons container-buttons-margin">
      <button
          class="pln-btn-secondary btn-outline"
          aria-label="Torna indietro"
      >
        TORNA INDIETRO
      </button>

      <button
          class="pln-btn-primary"
          aria-label="Continua"
          type="submit"
      >
        CONTINUA
      </button>

    </div>

  </form>


</template>


<script>

export default {
  name: "MailVerification",

  data: function () {
    return {}
  }
}

</script>


<style lang="scss" scoped>

.input-text-small {
  width: 50%;
}

.container-buttons-margin {
  margin-top: 40px;
}


</style>
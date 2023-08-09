<template>

  <div class="mail-verification">

    <div class="mail-verification__content">

      <h3 class="">
        Verifica mail
      </h3>

      <h4 class="">
        Inserisci codice di sicurezza
      </h4>

      <p class="">
        Abbiamo inviato un codice di sicurezza alla tua e-mail. Inseriscilo qui per continuare la registrazione.
      </p>

      <div class=" ">
        <label  for="security-code">Codice di sicurezza</label>
        <input
               class="registration__input"
               type="text"
               placeholder="Inserisci OTP"
               id="security-code"
               name="security-code"
               aria-label="Inserisci OTP"
               required="">
        <output
            role="alert"
            class="registration__output-error">
          Codice errato
        </output>
      </div>

    </div>


  </div>




</template>


<script>

export default {
  name: "MailVerification",

  data: function () {
    return {

    }
  }
}

</script>
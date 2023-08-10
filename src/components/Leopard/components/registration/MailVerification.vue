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

      <Input
          id="security-code"
          name="security-code"
          aria-label="Inserisci OTP"
          placeholder="Inserisci OTP"
          size="input-small"
          forLabel="security-code"
          label="Codice di sicurezza"
          outputError="Il campo dev’essere compilato"
      />

      <div class="mail-verification__resend-code-container">
        <a class="mail-verification__resend-code" href="#">Invia di nuovo</a>
      </div>

      <Button
          id="goBack"
          ariaLabel="Torna indietro"
          color="button-white"
          size="button-small"
      >
        TORNA INDIETRO
      </Button>

      <Button
        id="continue"
        ariaLabel="Continua"
        color="button-yellow"
        variant="button-contained"
        size="button-small"
      >
        CONTINUA
      </Button>

    </div>


  </div>


</template>


<script>

import Input from "@/components/Leopard/components/common/Input.vue";
import Button from "@/components/Leopard/components/common/Button.vue";

export default {
  name: "MailVerification",
  components: {Button, Input},

  data: function () {
    return {}
  }
}

</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.mail-verification__content {
  width: 40vw;
}

.mail-verification__resend-code {
  color: rgb(9, 88, 165);
  text-decoration: underline;
}

.mail-verification__resend-code-container {
  font-weight: 600;
  margin-top: .3rem;
}

</style>
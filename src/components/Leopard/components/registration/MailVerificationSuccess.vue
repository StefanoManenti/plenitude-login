<template>

  <div class="component-content">

    <div class="body-content gap-25">

      <div class="container-image">
        <img src="../../../../assets/iconsPopupSuccess.svg">
      </div>

      <div class="section-container">
        <h3 class="section-title">
          Mail verificata con successo
        </h3>

        <p class="section-text section-text-small">
          Potrai utilizzare le tue credenziali per tutte le app ENI.
        </p>

      </div>

      <button
          class="pln-btn-primary btn-medium"
          aria-label="Prosegui la registrazione"
      >
        PROSEGUI LA REGISTRAZIONE
      </button>

    </div>
  </div>


</template>


<script>

export default {
  name: "MailVerificationSuccess"
}


</script>


<style lang="scss" scoped>


.body-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.section-text-small {
  margin-left: 15%;
  width: 250px;
  text-align: center;
}

</style>
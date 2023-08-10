<template>

  <button
      :id="id"
      class="button"
      :type="type"
      :aria-label="ariaLabel"
      :class="[customClass, variant, color, size]"
      :disabled="disabled"
      @click="handleClick"
  >

    <slot></slot>

  </button>

</template>

<script>

export default {
  name: "Button",

  props: {
    id: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: "button"
    },
    variant: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: null
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }

}


</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.button {
  border-radius: .3em;
  width: 100%;
  height: 3em;
  border: solid 1px;
  font-weight: 600;
}

.button-contained {
  border: unset;
}

.button-white {
  background: white;
}

.button-yellow {
  background-color: $primary;
}

.button-small {
  width: 13em;
}

</style>
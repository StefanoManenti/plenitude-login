<template>
  <div class="form-field">
    <label
        :class="[customClassLabel, labelClassError]"
        :for="forLabel"
    >
      {{ label }}
    </label>
    <input
        v-on:blur="handleOutsideClickError($event)"
        class="input"
        :class="[customClassInput, inputClassError]"
        :type="type"
        :value="value"
        @input="onInput"
        :placeholder="placeholder"
        :id="id"
        :name="name"
        :aria-label="ariaLabel"
         />
    <output
        v-show="showOutputError"
        role="alert"
        class="output-error">
      {{ outputError }}
    </output>
  </div>
</template>


<script>

export default {
  name: "Input",

  props: {
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    ariaLabel: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: null
    },
    customClassInput: {
      type: String,
      default: null
    },
    customClassLabel: {
      type: String,
      default: null
    },
    handleError: {
      type: Boolean,
      default: null
    },
    outputError: {
      type: String,
      default: null
    },
    forLabel: {
      type: String,
      required: true,
      default: null
    },
    label: {
      type: String,
      required: true,
      default: null
    },
    value: {
      type: String,
      required: true,
    }

  },

  data: function () {
    return {
      showOutputError: false,
      labelClassError: null,
      inputClassError: null
    }
  },

  methods: {

    onInput(event) {
      this.$emit('input', event.target.value);
    },

    handleOutsideClickError(e) {
      const {value} = e.target;
      if (!value.length) {
        this.showOutputError = true;
        this.labelClassError = "label-error";
        this.inputClassError = "input-error"
      } else {
        this.showOutputError = false;
        this.labelClassError = null;
        this.inputClassError = null;

      }
    }
  }
}


</script>


<style lang="scss" scoped>

@import "src/components/Leopard/styles/variables";

.form-field {
  width: 100%;
}

.input {
  height: 45px;
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  padding-left: 1rem;
}

.output-error {
  color: $red-ruby;
  font-size: 14px;
}

.output-error:before {
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

.label-error {
  color: $red-ruby;
}

.input-error {
  background-color: rgb(252, 237, 238);
  border-color: $red-ruby;

  &::placeholder {
    color: $red-ruby;
  }
}

</style>
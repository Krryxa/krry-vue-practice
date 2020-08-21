<template>
  <div>
    <input :value="value" @input="$_handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    $_handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

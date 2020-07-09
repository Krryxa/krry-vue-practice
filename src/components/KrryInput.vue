<template>
  <div>
    <input :value="value" @change="$_handleChange" />
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
    $_handleChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

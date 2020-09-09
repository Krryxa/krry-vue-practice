<template>
  <div>
    <label>
      <input :checked="mye" @change="$_handleInput" type="checkbox" :value="value"/>
      勾选吧
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'mye',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    mye: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    $_handleInput(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

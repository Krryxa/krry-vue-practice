<template>
  <div class="home">
    <back-btn :name="say"></back-btn>
    <krry-input v-model="say"></krry-input>
  </div>
</template>

<script>
export default {
  components: {
    KrryInput: () => import('@/components/KrryInput')
  },
  data() {
    return {
      say: 'haha'
    }
  }
}
</script>

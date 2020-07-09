<template>
  <div class="home">
    <krry-input v-model="say"></krry-input>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

<template>
  <div class="home">
    <back-btn :name="say"></back-btn>
    <krry-input v-model="say"></krry-input>
    {{ id }}
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
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

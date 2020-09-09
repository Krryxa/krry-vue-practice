<template>
  <div class="home">
    <back-btn :name="foo"></back-btn>
    <br>
    <p>自定义v-model：</p>
    <p>{{ say }}</p>
    <krry-input v-model="say"></krry-input>
    {{ id }}
    <br>
    <p>自定义 model：</p>
    <p>{{ foo }}</p>
    <model-input v-model="foo" value="this value"></model-input>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  components: {
    KrryInput: () => import('@/components/KrryInput'),
    ModelInput: () => import('@/components/ModelInput')
  },
  data() {
    return {
      say: 'haha',
      foo: true
    }
  }
}
</script>

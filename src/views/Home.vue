<template>
  <div class="home">
    <div class="img-container">
      <ul>
        <li v-for="ele in exp" :key="ele.routerName">
          <router-link :to="{ name: ele.routerName }">{{ ele.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exp: [
        {
          title: 'sku',
          routerName: 'sku'
        },
        {
          title: '自定义组件 v-model',
          routerName: 'v_model'
        },
        {
          title: '自定义指令：图片懒加载指令',
          routerName: 'imgLazy'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
</style>

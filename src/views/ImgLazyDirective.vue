<template>
  <div class="home">
    <back-btn></back-btn>
    <div class="img-container">
      <img
        v-for="(item, index) in imgSrc"
        :key="index"
        v-imgLazy="item"
        height="300"
      />
    </div>
  </div>
</template>

<script lang="ts">
// import imgLazy from '@/directive/imgLazy'
export default {
  // directives: {
  //   imgLazy
  // },
  data() {
    return {
      imgSrc: [
        'https://ainyi.com/krryblog/upload/2019/11/03/4acb8da7-df66-4267-be2c-aec033eed96c.jpg',
        'https://ainyi.com/krryblog/upload/2019/04/30/4db0a073-5202-49ce-91b1-db7f3d3122cd.jpg',
        'https://ainyi.com/krryblog/upload/2020/08/11/29477e1a-1ece-4815-9ac9-53fd43bc5d27.jpg',
        'https://ainyi.com/krryblog/upload/2020/08/03/4baad42b262226a5fd6fa4ff5f3c938a_meitu_4.jpg',
        'https://ainyi.com/krryblog/upload/2020/07/10/336ffc33-a002-47c8-9b6c-0c3164ed0bfa.jpg',
        'https://ainyi.com/krryblog/upload/2020/07/01/ec0a7753-744c-4a12-8e29-a46b2123ba28.jpg',
        'https://ainyi.com/krryblog/upload/2020/06/30/15e0362c-0b15-4811-90ac-867a41ae3fcd.jpg',
        'https://ainyi.com/krryblog/upload/2020/06/30/fc3475e7-8b18-416e-997b-5d953444c468.jpg',
        'https://ainyi.com/krryblog/upload/2020/05/16/64e99ab1-b920-4ce0-a429-afd06514c59c.jpg',
        'https://ainyi.com/krryblog/upload/2020/05/24/b8164b3b-865c-4295-b5bd-4834dff46b78.jpg',
        'https://ainyi.com/krryblog/upload/2020/03/27/4ccd200a-4d28-49ad-8f87-0c8c9db8eeb7.jpg',
        'https://ainyi.com/krryblog/upload/2019/11/03/4acb8da7-df66-4267-be2c-aec033eed96c.jpg',
        'https://ainyi.com/krryblog/upload/2019/04/30/4db0a073-5202-49ce-91b1-db7f3d3122cd.jpg',
        'https://ainyi.com/krryblog/upload/2020/08/11/29477e1a-1ece-4815-9ac9-53fd43bc5d27.jpg',
        'https://ainyi.com/krryblog/upload/2020/02/01/235bd052-7aab-4ecd-a078-37961f04e68f.jpg'
      ],
      say: 'haha'
    }
  }
}
</script>
<style scoped lang="scss">
.img-container {
  height: 500px;
  overflow: auto;
  color: red;

  img {
    display: block;
  }
}
</style>

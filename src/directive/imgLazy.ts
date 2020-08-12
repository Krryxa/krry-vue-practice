// 引入默认图片
import baseImg from '@/assets/logo.png'

let timer: any = null
// 创建一个监听器
const observer = new IntersectionObserver(entries => {
  // entries 是所有被监听对象的集合
  entries.forEach((entry: any) => {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      // 当被监听元素到临界值且未加载图片时触发
      !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
    }
  })
})
function showImage(el: any, imgSrc: any) {
  const img = new Image()
  img.src = imgSrc
  img.onload = () => {
    el.src = imgSrc
    el.isLoaded = true
  }
}

export default {
  inserted(el: any, binding: any, vnode: any) {
    clearTimeout(timer)
    // 初始化时展示默认图片
    el.src = baseImg
    // 将需要加载的图片地址绑定在dom上
    el.data_src = binding.value
    observer.observe(el)

    // 防抖，这里在组件卸载的时候停止监听
    const vm = vnode.context
    timer = setTimeout(() => {
      vm.$on('hook:beforeDestroy', () => {
        observer.disconnect()
      })
    }, 20)
  },

  // 图片更新触发
  update(el: any, binding: any) {
    el.isLoaded = false
    el.data_src = binding.value
  }
}

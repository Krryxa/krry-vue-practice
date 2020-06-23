<template>
  <div class="container">
    <div v-for="({ title, list }, index) in initialState.specList" :key="index">
      <p class="title">{{ title }}</p>
      <div class="specBox">
        <button v-for="(ele, listIndex) in list"
          :key="listIndex"
          :disabled="!optionSpecs.includes(ele)"
          :class="{ specAction: specsS.includes(ele) }"
          @click="handleClick(ele, index)"
        >
          {{ ele }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { initialState } from './config/dataList'
import SpecAdjoinMatrix from './config/spec-adjoin-martix'
export default {
  data() {
    return {
      initialState: initialState,
      specsS: [],
      optionSpecs: [],
      specAdjoinMatrix: null
    }
  },
  created() {
    this.initData()
  },
  mounted() {},
  computed: {},
  methods: {
    initData() {
      const { specList, specCombinationList } = this.initialState
      this.specsS = Array(specList.length).fill('')
      // 创建一个规格矩阵
      this.specAdjoinMatrix = new SpecAdjoinMatrix(specList, specCombinationList)
      // 获得可选项表
      this.optionSpecs = this.specAdjoinMatrix.getSpecscOptions(this.specsS)
    },
    handleClick(text, index) {
      const bool = this.optionSpecs.includes(text) // 当前规格是否可选
      // 排除可选规格里面没有的规格
      if (this.specsS[index] !== text && !bool) return
      // 根据text判断是否已经被选中了
      this.specsS[index] = this.specsS[index] === text ? '' : text
      this.optionSpecs = this.specAdjoinMatrix.getSpecscOptions(this.specsS)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 600px;
  height: 500px;
  border: 1px solid gray;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 50px;
  padding: 20px;
}
.title {
  font-size: 16px;
  line-height: 24px;
  color: #262626;
}
.specBox {
  margin: 5px 0 5px 0;
  button {
    padding: 5px 10px 5px 10px;
    border: 1px solid transparent;
    margin-left: 20px;
    cursor: pointer;
    &[disabled="disabled"] {
      cursor: not-allowed;
    }
  }
}
.specAction {
  margin-left: 20px;
  background-color: #fef6f4;
  color: #e34a40;
  border: 1px solid #e34a40 !important;
}
</style>

<template>
  <div class="container">
    <div v-for="({ title, list }, index) in initialState.specList" :key="index">
      <p class="title">{{ title }}</p>
      <div class="specBox">
        <span v-for="(ele, index) in list"
          :key="index"
          :class="{ specOption: isOption, specAction: isActive, specDisabled: !isOption }"
        >
          {{ ele }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { initialState } from './config'
export default {
  data() {
    return {
      initialState: initialState
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
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
}
.specOption {
  margin-left: 20px;
  background-color: #f3f3f3;
  padding: 5px 10px 5px 10px;
  color: #505257;
}
.specAction {
  margin-left: 20px;
  background-color: #fef6f4;
  padding: 5px 10px 5px 10px;
  color: #e34a40;
  border: 1px solid #e34a40;
}
.specDisabled {
  margin-left: 20px;
  background-color: #f3f3f3;
  padding: 5px 10px 5px 10px;
  color: #bebebe;
}
</style>

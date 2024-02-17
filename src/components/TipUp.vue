<template>
  <div class="main">
    <slot name="icon">
      <i class="iconfont icon-a-wancheng-complete1"></i>
    </slot>
    <span>{{ title }}</span>
    <span>{{ content }}</span>
  </div>
</template>
  
<script>
export default {
  name: "TipUp",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "成功",
    }
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
.main {
  width: 100px;
  height: 20px;
  border-radius: 15px;
  background: #42b983;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
  z-index: 999;
  position: fixed;
  top: 10px;
  right: 0;
}

.iconfont {
  font-size: 20px;
}
</style>
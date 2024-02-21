<template>
  <div class="main">
    <div class="like-box" @click="handlerLike" ref="like">
      <i class="iconfont icon-a-icon_dianzanshoucang"></i>
      <span>点赞</span>
    </div>
    <div class="collect-box" @click="handlerCollect" ref="collect">
      <i class="iconfont icon-dianzanshoucang"></i>
      <span>收藏</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "LikeBox",
  data() {
    return {
      like: false,
      collect: false
    };
  },
  methods: {
    handlerLike() {
      console.log("click like")
      this.like = !this.like;
      this.$refs.like.style.color = this.like ? "#ff4070" : "#333";
      this.$emit("clickLike", this.like)
    },
    handlerCollect() {
      console.log("click collect")
      this.collect = !this.collect;
      this.$refs.collect.style.color = this.collect ? "#ffa500" : "#333";
      this.$emit("clickCollect", this.collect)
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin: 30px auto;
}

.like-box:hover {
  color: #ff4070;
  cursor: pointer;
}

.like-box,.collect-box {
  font-size: 20px;
}

.collect-box {
  margin-left: 10px;
}

.collect-box:hover {
  color: #ffa500;
  cursor: pointer;
}

.iconfont {
  font-size: 20px;
}
</style>
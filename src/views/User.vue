<template>
  <div class="user-config">
    <span class="title">Hi!{{ nickname }}</span>
    <PictureBox
      :imgUrl="imgUrl"
      circle
      :width="100"
      :height="100"
      class="user-img"
    ></PictureBox>
    <!-- 有bug，url不生效 -->
    <div class="user-form">
      <span class="user-name"
        >用户名：<span class="username" @dblclick="editUsername">{{
          username
        }}</span></span
      >
      <span class="user-nickname"
        >昵称：<span class="nickname" @dblclick="editNickname">{{ nickname }}</span></span
      >
    </div>
  </div>
</template>
  
<script>
import PictureBox from "@/components/PictureBox";
export default {
  name: "UserView",
  components: { PictureBox },
  data() {
    return {
      username: "jack",
      nickname: "匿名用户",
      imgUrl: "../assets/logo.png",
    };
  },
  methods: {
    editUsername() {
      console.log('editUsername')
    },
    editNickname() {
      console.log('editNickname')
    }
  }
};
</script>

<style scoped>
.user-config {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 20px 0;
}

.user-config > .title {
  font-size: 20px;
}

.user-img {
  margin: 20px 0 20px 0;
}

.user-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* background: #ccc;
  border-radius: 15px; */
}

.user-form > .user-name,
.user-nickname {
  margin-top: 10px;
  width: 200px;
  height: 15px;
  padding: 20px;
  background: #ccc;
  border-radius: 15px;
}

.user-form > .user-name:hover,
.user-form > .user-nickname:hover {
  width: 500px;
  transition: all 0.5s;
}

.active {
  width: 500px;
  transition: all 1s;
}

.username,.nickname {
  cursor: pointer;
}

.username:hover,.nickname:hover {
  color: #42b983;
}
</style>
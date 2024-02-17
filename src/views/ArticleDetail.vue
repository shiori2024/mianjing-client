<template>
  <div class="article-detail">
    <div class="nav">
      <span class="back" @click="$router.back()">
        <i class="iconfont icon-houtui-back"></i>
      </span>
      <span class="nav-title">面经详情</span>
    </div>
    <div class="item">
      <div class="head">
        <span class="title">{{ data.title }}</span>
        <div class="info">
          <p>
            <i class="iconfont icon-date"></i>
            <span class="time">{{ commonTime }}</span
            >| <span>浏览 {{ data.visits }}</span
            >|
            <span>点赞 {{ data.like }}</span>
          </p>
        </div>
        <p class="author-info">
          <img class="img" src="../assets/logo.png" alt="" />
          <i class="iconfont icon-a-icon_personal1"></i>
          <span>{{ data.nickname }}</span>
          <span v-show="data.fromLink">
            <i class="iconfont icon-link"></i>
            转载自：<a :href="data.fromLink">link</a></span
          >
        </p>
      </div>
      <div class="content">
        <pre>{{ data.content }}</pre>
      </div>
      <LikeBox
        @clickLike="handlerLike"
        @clickCollect="handlerCollect"
      ></LikeBox>
      <TipUp content="点赞成功"></TipUp>
    </div>
  </div>
</template>

<script>
// 引入API
import InterviewApi from "@/api/";
// 引入工具函数
import formattedDate from "@/utils";
import LikeBox from "@/components/LikeBox";
import TipUp from "@/components/TipUp";

export default {
  name: "ArticleDetail",
  components: { LikeBox,TipUp },
  data() {
    return {
      testList: {
        title: "百度前端面经",
        author: "攻城狮",
        content:
          "一、var在ES5中，顶层对象的属性和全局变量是等价的，用var声明的变量既是全局变量，也是顶层变量注意：顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象二、letlet是ES6新增的命令，用来声明变量用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效三、constconst声明一个只读的常量，一旦声明，常量的值就不能改变\n四、区别var、let、const三者区别：变量提升var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefinedlet和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错暂时性死区var不存在暂时性死区let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量",
        like: "66",
        visits: "666",
        updatedAt: "2019-01-01",
      },
      data: {},
      commonTime: "",
      likes: 0,
      collect: 0,
    };
  },
  async created() {
    await InterviewApi.getInterview(this.$route.params.id).then((res) => {
      this.data = res.data;
      // 格式化时间戳
      this.commonTime = formattedDate(this.data.updatedAt);
      console.log(res);
    });
  },
  methods: {
    handlerLike(bl) {
      if (bl) {
        this.likes++;
      } else {
        this.likes--;
      }
      console.log(this.likes);
    },
    handlerCollect(bl) {
      if (bl) {
        this.collect++;
      } else {
        this.collect--;
      }
      console.log(this.collect);
    },
  },
};
</script>

<style scoped>
.article-detail {
  width: 100vw;
}

.nav {
  width: 100vw;
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.nav > .back {
  width: 20px;
  margin-left: 20px;
}

.nav > .nav-title {
  flex: 1; /* 占据剩余空间 */
  text-align: center;
  font-size: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 15px;
}

.head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  text-align: left;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info p {
  color: #bababa;
}

.info p span {
  padding: 0 5px 0 0;
}

.img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.author-info {
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #eee;
  line-height: 50%;
}

.author-info span {
  margin-right: 10px;
}

.content {
  display: flex;
  align-items: center;
  text-align: left;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
}
</style>
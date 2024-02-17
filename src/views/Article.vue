<template>
  <div class="article" data-simplebar>
    <simplebar>
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="$router.push({ path: `/detail/${item.id}` })"
      >
        <div class="head">
          <img src="../assets/logo.png" alt="img" />
          <div class="info">
            <span class="title">{{ item.title }}</span>
            <p>
              <i class="iconfont icon-a-icon_personal1"></i>
              <span class="author">{{ item.nickname }}</span> |
              <i class="iconfont icon-date"></i>
              <span class="time">{{ item.updatedAt }}</span>
            </p>
          </div>
        </div>
        <div class="content">
          <p>{{ item.content }}</p>
        </div>
        <div class="footer">
          <span>点赞 {{ item.like }}</span
          >|
          <span>浏览 {{ item.visits }}</span>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
// 引入API
import InterviewApi from "@/api/";
// 引入工具函数
import formattedDate from "@/utils";

export default {
  name: "ArticleView",
  components: { simplebar },
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
    };
  },
  async created() {
    try {
      const res = await InterviewApi.getInterviewList();
      this.data = res.data.map(async (item) => {
        // 格式化时间戳
        const formattedTime = formattedDate(item.updatedAt);
        return {
          ...item, // 复制item对象的所有属性
          updatedAt: formattedTime, // 将转换后的时间戳放回updatedAt字段
        };
      });
      // 由于map()内部是异步的，我们需要等待所有的转换完成
      this.data = await Promise.all(this.data);
    } catch (error) {
      console.error("Error fetching interview list:", error);
    }
  },
};
</script>

<style scoped>
.article {
  width: 100vw;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  overflow: scroll;
  height: calc(100%);
}

.head {
  display: flex;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
}

.info p {
  color: #bababa;
}

.head > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.content {
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 150%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  overflow: hidden;
  word-spacing: 2px;
  /* text-indent: 32px; */
}

.footer {
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: #bababa;
  font-size: 14px;
}

.footer span {
  padding: 5px;
}
</style>
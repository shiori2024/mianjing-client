<template>
  <div id="app">
    <keep-alive :include="['LayoutView']">
      <router-view></router-view>
    </keep-alive>
    <div class="nav">
      <div class="nav-item">
        <router-link to="/article">面经</router-link>
        <router-link to="/collect">收藏</router-link>
        <router-link to="/like">喜欢</router-link>
        <router-link to="/user">我的</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.nav-item {
  /* flex: 1;
  flex-shrink: 0; */
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #eee;
}

.nav-item a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

.nav-item a.router-link-exact-active {
  color: #42b983;
}
</style>

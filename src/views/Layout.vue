<template>
  <div class="layout">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "LayoutView",
};
</script>
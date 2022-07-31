<script setup>
import { HomeFilled, Right } from "@element-plus/icons-vue";
</script>
<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :ellipsis="false" @select="handleSelect">
          <el-menu-item index="0">LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item class="avator-area"
            ><el-avatar :icon="UserFilled"
          /></el-menu-item>
          <el-menu-item>
            <el-icon><HomeFilled /></el-icon>
            Home
          </el-menu-item>
          <el-menu-item>
            <el-icon><Right /></el-icon>
            Logout
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
.el-menu--horizontal {
  align-items: center;
}
.el-container {
  min-height: 100vh;
}
.avator-area {
  padding: 10px;
  text-align: center;
}
</style>

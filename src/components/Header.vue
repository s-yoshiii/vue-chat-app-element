<template>
  <el-header>
    <el-menu mode="horizontal" :ellipsis="false">
      <router-link to="/">
        <el-menu-item>LOGO</el-menu-item>
      </router-link>
      <div class="flex-grow" />
      <el-menu-item>
        <router-link to="/mypage">
          <el-icon><UserFilled /></el-icon>
          <span class="item-name">Name</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/">
          <el-icon><HomeFilled /></el-icon>
          <span class="item-name">Home</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/setting">
          <el-icon><Setting /></el-icon>
          <span class="item-name">Setting</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/login">
          <el-icon><Right /></el-icon>
          <span class="item-name">Logout</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script setup>
import {
  HomeFilled,
  Right,
  ArrowDown,
  UserFilled,
  Setting,
} from "@element-plus/icons-vue";
</script>
<script>
import { ref } from "vue";
export default {};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.el-menu--horizontal {
  align-items: center;
}
.el-menu--horizontal > .el-menu-item a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.avator-area {
  padding: 0 var(--el-menu-base-level-padding);
}
.avator-name {
  margin-left: 5px;
  font-size: var(--el-menu-item-font-size);
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
@media screen and (max-width: 767px) {
  .el-menu--horizontal > .el-menu-item a {
    flex-direction: column;
  }
  .el-menu--horizontal > .el-menu-item a .el-icon {
    margin-right: 0;
    height: 23px;
  }
  .item-name {
    line-height: 1.8;
    font-size: 10px;
  }
}
</style>

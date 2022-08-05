<template>
  <el-header>
    <el-menu mode="horizontal" :ellipsis="false">
      <router-link to="/">
        <el-menu-item>LOGO</el-menu-item>
      </router-link>
      <div class="flex-grow" />
      <el-menu-item>
        <el-icon><UserFilled /></el-icon>
        Name
      </el-menu-item>
      <el-menu-item>
        <el-icon><HomeFilled /></el-icon>
        Home
      </el-menu-item>
      <el-menu-item>
        <el-icon><Setting /></el-icon>
        Setting
      </el-menu-item>
      <router-link to="/login">
        <el-menu-item>
          <el-icon><Right /></el-icon>
          Logout
        </el-menu-item>
      </router-link>
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
</style>

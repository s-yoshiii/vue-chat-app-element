<template>
  <el-header>
    <el-menu mode="horizontal" :ellipsis="false">
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <div class="avator-area">
        <el-row align="middle">
          <el-avatar class="avator-image" :icon="UserFilled" />
          <div class="avator-name">AvavtorName</div>
        </el-row>
      </div>
      <el-menu-item>
        <el-icon><HomeFilled /></el-icon>
        Home
      </el-menu-item>
      <el-menu-item>
        <el-icon><Setting /></el-icon>
        Setting
      </el-menu-item>
      <el-menu-item>
        <el-icon><Right /></el-icon>
        Logout
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
.avator-area {
  padding: 0 var(--el-menu-base-level-padding);
}
.avator-image > .el-icon {
  margin-left: 5px;
}
.avator-name {
  margin-left: 5px;
  font-size: var(--el-menu-item-font-size);
}
</style>

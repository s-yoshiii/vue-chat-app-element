<script setup>
import {
  HomeFilled,
  Right,
  ArrowDown,
  UserFilled,
  Setting,
} from "@element-plus/icons-vue";
</script>
<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :ellipsis="false" @select="handleSelect">
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
      <el-main>
        <el-row :gutter="20" justify="center">
          <el-col :span="12" :sm="6">
            <div class="grid-content ep-bg-purple">aaaaa</div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content ep-bg-purple">aaaaa</div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content ep-bg-purple">aaaaa</div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content ep-bg-purple">aaaaa</div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content ep-bg-purple">aaaaa</div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content ep-bg-purple">aaaaa</div>
          </el-col>
        </el-row>
      </el-main>
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
  padding: 0 var(--el-menu-base-level-padding);
}
.avator-image > .el-icon {
  margin-left: 5px;
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

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

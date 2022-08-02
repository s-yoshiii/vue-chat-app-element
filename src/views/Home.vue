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
      <Header />
      <el-main>
        <el-row :gutter="20" justify="start">
          <el-col :span="12" :sm="6">
            <div class="grid-content">
              <el-avatar :size="80" :icon="UserFilled" />
            </div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content">
              <el-avatar :size="80" :icon="UserFilled" />
            </div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content">
              <el-avatar :size="80" :icon="UserFilled" />
            </div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content">
              <el-avatar :size="80" :icon="UserFilled" />
            </div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content">
              <el-avatar :size="80" :icon="UserFilled" />
            </div>
          </el-col>
          <el-col :span="12" :sm="6">
            <div class="grid-content">
              <el-avatar :size="80" :icon="UserFilled" />
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
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
.grid-content {
  text-align: center;
  padding-bottom: 20px;
}
</style>

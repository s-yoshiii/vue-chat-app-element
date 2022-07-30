<template>
  <div class="container">
    <el-container>
      <el-scrollbar height="100vh">
        <el-aside>
          <div class="avator-area">
            <el-avatar :icon="UserFilled" />
          </div>
          <el-menu>
            <el-menu-item>
              <el-icon>
                <IconMenu />
              </el-icon>
              Option 1
            </el-menu-item>
            <el-menu-item>Option 2</el-menu-item>
            <el-menu-item>Option 3</el-menu-item>
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.el-container {
  min-height: 100vh;
}
.avator-area {
  padding: 20px;
  text-align: center;
  border-right: solid 1px var(--el-menu-border-color);
}
</style>

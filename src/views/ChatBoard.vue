<script setup>
import { h, ref } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import { ElDivider } from "element-plus";
const size = ref(10);
const spacer = h(ElDivider, { direction: "vertical" });
</script>
<template>
  <div class="container">
    <Header />
    <el-container>
      <el-main>
        <el-space fill wrap style="width: 100%" direction="vertical">
          <el-card class="box-card" style="widht: 100%">
            <el-space :size="size" :spacer="spacer">
              <div>
                <el-avatar :size="50" :icon="UserFilled" />
              </div>
              <div>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </div>
            </el-space>
          </el-card>
        </el-space>
      </el-main>
    </el-container>
  </div>

  ChatBoard
</template>

<script>
export default {
  created() {
    this.user_id = this.$route.query.user_id;
    console.log("user_id", this.user_id);
  },
  data: () => {
    user_id: "";
  },
};
</script>

<style>
.el-space__item {
  word-break: break-all;
}
</style>

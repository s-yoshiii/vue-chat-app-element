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
    <Header />
    <el-container>
      <el-main>
        <el-row :gutter="20" justify="start">
          <el-col :span="12" :sm="6" v-for="n in 24" :key="n">
            <router-link :to="{ path: '/chat', query: { user_id: n } }">
              <div class="grid-content">
                <el-avatar :size="80" :icon="UserFilled" />
              </div>
            </router-link>
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
.el-container {
  min-height: 100vh;
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

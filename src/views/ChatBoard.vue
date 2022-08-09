<script setup>
import { h, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { UserFilled } from "@element-plus/icons-vue";
const size = ref(10);
const body = ref("");
let user_id = ref("");
const route = useRoute();
const spacer = h(ElDivider, { direction: "vertical" });
user_id = route.query.user_id;
console.log(user_id);
onMounted(() => {});
</script>

<template>
  <div class="container">
    <Header />
    <el-container>
      <el-main>
        <el-space direction="horizon" v-for="n in 12" :key="n">
          <el-space fill wrap style="width: 100%" direction="vertical">
            <el-card class="box-card" style="widht: 100%">
              <el-space :size="size" :spacer="spacer">
                <div>
                  <el-avatar :size="50" :icon="UserFilled" />
                </div>
                <div class="chat-message">
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>
              </el-space>
            </el-card>
          </el-space>
        </el-space>
        <el-form>
          <el-form-item>
            <el-input
              v-model="body"
              :autosize="{ minRows: 2, maxRows: 4 }"
              type="textarea"
              placeholder="Please input"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="invalid" @click="submit"
              >Submit</el-button
            >
            <el-button>Clear</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// export default {
//   created() {
//     this.user_id = this.$route.query.user_id;
//     console.log("user_id", this.user_id);
//   },
//   data: () => {
//     body: "";
//     user_id: "";
//     // invalid: false;
//   },
//   computed: {
//     invalid() {
//       console.log("invalid called");
//       return false;
//     },
//   },
//   methods: {
//     clear() {
//       console.log("clear called");
//     },
//     submit() {
//       console.log("submit called", this.body);
//     },
//   },
// };
</script>
<style>
.el-space__item {
  word-break: break-all;
}
@media screen and (max-width: 767px) {
  .chat-message {
    font-size: 12px;
  }
}
</style>

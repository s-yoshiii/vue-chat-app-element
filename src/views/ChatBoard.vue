<script setup>
import { defineComponent, h, ref } from "vue";

const size = ref(10);
const body = ref("");
const spacer = h(ElDivider, { direction: "vertical" });
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
              :modelValue="body"
              @update:modelValue="body = $event"
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
import { UserFilled } from "@element-plus/icons-vue";
export default defineComponent({
  created() {
    this.user_id = this.$route.query.user_id;
    console.log("user_id", this.user_id);
  },
  data: () => {
    body: "";
    user_id: "";
    // invalid: false;
  },
  computed: {
    invalid() {
      console.log("invalid called");
      return false;
    },
  },
  methods: {
    clear() {
      console.log("clear called");
    },
    submit() {
      console.log("submit called", this.body);
    },
  },
});
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

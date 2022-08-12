<script setup>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { UserFilled } from "@element-plus/icons-vue";

import { db } from "@/firebase/firebase";
import { computed, h, ref } from "vue";
import { useRoute } from "vue-router";
const spacer = h(ElDivider, { direction: "vertical" });
const size = ref(10);
const body = ref("");
let user_id = ref("");
const messages = ref([]);
const route = useRoute();
user_id = route.query.user_id;

const clear = () => {
  console.log("clear called");
};
const submit = () => {
  console.log("submit called", body.value);
  messages.value.unshift({ message: body.value });
  body.value = "";
};
const invalid = computed(() => {
  console.log("isInvalid callded");
  if (!body.value) {
    return true;
  }
  return false;
});
// firebase データ取得
const chatRef = collection(db, "chats");
const chatSnapshot = getDocs(chatRef);
chatSnapshot.then((data) => {
  data.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    messages.value.push(doc.data());
  });
});
</script>
<template>
  <div class="container">
    <Header />
    <el-container>
      <el-main>
        <el-space
          direction="horizon"
          v-for="(data, index) in messages"
          :key="index"
          class="box-card-wrap"
        >
          <el-card class="box-card">
            <el-space :size="size" :spacer="spacer">
              <div>
                <el-avatar :size="50" :icon="UserFilled" />
              </div>
              <div class="chat-message">
                {{ data.message }}
              </div>
            </el-space>
          </el-card>
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
            <el-button @click="clear">Clear</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<style>
.box-card-wrap > .el-space__item {
  width: 100%;
}
.el-space {
  display: flex;
}
@media screen and (max-width: 767px) {
  .chat-message {
    font-size: 12px;
  }
}
</style>

<script setup>
import { computed, reactive } from "vue";
import { object, string } from "yup";
// do not use same name with ref
const form = reactive({
  name: "",
  mail: "",
  password: "",
});

const errorMsg = reactive({
  name: "",
  mail: "",
  password: "",
});

// バリデーション関数
const emailRegExp = /.+@.+\..+/;

// 入力スキーマ
const inputSchema = object().shape({
  name: string().trim().required("名前を入力して下さい"),
  mail: string()
    .trim()
    .required("メールアドレスを入力してください。")
    .matches(emailRegExp, {
      message: "正しい形式のメールアドレスを入力してください。",
    }),
  password: string()
    .trim()
    .trim()
    .min(10, "10文字以上のパスワードを入力してください。"),
});

// バリデーション処理
const valid = (field) => {
  inputSchema
    .validateAt(field, form)
    .then(() => {
      errorMsg[field] = "";
    })
    .catch((err) => {
      errorMsg[field] = err.message;
    });
};

const isValid = computed(() => {
  console.log("isValid", isValid.value);
  return isValid.value;
});

// submit
const onSubmit = (values) => {
  console.log("submit");
};
</script>
<script>
export default {
  name: "Login",
  components: {},
};
</script>

<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :ellipsis="false">
          <router-link to="/">
            <el-menu-item>LOGO</el-menu-item>
          </router-link>
        </el-menu>
      </el-header>
      <el-main>
        <el-card class="box-card" shadow="hover">
          <h1 class="form-title">Sing Up</h1>
          <el-form :model="form" label-width="120px">
            <el-form-item label="Name">
              <el-input v-model="form.name" @blur="valid('name')" />
              <p v-if="!!errorMsg.name">
                {{ errorMsg.name }}
              </p>
            </el-form-item>
            <el-form-item label="E-mail">
              <el-input
                v-model="form.mail"
                type="email"
                @blur="valid('mail')"
              />
              <p v-if="!!errorMsg.mail">
                {{ errorMsg.mail }}
              </p>
            </el-form-item>
            <el-form-item label="Password">
              <el-input
                v-model="form.password"
                type="password"
                @blur="valid('password')"
              />

              <p v-if="!!errorMsg.password">
                {{ errorMsg.password }}
              </p>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" :disabled="isValid"
                >Login</el-button
              >
              <el-button>Clear</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<style>
.box-card,
.el-form {
  max-width: 960px;
  margin: 0 auto;
}
.form-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
}
</style>

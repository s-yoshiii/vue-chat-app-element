<script setup>
import { computed, reactive, ref } from "vue";
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
const valid = ref(true);
const email = ref("");
const emailRegExp = /.+@.+\..+/;
const emailRules = (v) => {
  if (!!v || v.length === 0) {
    return "メールアドレスを入力して下さい";
  } else if (emailRegExp.test(v)) {
    return "メールアドレスが不正です";
  } else {
    return false;
  }
};
// const emailRules = [
//   (v) => !!v || "メールアドレスを入力して下さい",
//   (v) => /.+@.+\..+/.test(v) || "メールアドレスが不正です",
// ];
const validate = (v) => {
  console.log("validated");
  console.log(emailRules(email.value));
  // console.log(requirRules(email.value), "email");
  // console.log(emailformatRules(email.value), "email");
};

// バリデーション関数

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

const nameRules = (v) => !!v || "必ず入力してください";

// バリデーション処理
const validation = (field) => {
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
  return !isValid.value;
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
              <el-input
                v-model="form.name"
                @blur="validation('name')"
                :rules="[requirRules, nameRules]"
              />
              <p v-if="!!errorMsg.name">
                {{ errorMsg.name }}
              </p>
            </el-form-item>
            <el-form-item label="E-mail">
              <el-input
                v-model="email"
                :rules="emailRules"
                @blur="validate"
                type="email"
                required
              />
              <p v-if="!!errorMsg.mail">
                {{ errorMsg.mail }}
              </p>
            </el-form-item>
            <el-form-item label="Password">
              <el-input
                v-model="form.password"
                type="password"
                @blur="validation('password')"
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
              {{ isValid }}
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

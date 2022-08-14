<script setup>
import { computed, reactive } from "vue";
// do not use same name with ref
const form = reactive({
  name: "",
  mail: "",
  password: "",
});

// バリデーション関数
const isValid = computed(() => {
  console.log("isValid", isValid.value);
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
              <el-input v-model="form.name" />
              <p>{{ nameError }}</p>
            </el-form-item>
            <el-form-item label="E-mail">
              <el-input v-model="form.mail" type="email" />
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="form.password" type="password" />
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

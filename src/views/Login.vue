<script setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  mail: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
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
          <el-form :model="form" label-width="120px">
            <el-form-item label="Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="E-mail">
              <el-input v-model="form.mail" />
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<template>
  <div class="container">
    <Header />
    <el-container>
      <el-main>
        <el-space :fill="fill" wrap direction="vertical">
          <el-card class="box-card">list Item </el-card>
          <el-card class="box-card">list Item </el-card>
          <el-card class="box-card">list Item </el-card>
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

<style></style>

<template>
  <div>
    <div class="title-image">
      <!--    <img src="../assets/confphoto.jpg"/>-->
    </div>
    <div>
      <h1>
        APRS ECR Award
      </h1>
      <table class="table">
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Award_ECR.vue"
}
</script>

<style scoped>
.title-image{
  background-image: url(../assets/awards.jpg);
  background-size: cover;

  margin-bottom: 20px;

  width: 100%;
  height: 300px;
}
.table {
  margin-top: 50px;
  text-align: left;
}
</style>
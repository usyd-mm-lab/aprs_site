<template>
  <div class="newscard">
    <p>{{date}}</p>
    {{text}}
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props:['date', 'title', 'text']
}
</script>

<style scoped>
p{
  font-weight: bold;
}
.newscard{
  text-align: left;
  background-color: lightgray;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;

}
</style>
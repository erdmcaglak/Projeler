<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
  import Header from "../common/Header.vue"
  export default {
    components: {
      appHeader: Header,
    }
  }

</script>

<style scoped>
  .container {
    width: 1300px;
    margin: auto;
  }

</style>

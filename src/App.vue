<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./common/Header.vue"
  export default {
    components: {
      appHeader: Header,
    }
  }

</script>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 1300px;
    margin: auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>

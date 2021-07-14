<template>
  <div class="menu">
    <div class="kasa-parcasi">
      <div class="title">Kasa Parçaları</div>
      <div class="kasa-parcasi-items">
        <router-link active-class="active" to="/kasa-parcalari/islemci" tag="a">İşlemci</router-link>
        <router-link active-class="active" to="/kasa-parcalari/anakart" tag="a">Anakart</router-link>
        <router-link active-class="active" to="/kasa-parcalari/ram" tag="a">RAM</router-link>
        <router-link active-class="active" to="/kasa-parcalari/ekran-karti" tag="a">Ekran Kartı</router-link>
        <router-link active-class="active" to="/kasa-parcalari/kasa" tag="a">Bilgisayar Kasası</router-link>
        <router-link active-class="active" to="/kasa-parcalari/ses-karti" tag="a">Ses Kartı</router-link>
      </div>
    </div>
    <div class="depolama">
      <div class="title">Depolama</div>
      <div class="depolama-items">
        <router-link active-class="active" tag="a" to="/depolama/harddisk">Harddisk</router-link>
        <router-link active-class="active" tag="a" to="/depolama/ssd">SSD</router-link>
        <router-link active-class="active" tag="a" to="/depolama/harici">Harici Disk</router-link>
      </div>
    </div>
    <div class="aksesuar">
      <div class="title">Aksesuarlar</div>
      <div class="aksesuar-items">
        <router-link active-class="active" to="/aksesuar/monitor" tag="a">Monitör</router-link>
        <router-link active-class="active" to="/aksesuar/klavye" tag="a">Klavye</router-link>
        <router-link active-class="active" to="/aksesuar/mouse" tag="a">Mouse</router-link>
      </div>
    </div>
    <div class="topla">
      <router-link tag="div" to="/bilgisayar-toplama" class="title">Bilgisayar Topla</router-link>
    </div>
    <div class="admin">
      <router-link tag="div" to="/admin" class="title">Admin</router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .active {
    background-color: #8d8d8d;
  }

  /*-------------------Menu--------------*/
  .menu a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }


  .menu {
    color: #fff;
    font-size: 20px;
    background-color: #242628;
    margin-top: 24px;
  }

  /*-------------Yazılım----------------*/
  .yazılım,
  .topla,
  .admin {
    position: relative;
    display: inline-block;
  }

  .yazılım-items {
    display: none;
    position: absolute;
    background-color: #fcfbfb;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .yazılım:hover .title {
    background-color: #303233;
  }

  .yazılım:hover .yazılım-items {
    display: block;
  }

  .yazılım-items a:hover {
    background-color: #303233;
    color: #fff;
  }

  /*-------------Aksesuar----------------*/
  .aksesuar {
    position: relative;
    display: inline-block;
  }

  .aksesuar-items {
    display: none;
    position: absolute;
    background-color: #fcfbfb;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .aksesuar:hover .title {
    background-color: #303233;
  }

  .aksesuar:hover .aksesuar-items {
    display: block;
  }

  .aksesuar-items a:hover {
    background-color: #303233;
    color: #fff;
  }


  /*-------------Depolama----------------*/

  .depolama {
    position: relative;
    display: inline-block;
  }

  .depolama-items {
    display: none;
    position: absolute;
    background-color: #fcfbfb;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .depolama:hover .title {
    background-color: #303233;
  }

  .depolama:hover .depolama-items {
    display: block;
  }

  .depolama-items a:hover {
    background-color: #303233;
    color: #fff;
  }

  /*----------------Kasa Parçaları----------------*/

  .kasa-parcasi-items a:hover {
    background-color: #303233;
    color: #fff;
  }

  .kasa-parcasi:hover .kasa-parcasi-items {
    display: block;
  }

  .kasa-parcasi:hover .title {
    background-color: #303233;
  }

  .kasa-parcasi-items {
    display: none;
    position: absolute;
    background-color: #fcfbfb;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .kasa-parcasi {
    position: relative;
    display: inline-block;
  }

  .title {
    display: inline-block;
    padding: 16px;
    border: none;
    cursor: pointer;
  }

</style>

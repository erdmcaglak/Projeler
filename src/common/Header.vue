<template>
  <div class="header">
    <router-link tag="p" to="/" class="name">E-com</router-link>
    <i @click="cikisKontrol" :style="this.$store.state.renkKontrol ? 'color:green' : 'color:red'"
      class="fas fa-power-off icon"></i>
    <i @click="sepetKontrol" class="fas fa-shopping-cart icon"></i>
    <app-menu></app-menu>
    <app-pay></app-pay>
    <app-cikis></app-cikis>
  </div>
</template>

<script>
  import Menu from "../components/Menu.vue";
  import Pay from "../pages/Pay.vue";
  import Cikis from "../components/header_components/Cikis.vue";
  export default {
    components: {
      appMenu: Menu,
      appPay: Pay,
      appCikis: Cikis,
    },
    methods: {
      sepetKontrol() {
        if (!this.$store.state.renkKontrol)
          this.$store.state.sepetKontrol = !this.$store.state.sepetKontrol;
        else
          alert("Sepeti açmak için ilk önce giriş yapınız");

      },
      cikisKontrol(value) {
        console.log()
        if (this.$store.state.Sepet.length != 0) {
          this.$store.state.cikisKontrol = !this.$store.state.cikisKontrol;
        } else {
          if (!this.$store.state.renkKontrol) {
            if (confirm("Çıkış Yapmak istediğinize emin misiniz?")) {
              this.$store.state.renkKontrol = !this.$store.state.renkKontrol;
              this.$store.state.sepetKontrol = false;
            }
          } else {
            this.$store.state.renkKontrol = !this.$store.state.renkKontrol;
            alert("Giriş Yaptınız");
          }

        }
      }
    }
  }

</script>

<style scoped>
  .red {
    color: red;
  }

  .green {
    color: green;
  }

  .header {
    width: 100%;
    height: 100px;
    background-color: #282A35;
  }

  .name {
    display: inline-block;
    font-size: 50px;
    padding-left: 20px;
    padding-top: 18px;
    color: #fff;
    user-select: none;
    cursor: pointer;
  }

  .icon {
    float: right;
    font-size: 50px;
    padding-right: 20px;
    padding-top: 18px;
    color: #fff;
    cursor: pointer;
  }

</style>

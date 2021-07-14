<template>
  <div>
    <div class="left">
      <div class="bolum" v-for="(item,index) in this.$store.state.Turler">
        <img class="img" :src="require(`../assets/${item.resim}`)" alt="">
        <div class="img-text">
          <p>{{item.text}}</p>
          <button @click="Kontrol(item,index)" class="buttons">Seçiniz</button>
        </div>
      </div>
    </div>
    <app-list></app-list>
    <button @click="Sepet" class="button">Sepete Ekle</button>
    <div class="right">
      <div class="bolum" v-for="(value,index) in this.$store.state.Toplama">
        <div v-if="value.fiyat != 0">
          <p class="bolum-text">{{value.marka}} {{value.model}}</p>
          <p class="bolum-text"> {{value.fiyat}}</p>
          <i @click="trash(index)" class="fas fa-trash icon"></i>
        </div>

      </div>
    </div>
    <app-sepet></app-sepet>
  </div>

</template>

<script>
  import Sepet from "../components/header_components/Sepet.vue";
  import List from "../components/topla_components/List.vue";
  export default {
    components: {
      appList: List,
      appSepet: Sepet,
    },
    methods: {
      Kontrol(item, index) {
        this.$store.state.toplamaIndex = index;
        this.$store.state.listeTuru = item.tur;
        this.$store.state.toplamaKontrol = !this.$store.state.toplamaKontrol;
      },
      Sepet() {
        if (!this.$store.state.renkKontrol) {
          for (let i = 0; i < 12; i++) {
            if (this.$store.state.Toplama[i].fiyat == 0)
              continue;

            else {
              this.$store.commit("sepetEkle", this.$store.state.Toplama[i]);
              this.$store.commit("toplamaSil", i);
            }

          }
        } else
          alert("Sepete eklemek için lütfen giriş yapınız");

      },
      trash(index) {
        this.$store.commit("toplamaSil", index);
      }
    }
  }

</script>

<style scoped>
  .icon {
    float: right;
    font-size: 30px;
    margin-top: 25px;
    margin-right: 15px;
    cursor: pointer;
  }

  .button {
    position: absolute;
    right: 0;
    padding: 10px 12px;
    border: none;
    border-radius: 5px;
    margin-top: 100px;
    margin-right: 120px;
    background-color: rgb(117, 248, 65);
    color: black;
    cursor: pointer;
  }

  .bolum-text {
    float: left;
    padding-left: 20px;
    padding-top: 33px;
    font-size: 25px;
  }

  .bolum {
    height: 90px;
    width: 100%;
    border-bottom: 1px solid black;
  }

  .buttons {
    width: 150px;
    margin-top: 5px;
    cursor: pointer;
    padding: 5px;
  }

  .img-text {
    float: left;
    margin-left: 20px;
    margin-top: 9px;
  }

  .img {
    width: 65px;
    margin-left: 10px;
    margin-top: 10px;
    float: left;
  }

  .left {
    margin-top: 150px;
    height: 100%;
    width: 45%;
    border: 1px solid black;
    float: left;
    border-bottom: none;
  }

  .right {
    width: 45%;
    height: 100%;
    border: 1px solid black;
    float: left;
    border-bottom: none;
    margin-top: 150px;
    margin-left: 5%;
  }

</style>

<template>
  <div :class="[this.$store.state.odemeKontrol ? 'pay' : 'dpn']">
    <div class="content">
      <i @click="kapat" class="fas fa-times close"></i>
      <form action="">
        <div class="left-contain">
          <app-kredi-karti></app-kredi-karti>
          <app-fatura></app-fatura>
        </div>
        <div class="right-contain">
          <div v-for="item in this.$store.state.Sepet" class="sm-card">
            <img class="sm-img" :src="require(`../assets/${item.picture}`)" alt="">
            <div class="bilgi">
              <p class="text">Model : {{item.model}}</p>
              <p class="text">Marka : {{item.marka}}</p>
              <p class="text">Fiyat : {{item.fiyat}} TL</p>
            </div>
          </div>
        </div>
        <div class="buttons">
          <button @click="checked(event)" class="onayla" type="submit">Onayla</button>
          <button @click="kapat" class="iptal">İptal Et</button>
        </div>
        <div class="fiyat">
          <p>Ödenecek Toplam Fiyat : <b>{{this.$store.state.sepetToplam}}</b> TL</p>
          <input required @click="this.check = !this.check;" type="checkbox" name="sozlesme" value="sozlesme">
          <label for="vehicle1"><a href="#"> <b>Sözleşmeyi </b> </a>okudum onaylıyorum </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import krediKarti from "../components/pay_components/krediKarti.vue";
  import Fatura from "../components/pay_components/Fatura.vue";
  export default {
    components: {
      appKrediKarti: krediKarti,
      appFatura: Fatura,
    },
    data() {
      return {
        check: false,
      }
    },
    methods: {
      kapat() {
        if (confirm("Sepete eklenen ürünler kaybolacaktır. Emin misiniz ?")) {
          this.$store.state.odemeKontrol = false;
          this.$store.commit("removeAll");
        }
      }
    },
  }

</script>

<style scoped>
  .iptal {
    margin-left: 203px;
  }

  .fiyat {
    float: left;
    width: 60%;
    color: black;
    margin-top: 25px;
    text-align: center;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: black;
  }

  .text {
    padding-top: 10px;
    user-select: none;
    font-size: 10px;
  }

  .bilgi {
    float: left;
    margin-left: 15px;
    margin-top: 15px;
  }

  .sm-img {
    width: 130px;
    margin-top: 10px;
    float: left;
  }

  .sm-card {
    height: 150px;
    width: 300px;
    border: 1px solid black;
    float: left;
    margin: 3px 6px;
  }

  .onayla,
  .iptal {
    padding: 6px 12px;
    cursor: pointer;
  }

  .right-contain {
    float: left;
    width: 60%;
    margin-top: 25px;
    height: 484px;
    overflow: auto;
  }

  .left-contain {
    float: left;
    width: 40%;
  }

  .buttons {
    float: left;
    width: 40%;
    margin-top: 35px;
  }

  .close {
    position: absolute;
    font-size: 28px;
    font-weight: bold;
    top: 0;
    right: 0;
    margin-right: 15px;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: none;
  }

  .dpn {
    display: none;
  }

  .pay {
    display: block;
    position: fixed;
    z-index: 999;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    height: 72%;
  }

</style>

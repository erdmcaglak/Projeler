<template>
  <div :class="[this.$store.state.addKontrol ? 'pay' : 'dpn']">
    <div class="content">
      <i @click="kapat" class="fas fa-times close"></i>
      <p>Ürün Ekle</p>
      <div class="inputs">
        <select class="product" v-model="Resim" name="" id="">
          <option selected disabled value="">Resim Seçiniz</option>
          <option value="islemci.jpg">İşlemci</option>
          <option value="anakart.jpg">Anakart</option>
          <option value="ram.jpg">Ram</option>
          <option value="ekrankart.jpg">Ekran Kartı</option>
          <option value="kasa.jpg">Bilgisayar Kasası</option>
          <option value="ses karti.jpg">Ses Kartı</option>
          <option value="harddisk.jpg">Harddisk</option>
          <option value="ssd.jpg">Ssd</option>
          <option value="harici.jpg">Harici Disk</option>
          <option value="monitor.jpg">Monitör</option>
          <option value="klavye.jpg">Klavye</option>
          <option value="mouse.jpg">Mouse</option>
        </select>
        <select class="product" v-model="Tur" name="" id="">
          <option selected disabled value="">Tür Seçiniz</option>
          <option value="islemci">İşlemci</option>
          <option value="anakart">Anakart</option>
          <option value="ram">Ram</option>
          <option value="ekran-karti">Ekran Kartı</option>
          <option value="kasa">Bilgisayar Kasası</option>
          <option value="ses-karti">Ses Kartı</option>
          <option value="harddisk">Harddisk</option>
          <option value="ssd">Ssd</option>
          <option value="harici">Harici Disk</option>
          <option value="monitor">Monitör</option>
          <option value="klavye">Klavye</option>
          <option value="mouse">Mouse</option>
        </select>
        <input v-model="Marka" class="product" placeholder="Marka" type="text">
        <input v-model="Model" class="product" placeholder="Model" type="text">
        <input v-model="Fiyat" class="product" placeholder="Fiyat" type="number">
        <input v-if="Tur == 'anakart' " v-model="Uyumluluk" class="product" placeholder="Uyumluluk" type="text">
        <button @click="Onay" class="button">Onayla</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Resim: "",
        Tur: "",
        Marka: "",
        Model: "",
        Fiyat: 0,
        Uyumluluk: "",
      }
    },
    methods: {
      kapat() {
        this.$store.state.addKontrol = false;
        this.Resim = "";
        this.Tur = "";
        this.Marka = "";
        this.Model = "";
        this.Fiyat = 0;
        this.Uyumluluk = "";
      },
      Onay() {
        this.$store.state.addMarka = this.Marka;
        this.$store.state.addTur = this.Tur;
        this.$store.state.addModel = this.Model;
        this.$store.state.addResim = this.Resim;
        this.$store.state.addFiyat = this.Fiyat;
        this.$store.state.addUyum = this.Uyumluluk;
        this.Resim = "";
        this.Tur = "";
        this.Marka = "";
        this.Model = "";
        this.Fiyat = 0;
        this.Uyumluluk = "";
        this.$store.commit("addSamples");
        this.$store.state.addKontrol = false;
      }
    }
  }

</script>

<style scoped>
  .button {
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    background-color: rgb(75, 240, 75);
  }

  .product {
    height: 30px;
    font-size: 20px;
    display: block;
    margin-top: 15px;
  }

  .inputs {
    margin-top: 30px;
    margin-left: 150px;
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
    height: 50%;
  }

</style>

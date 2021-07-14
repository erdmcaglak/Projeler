<template>
  <div :class="[this.$store.state.editKontrol ? 'edit' : 'dpn']">
    <div class="content">
      <i @click="kapat" class="fas fa-times close"></i>
      <p>Ürün Güncelle</p>
      <div class="inputs">
        <input v-model="Marka" class="product" placeholder="Marka" type="text">
        <input v-model="Model" class="product" placeholder="Model" type="text">
        <input v-model="Fiyat" class="product" placeholder="Fiyat" type="number">
        <select v-model="Selected" class="product" v-if="Kontrol()" name="tur" id="">
          <option selected disabled value="">Uyumluluk</option>
          <option value="INTEL">INTEL</option>
          <option value="AMD">AMD</option>
        </select>
        <button class="button" @click="Onay">Onayla</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Marka: "",
        Model: "",
        Fiyat: 0,
        Selected: "",
      }
    },
    methods: {
      Onay() {
        this.$store.state.setMarka = this.Marka;
        this.$store.state.setModel = this.Model;
        this.$store.state.setFiyat = this.Fiyat;
        this.$store.state.setSelected = this.Selected;
        this.$store.commit("setSamples");
        this.Marka = "";
        this.Model = "";
        this.Fiyat = 0;
        this.Selected = "";
        this.$store.state.editKontrol = false;
      },
      kapat() {

        this.$store.state.editKontrol = false;
        this.$store.state.anakartKontrol = false;
        this.Marka = "";
        this.Model = "";
        this.Fiyat = 0;
        this.Selected = "";

      },
      Kontrol() {
        if (this.$store.state.anakartKontrol) {
          return true;
        } else
          return false;
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

  .content input,
  .content select {
    outline: none;
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

  .edit {
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
    height: 40%;
  }

</style>

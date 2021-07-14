<template>
  <div>
    <div v-if="item.tur=='ram'" class="card" v-for="item in this.$store.state.Samples">
      <img class="img" :src="require(`../../assets/${item.picture}`)" alt="">
      <p>Model : {{item.model}}</p>
      <p>Marka : {{item.marka}}</p>
      <p>Fiyat : {{item.fiyat}} TL</p>
      <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tenetur.</span>
      <button @click="Sepet(item)" class="sepet-button">Sepete Ekle</button>
    </div>
    <app-sepet></app-sepet>
  </div>
</template>

<script>
  import Sepet from "../../components/header_components/Sepet.vue"
  export default {
    components: {
      appSepet: Sepet,
    },
    methods: {
      Sepet(item) {
        if (!this.$store.state.renkKontrol)
          this.$store.commit("sepetEkle", item);
        else
          alert("Sepete ürün eklemek için ilk önce giriş yapınız");
      }
    }
  }

</script>

<style scoped>
  .container {
    width: 1300px;
    margin: auto;
  }

  .text {
    display: block;
    text-align: center;
  }

  .sepet-button {
    padding: 10px 12px;
    background-color: #28a745;
    color: #fff;
    border: none;
    text-align: center;
    border-radius: 5px;
    margin-top: 8px;
    margin-left: 74.5px;
    cursor: pointer;
  }

  .img {
    width: 100%;
    border-bottom: 3px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .card {
    border: 1px solid black;
    height: 450px;
    width: 250px;
    margin-top: 100px;
    border-radius: 10px;
    float: left;
    margin-left: 275px;
  }

  .card:first-child {
    margin-left: 0;
  }

  .card:nth-child(3n+1) {
    margin-left: 0;
  }

  .card p {
    border-bottom: 1px dashed black;
    text-align: center;
    height: 29px;
    padding-top: 5px;
  }

</style>

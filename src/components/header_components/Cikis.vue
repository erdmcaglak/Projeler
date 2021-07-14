<template>
  <div :class="[this.$store.state.cikisKontrol ? 'cikis' : 'dpn']">
    <div class="content">
      <i @click="Kapat" class="fas fa-times close"></i>
      <div class="aciklama">
        <p class="bilgilendirme">Çıkıs yapmanız durumunda aşağıdaki bütün ürünler sepetinizden silinecektir.</p>
        <p class="bilgilendirme"> Yine de çıkış yapmak istiyor musunuz?</p>
      </div>
      <div class="contain">
        <div v-for="item in this.$store.state.Sepet" class="sm-card">
          <img class="sm-img" :src="require(`../../assets/${item.picture}`)" alt="">
          <div class="bilgi">
            <p class="text">Model : {{item.model}}</p>
            <p class="text">Marka : {{item.marka}}</p>
            <p class="text">Fiyat : {{item.fiyat}} TL</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click="Onay" class="onay">Onayla</button>
        <button @click="Kapat" class="red">Reddet</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      Kapat() {
        this.$store.state.cikisKontrol = false;
      },
      Onay() {
        this.$store.state.cikisKontrol = false;
        this.$store.state.sepetKontrol = false;
        this.$store.state.renkKontrol = !this.$store.state.renkKontrol;
        this.$store.commit("removeAll");
        alert("Çıkış Yaptınız");
      }
    }
  }

</script>

<style scoped>
  .buttons {
    margin-top: 5px;
  }

  .onay,
  .red {
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }

  .onay {
    background-color: rgb(100, 192, 34);
    float: left;
  }

  .red {
    background-color: rgb(225, 55, 55);
    float: right;
  }

  .bilgilendirme {
    font-size: 25px;
    text-align: center;
    margin-top: 5px;
  }

  .aciklama {
    height: 100px;
    width: 100%;
    border: 1px solid black;
    margin-top: 40px;
  }

  .contain {
    height: 400px;
    width: 100%;
    display: inline-block;
    margin-top: 40px;
    overflow: auto;
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

  .cikis {
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
    width: 50%;
    height: 72%;
  }

</style>

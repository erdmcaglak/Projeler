<template>
  <div :class="[this.$store.state.sepetKontrol ? 'sepet' : 'disnone']">
    <p class="text"><b>SEPETİNİZ</b></p>
    <i @click="Close" class="fas fa-times close"></i>
    <p v-if="this.$store.state.Sepet.length == 0" class="text">Sepetinizde herhangi bir ürün yok</p>
    <div class="scroll">
      <ul>
        <li class="content" v-for="(item,index) in this.$store.state.Sepet">
          <span class="product"> Model : {{item.model}}</span>
          <span class="product">Marka : {{item.marka}}</span>
          <span class="product">Fiyat : {{item.fiyat}}</span>
          <span class="delete" @click="Remove(index)"><i @click="Increase(item)" class="far fa-times-circle"></i></span>
        </li>
      </ul>
    </div>
    <div class="buttons" v-if="this.$store.state.Sepet.length != 0">
      <button @click="Odeme" class="odeme">Ödeme</button>
      <button @click="removeAll()" class="temizle">Temizle</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      Increase(item) {
        this.$store.commit("Eksi", item);
      },
      removeAll() {
        this.$store.commit("removeAll");
      },
      Remove(value) {
        this.$store.commit("remove", value);
      },
      Close() {
        this.$store.state.sepetKontrol = !this.$store.state.sepetKontrol;
      },
      Odeme() {
        this.$store.state.odemeKontrol = !this.$store.state.odemeKontrol;
      }
    }
  }

</script>

<style scoped>
  .close {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 25px;
    margin-right: 15px;
    margin-top: 15px;
    cursor: pointer;
  }

  .buttons {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 8px;
  }

  .buttons .temizle {
    float: right;
    margin-right: 30px;
    padding: 8px 16px;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #D71D1D;
  }

  .buttons .odeme {
    float: left;
    margin-left: 10px;
    padding: 8px 16px;
    outline: none;
    cursor: pointer;
    background-color: #0077F7;
    border: none;
    border-radius: 5px;
  }

  .scroll {
    max-height: 68%;
    overflow: auto;
  }

  .delete {
    float: right;
    margin-right: 30px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
  }

  .content .product:first-child {
    margin-left: 5px;
  }

  .product {
    margin-left: 15px;
  }

  .text {
    font-size: 25px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .disnone {
    display: none;
  }

  .sepet {
    display: block;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 100px;
    width: 500px;
    height: 50%;
    overflow: auto;
    background-color: #e2e2e2;
    border-radius: 10px;
  }

  .content {
    width: 100%;
    height: 80%;
    display: block;
    margin-bottom: 15px;
    user-select: none;
  }

</style>

<template>
  <div :class="[this.$store.state.toplamaKontrol ? 'toplama' : 'dpn']">
    <div class="content">
      <i @click="kapat" class="fas fa-times close"></i>
      <ul class="list">
        <li @click="selected(item)" v-if="esitlikKontrol(item)" v-for="item in this.$store.state.Samples">
          <div class="row">
            <img class="img" :src="require(`../../assets/${item.picture}`)" alt="">
            <p class="item-marka">{{item.marka}}</p>
            <p class="item-model">{{item.model}}</p>
            <p class="item-fiyat">{{item.fiyat}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      kapat() {
        this.$store.state.toplamaKontrol = false;
      },
      esitlikKontrol(item) {
        if ((this.$store.state.Toplama[0].marka == "INTEL" && this.$store.state.listeTuru == 'anakart' && item.uyum ==
            'INTEL') || (this.$store.state.Toplama[0].marka == "AMD" && this.$store.state.listeTuru == 'anakart' && item
            .uyum == 'AMD')) {
          return true;
        } else {
          if (this.$store.state.Toplama[0].marka == "INTEL" && this.$store.state.listeTuru == 'anakart' && item.uyum !=
            'INTEL' || (this.$store.state.Toplama[0].marka == "AMD" && this.$store.state.listeTuru == 'anakart' && item
              .uyum != 'AMD')) {
            return false;
          } else {
            if (item.tur == this.$store.state.listeTuru)
              return true;
            else
              return false;
          }
        }

      },
      selected(value) {
        this.$store.state.toplamaKontrol = false;
        this.$store.commit("toplamaEkle", value);
      }
    },
  }

</script>

<style scoped>
  .row {
    display: block;
    width: 100%;
    height: 55px;
    border: 1px solid black;
  }

  .item-fiyat {
    float: right;
    margin-right: 50px;
    margin-top: 15px;
  }

  .item-marka,
  .item-model {
    margin-left: 20px;
    float: left;
    margin-top: 15px;
  }

  .list li {
    margin-top: 5px;
  }

  .list li:hover {
    background-color: rgb(191, 188, 188);
    cursor: pointer;
  }

  .list {
    margin-top: 50px;
  }

  .img {
    width: 50px;
    float: left;
    margin-top: 2px;
  }

  li {
    list-style: none;
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

  .toplama {
    display: block;
    position: fixed;
    z-index: 999;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    height: 70%;
    border-radius: 5px;
  }

</style>

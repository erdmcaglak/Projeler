<template>
  <div>
    <router-link tag="div" to="/" class="admin-exit">
      <p>Adminden Çıkmak için bu alana tıkla</p>
    </router-link>
    <div class="container">
      <p class="resim">Resim</p>
      <p class="marka-th">Marka</p>
      <p class="model-th">Model</p>
      <p class="fiyat-th">Fiyat</p>
      <p class="tur-th">Tür</p>
      <div @click="yeni" class="yeni">Yeni ürün ekle</div>
      <div class="table">
        <ul>
          <li class="items" v-for="(item,index) in this.$store.state.Samples">
            <img class="img" :src="require(`../../assets/${item.picture}`)" alt="resim">
            <p class="marka">{{item.marka}}</p>
            <p class="model">{{item.model}}</p>
            <p class="fiyat">{{item.fiyat}}</p>
            <p class="tur">{{item.tur}}</p>
            <i @click="del(index)" class="fas fa-trash-alt icon"></i>
            <i @click="Edit(item,index)" class="fas fa-pencil-alt icon"></i>
          </li>
        </ul>
      </div>

    </div>
    <app-edit></app-edit>
    <app-add></app-add>
  </div>
</template>

<script>
  import Edit from "../../components/admin_components/Edit.vue"
  import Add from "../../components/admin_components/Add.vue"
  export default {
    components: {
      appEdit: Edit,
      appAdd: Add,
    },
    methods: {
      del(index) {
        this.$store.commit("removeSamples", index);
      },
      Edit(item, index) {
        if (item.tur == 'anakart') {
          this.$store.state.anakartKontrol = !this.$store.state.anakartKontrol;
        }
        this.$store.state.adminIndex = index;
        this.$store.state.editKontrol = !this.$store.state.editKontrol;

      },
      yeni() {
        this.$store.state.addKontrol = !this.$store.state.addKontrol;
      }
    }
  }

</script>

<style scoped>
  .yeni {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 102.5px;
    border: 1px solid black;
    margin-right: 70px;
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 5px;
  }

  .yeni:hover {
    background-color: rgb(0, 0, 0);
    color: #fff;
  }

  .resim,
  .marka-th,
  .model-th,
  .fiyat-th,
  .tur-th {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 125px;
  }

  .tur-th {
    margin-left: 700px;
  }

  .fiyat-th {
    margin-left: 550px;
  }

  .model-th {
    margin-left: 375px;
  }

  .marka-th {
    margin-left: 200px;
  }

  .resim {

    margin-left: 75px;
  }

  .icon {
    float: right;
    font-size: 30px;
    margin-right: 15px;
    margin-top: 8px;
    cursor: pointer;
  }

  .fiyat,
  .tur {
    width: 150px;
    border-right: 1px solid black;
    height: 50px;
  }

  .img {
    width: 45px;
    float: left;
    margin-right: 25px;
    margin-left: 25px;
    margin-top: 3px;
  }

  .model {
    width: 200px;
    border-right: 1px solid black;
    height: 50px;
  }

  .marka {
    width: 150px;
    border-right: 1px solid black;
    height: 50px;
    border-left: 1px solid black;
  }

  .items p {
    padding-left: 10px;
    padding-top: 13px;
    float: left;
  }

  .items {
    border-bottom: 1px solid black;
    height: 50px;
  }

  .items:hover {
    background-color: rgb(223, 223, 223);
  }

  .table {
    border: 1px solid black;
    margin-top: 50px;
    margin-bottom: 50px;
    border-bottom: none;
  }

  li {
    list-style: none;
  }

  .container {
    width: 1300px;
    margin: auto;
  }

  .admin-exit {
    display: inline-block;
    border: 1px solid black;
    height: 100px;
    width: 100%;
    cursor: pointer;
  }

  .admin-exit:hover {
    background-color: rgb(0, 0, 0);
    color: #fff;
  }

  .admin-exit p {
    text-align: center;
    font-size: 40px;
    margin-top: 25px;
  }

</style>

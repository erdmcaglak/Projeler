<template>
  <div class="kredi-karti">
    <p class="text"> <b>Kredi Kartı</b> </p>
    <div>
      <label for="ad">Adınız *</label>
      <label class="soyad" for="soyad">Soyadı *</label><br>
      <input required v-model="this.$store.state.kullaniciBilgi.Isim" type="text" class="isim">
      <input required v-model="this.$store.state.kullaniciBilgi.soyIsim" type="text" class="soyisim">
    </div>
    <div>
      <label for="kart-no">Kart Numarası *</label>
      <label class="cvc-text" for="cvc">CVC *</label><br>
      <input @keypress="Kontrol" v-model="this.$store.state.kullaniciBilgi.kartNo" required type="number" id="kart-no"
        class="kart-no">
      <input required v-model="this.$store.state.kullaniciBilgi.Cvc" type="number" id="cvc">
    </div>
    <div>
      <label for="">Son Kullanım Tarihi *</label><br>
      <select required v-model="this.$store.state.kullaniciBilgi.sonAy" class="" name="" id="">
        <option value="" disabled selected> </option>
        <option value="">01</option>
        <option value="">02</option>
        <option value="">03</option>
        <option value="">04</option>
        <option value="">05</option>
        <option value="">06</option>
        <option value="">07</option>
        <option value="">08</option>
        <option value="">09</option>
        <option value="">10</option>
        <option value="">11</option>
        <option value="">12</option>
      </select>
      <select required v-model="this.$store.state.kullaniciBilgi.sonYil" class="" name="" id="">
        <option value="" disabled selected> </option>
        <option value="">2021</option>
        <option value="">2022</option>
        <option value="">2023</option>
        <option value="">2024</option>
        <option value="">2025</option>
        <option value="">2026</option>
        <option value="">2027</option>
        <option value="">2028</option>
        <option value="">2029</option>
        <option value="">2030</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      Kontrol() {
        if (this.kartNo.length >= 16) {
          alert("Kart numarası 16 haneden fazla olamaz");
        }
      }
    }
  }

</script>

<style scoped>
  .kredi-karti input,
  .kredi-karti select {
    outline: none;
    height: 25px;
    padding-left: 5px;
  }

  .kredi-karti {
    margin-top: 25px;
  }

  .text {
    font-size: 25px;
  }

  .soyad {
    margin-left: 123px;
  }

  .cvc-text {
    margin-left: 72px;
  }

</style>

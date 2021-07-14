import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    kullaniciBilgi:{
      Isim:"",
      Soyisim:"",
      kartNo:"",
      Cvc:"",
      sonAy:"",
      sonYıl:"",
    },
    Samples : [
      {model:"Core i7",marka:"INTEL",fiyat:8700,tur:"islemci",picture:"islemci.jpg"},
      {model:"Core i5",marka:"INTEL",fiyat:5700,tur:"islemci",picture:"islemci.jpg"},
      {model:"RYZEN 5",marka:"AMD",fiyat:8900,tur:"islemci",picture:"islemci.jpg"},
      {model:"A320M-A",marka:"MSI",fiyat:409,tur:"anakart",picture:"anakart.jpg",uyum:"INTEL" },
      {model:"ROG STRİX",marka:"ASUS",fiyat:8250,tur:"anakart",picture:"anakart.jpg",uyum:"AMD" },
      {model:"A320M-S2H",marka:"GIGABYTE",fiyat:418,tur:"anakart",picture:"anakart.jpg",uyum:"INTEL" },
      {model:"8GB DDR4 ",marka:"KINGSTON",fiyat:470,tur:"ram",picture:"ram.jpg"},
      {model:"8GB DDR4 ",marka:"CORSAIR",fiyat:369,tur:"ram",picture:"ram.jpg" },
      {model:"8GB DDR4 ",marka:"PATRİOT",fiyat:379,tur:"ram",picture:"ram.jpg"},
      {model:"RTX3070",marka:"GIGABYTE",fiyat:6000,tur:"ekran-karti",picture:"ekrankart.jpg" },
      {model:"RTX3090",marka:"MSI",fiyat:39000,tur:"ekran-karti",picture:"ekrankart.jpg" },
      {model:"RTX2060",marka:"ASUS",fiyat:3750,tur:"ekran-karti",picture:"ekrankart.jpg" },
      {model:"GT-003",marka:"GAMETECH",fiyat:360,tur:"kasa",picture:"kasa.jpg" },
      {model:"FLAT MESH",marka:"EVEREST",fiyat:200,tur:"kasa",picture:"kasa.jpg" },
      {model:"CONQUER 2",marka:"COUGAR",fiyat:185,tur:"kasa",picture:"kasa.jpg" },
      {model:"SOUND BLASTER",marka:"CREATİVE",fiyat:370,tur:"ses-karti",picture:"ses karti.jpg" },
      {model:"XONAR SE",marka:"ASUS",fiyat:350,tur:"ses-karti",picture:"ses karti.jpg" },
      {model:"STRİX SOAR 7.1",marka:"ASUS",fiyat:1085,tur:"ses-karti",picture:"ses karti.jpg" },
      {model:"1TB HDD",marka:"SEAGATE",fiyat:358,tur:"harddisk",picture:"harddisk.jpg" },
      {model:"3TB HDD",marka:"TOSHIBA",fiyat:690,tur:"harddisk",picture:"harddisk.jpg"},
      {model:"16TB HDD",marka:"SEAGATE",fiyat:8500,tur:"harddisk",picture:"harddisk.jpg" },
      {model:"1TB SSD",marka:"SAMSUNG",fiyat:2250,tur:"ssd",picture:"ssd.jpg" },
      {model:"240GB SSD",marka:"KİOXİA",fiyat:367,tur:"ssd",picture:"ssd.jpg" },
      {model:"512GB SSD",marka:"XPG",fiyat:570,tur:"ssd",picture:"ssd.jpg" },
      {model:"2TB 5400RPM",marka:"DİGİTTRADE",fiyat:12736,tur:"harici",picture:"harici.jpg" },
      {model:"6TB 4200RPM",marka:"SEAGATE",fiyat:1430,tur:"harici",picture:"harici.jpg" },
      {model:"500GB 4000RPM",marka:"SAMSUNG",fiyat:245,tur:"harici",picture:"harici.jpg"},
      {model:"49' 1ms 144HZ QLED",marka:"SAMSUNG",fiyat:10903,tur:"monitor",picture:"monitor.jpg" },
      {model:"23.8' 75HZ 4MS",marka:"LENOVO",fiyat:1250,tur:"monitor",picture:"monitor.jpg"},
      {model:"23.6' 144HZ 1MS",marka:"ASUS",fiyat:1900,tur:"monitor",picture:"monitor.jpg" },
      {model:"HYDRA R7",marka:"RAMPAGE",fiyat:670,tur:"klavye",picture:"klavye.jpg" },
      {model:"WARLOCK",marka:"GAMEPOWER",fiyat:260,tur:"klavye",picture:"klavye.jpg" },
      {model:"MOMENTUM G264",marka:"PHİLİPS",fiyat:160,tur:"klavye",picture:"klavye.jpg" },
      {model:"BASİLİSK X",marka:"RAZER",fiyat:350,tur:"mouse",picture:"mouse.jpg" },
      {model:"G900 CHAOS",marka:"LOGİTECH",fiyat:2540,tur:"mouse",picture:"mouse.jpg" },
      {model:"RİVAL 650",marka:"STEELSERİES",fiyat:1270,tur:"mouse",picture:"mouse.jpg" },

    ],
    Turler : [
      {tur:'islemci',resim:'islemci.jpg',text:"İşlemci"},
      {tur:'anakart',resim:'anakart.jpg',text:"Anakart"},
      {tur:'ram',resim:'ram.jpg',text:"Ram"},
      {tur:'ekran-karti',resim:'ekrankart.jpg',text:"Ekran Kartı"},
      {tur:'kasa',resim:'kasa.jpg',text:"Bilgisayar Kasası"},
      {tur:'ses-karti',resim:'ses karti.jpg',text:"Ses Kartı"},
      {tur:'harddisk',resim:'harddisk.jpg',text:"Harddisk"},
      {tur:'ssd',resim:'ssd.jpg',text:"SSD"},
      {tur:'harici',resim:'harici.jpg',text:"Harici Disk"},
      {tur:'monitor',resim:'monitor.jpg',text:"Monitör"},
      {tur:'klavye',resim:'klavye.jpg',text:"Klavye"},
      {tur:'mouse',resim:'mouse.jpg',text:"Mouse"},
    ],
    Sepet:[],
    Toplama:[
      {tur:'islemci',model:"",fiyat:0,marka:"",picture:"islemci.jpg"},
      {tur:'anakart',model:"",fiyat:0,marka:"",picture:"anakart.jpg"},
      {tur:'ram',model:"",fiyat:0,marka:"",picture:"ram.jpg"},
      {tur:'ekran-karti',model:"",fiyat:0,marka:"",picture:"ekrankart.jpg"},
      {tur:'kasa',model:"",fiyat:0,marka:"",picture:"kasa.jpg"},
      {tur:'ses-karti',model:"",fiyat:0,marka:"",picture:"ses karti.jpg"},
      {tur:'harddisk',model:"",fiyat:0,marka:"",picture:"harddisk.jpg"},
      {tur:'ssd',model:"",fiyat:0,marka:"",picture:"ssd.jpg"},
      {tur:'harici',model:"",fiyat:0,marka:"",picture:"harici.jpg"},
      {tur:'monitor',model:"",fiyat:0,marka:"",picture:"monitor.jpg"},
      {tur:'klavye',model:"",fiyat:0,marka:"",picture:"klavye.jpg"},
      {tur:'mouse',model:"",fiyat:0,marka:"",picture:"mouse.jpg"},
    ],
    addMarka:"",
    addTur:"",
    addModel:"",
    addFiyat:0,
    addResim:"",
    addUyum:"",
    setMarka:"",
    setModel:"",
    setFiyat:0,
    setSelected:"",
    adminIndex : 0,
    toplamaIndex:0,
    sepetToplam: 0,
    sepetKontrol : false,
    odemeKontrol : false,
    cikisKontrol : false,
    renkKontrol : false,
    toplamaKontrol : false,
    toplamaSepetKontrol : false,
    editKontrol : false,
    anakartKontrol : false,
    addKontrol: false,
    listeTuru : "",
  },
  mutations:{
    addSamples(state){
      if(state.addMarka != "" && state.addModel !=""){
        if(state.addTur == 'anakart'){
          state.Samples.push({'model':state.addMarka,'marka':state.addMarka,'fiyat':state.addFiyat,'tur':state.addTur,'picture':state.addResim,'uyum':state.addUyum});
        }
        else{
          state.Samples.push({'model':state.addMarka,'marka':state.addMarka,'fiyat':state.addFiyat,'tur':state.addTur,'picture':state.addResim});
        }

      }
    },
    setSamples(state){
      if(state.setMarka != "" && state.setModel!= "" && state.setFiyat != 0){
        state.Samples[state.adminIndex].model = state.setModel;
        state.Samples[state.adminIndex].marka = state.setMarka;
        state.Samples[state.adminIndex].fiyat = state.setFiyat;
        if(state.setSelected != ""){
          state.Samples[state.adminIndex].uyum = state.setSelected;
        }
      }
    },
    removeSamples(state,index){
      state.Samples.splice(index,1);
    },
    toplamaSil(state,index){
      state.Toplama[index].model="";
      state.Toplama[index].marka="";
      state.Toplama[index].fiyat=0;
    },
    Eksi(state,item){
      state.sepetToplam -= parseInt(value.fiyat);
    },
    sepetEkle(state,value){
      state.Sepet.push({'model':value.model,'marka':value.marka,'fiyat':value.fiyat,'tur':value.tur,'picture':value.picture});
      state.sepetToplam += parseInt(value.fiyat);
    },
    remove(state,value){
      state.Sepet.splice(value,1);

    },
    removeAll(state){
      state.Sepet.splice(0,state.Sepet.length);
      state.sepetToplam = 0;
    },
    toplamaEkle(state,value){
      if(state.toplamaIndex == 0){
        if(state.Toplama[0].model == "" && state.Toplama[1].model == "" ){
          state.Toplama[state.toplamaIndex].model=value.model;
          state.Toplama[state.toplamaIndex].marka=value.marka;
          state.Toplama[state.toplamaIndex].fiyat=value.fiyat;
        }
        else{
          state.Toplama[state.toplamaIndex].model=value.model;
          state.Toplama[state.toplamaIndex].marka=value.marka;
          state.Toplama[state.toplamaIndex].fiyat=value.fiyat;
          state.Toplama[1].model="";
          state.Toplama[1].marka="";
          state.Toplama[1].fiyat=0;
        }
      }
      else{
        state.Toplama[state.toplamaIndex].model=value.model;
          state.Toplama[state.toplamaIndex].marka=value.marka;
          state.Toplama[state.toplamaIndex].fiyat=value.fiyat;
      }
    }
  }
});

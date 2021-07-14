import Shop from "./pages/Shop.vue"
import Islemci from "./pages/kasa_parcalari/Islemci.vue"
import Anakart from "./pages/kasa_parcalari/Anakart.vue"
import ekranKarti from "./pages/kasa_parcalari/ekranKarti.vue"
import Kasa from "./pages/kasa_parcalari/Kasa.vue"
import Ram from "./pages/kasa_parcalari/Ram.vue"
import sesKarti from "./pages/kasa_parcalari/sesKarti.vue"
import Hdd from "./pages/depolama/hardDisk.vue"
import Harici from "./pages/depolama/Harici.vue"
import Ssd from "./pages/depolama/Ssd.vue"
import Monitor from "./pages/aksesuarlar/Monitor.vue"
import Klavye from "./pages/aksesuarlar/Klavye.vue"
import Mouse from "./pages/aksesuarlar/Mouse.vue"
import Toplama from "./pages/Topla.vue"
import All from "./pages/All.vue"
import Admin from "./pages/admin/Admin.vue"



export const routes = [
  {path:'/', component:Shop, children:[
    {path:'',component: All},
    /*Kasa parçaları*/
    {path:'/kasa-parcalari/islemci', component: Islemci},
    {path:'/kasa-parcalari/islemci', component: Islemci},
    {path:'/kasa-parcalari/anakart', component: Anakart},
    {path:'/kasa-parcalari/ram', component: Ram},
    {path:'/kasa-parcalari/ekran-karti', component: ekranKarti},
    {path:'/kasa-parcalari/kasa', component: Kasa},
    {path:'/kasa-parcalari/ses-karti', component: sesKarti},
    /*Depolama*/
    {path:'/depolama/harddisk', component:Hdd},
    {path:'/depolama/harici', component:Harici},
    {path:'/depolama/ssd', component:Ssd},
    /*Aksesuar*/
    {path:'/aksesuar/monitor',component:Monitor},
    {path:'/aksesuar/klavye',component:Klavye},
    {path:'/aksesuar/mouse',component:Mouse},
    /*Bilgisayar Toplama*/
    {path:'/bilgisayar-toplama',component:Toplama},
  ] },
  /*Admin */
  {path:'/admin',component:Admin},





];

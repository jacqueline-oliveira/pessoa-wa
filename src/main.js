import Vue from 'vue';
import App from './App.vue';
import Pagina from "@/components/Pagina.vue";
import router from "@/router.js";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false

Vue.use(Vuelidate);

Vue.component("Pagina", Pagina);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



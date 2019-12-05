import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import LastArticlesComponent from "./components/LastArticlesComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import PaginaComponent from "./components/PaginaComponent.vue";
import MiComponente from "./components/MiComponente.vue";
import FormularioComponent from "./components/FormularioComponent.vue";
import PeliculasComponent from "./components/PeliculasComponent.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: "/home", component: LastArticlesComponent },
  { path: "/ultimos-articulos", component: LastArticlesComponent },
  { path: "/", component: LastArticlesComponent },
  { path: "/blog", component: BlogComponent },
  { path: "/formulario", component: FormularioComponent },
  { path: "/pagina/:id?", name: "pagina", component: PaginaComponent },
  { path: "/pagina2", component: MiComponente },
  { path: "/peliculas", component: PeliculasComponent },
  { path: "*", component: ErrorComponent }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

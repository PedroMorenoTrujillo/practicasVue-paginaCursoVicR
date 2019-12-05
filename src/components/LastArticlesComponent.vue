<template>
  <div class="general">
    <SliderComponent texto="Bienvenido al Curso de Vue" home="true"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
          <ArticlesComponent :articles="articles"></ArticlesComponent>
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";
import axios from "axios";
import { Global } from "../Global";
export default {
  name: "LastArticlesComponent",
  components: {
    SidebarComponent,
    SliderComponent,
    ArticlesComponent
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      articles: [],
      url: Global.url
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>
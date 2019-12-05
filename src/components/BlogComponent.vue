<template>
  <div class="general">
    <SliderComponent texto="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
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
  name: "BlogComponent",
  components: {
    SidebarComponent,
    SliderComponent,
    ArticlesComponent
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      articles: [],
      url: Global.url
    };
  },
  methods: {
    getArticles() {
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

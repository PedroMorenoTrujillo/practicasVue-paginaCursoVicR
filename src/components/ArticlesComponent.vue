<template>
  <section>
    <div v-if="!articles">Cargando...</div>
    <div id="list" v-if="articles && articles.length >=1">
      <article class="article-item" v-for="article in articles" :key="article._id">
        <div class="image-wrap">
          <img :src="url+'get-image/'+article.image" :alt="article.title" v-if="article.image" />
          <img src="../assets/images/default-image.jpg" :alt="article.title" v-if="!article.image" />
        </div>

        <h2>{{article.title}}</h2>
        <span class="date">{{article.date}}</span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>

<script>
import { Global } from "../Global";
export default {
  name: "ArticlesComponent",
  props: ["articles"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>
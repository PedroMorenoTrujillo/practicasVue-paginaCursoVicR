<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <div class="misDatos" v-if="misDatos">
          <h2>{{misDatos | mayusculasF}}</h2>
        </div>
        <div class="favorita" v-if="favorita">
          <h2>{{favorita.title}}</h2>
        </div>

        <!--Listado articulos-->
        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula.title">
            <PeliculaComponent :pelicula="pelicula" @favorita="haLlegadoLaPeliculaFavorita"></PeliculaComponent>
          </div>
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import PeliculaComponent from "./PeliculaComponent";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "PeliculasComponent",
  components: {
    PeliculaComponent,
    SidebarComponent
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita) {
      this.favorita = favorita;
    }
  },
  filters: {
    mayusculasF(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    peliculasMayuscula() {
      var peliculasMod = this.peliculas;
      for (var i = 0; i < this.peliculas.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos() {
      return this.nombre + " " + this.apellidos;
    }
  },
  data() {
    return {
      nombre: "pb",
      apellidos: "Mn",
      favorita: null,
      peliculas: [
        {
          title: "Spiderman",
          year: 2018,
          image:
            "http://static.posters.cz/image/750/pinturas-sobre-lienzo/spider-man-homecoming-swing-i49082.jpg"
        },
        {
          title: "Vengadores",
          year: 2019,
          image:
            "https://estaticos.elperiodico.com/resources/jpg/7/8/1556123252187.jpg"
        },
        {
          title: "Superman",
          year: 2013,
          image:
            "http://ep00.epimg.net/elpais/imagenes/2016/03/30/tentaciones/1459362733_511127_1459366091_noticia_normal.jpg"
        }
      ]
    };
  }
};
</script>

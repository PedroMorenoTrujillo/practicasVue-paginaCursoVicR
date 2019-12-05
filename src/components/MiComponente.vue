<template>
  <section id="content">
    <h2 class="subheader">Pagina2</h2>
    <hr />
    <h2>Este es mi componente</h2>
    <h2>{{subtitulo}}</h2>
    <hr />
    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    El nombre es
    <strong>{{nombre}}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es
    <strong>{{edad}}</strong>
    <p style="color: red" v-if="edad && edad <=18">ERES MENOR DE EDAD</p>
    <p style="color: green" v-else-if="edad && edad >=65">ERES DE AVANZADA EDAD</p>
    <p style="color: blue" v-else>ERES MAYOR DE EDAD</p>

    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de MiComponente",
      nombre: "",
      edad: 18,
      peliculas: ["Batman", "Superman", "Spiderman", "Paco"]
    };
  }
};
</script>

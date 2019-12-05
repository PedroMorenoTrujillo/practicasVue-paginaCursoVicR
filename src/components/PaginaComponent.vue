<template>
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <button @click="redirigirAlBlog()">Redirigir al blog</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "PaginaComponent",

  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  created() {},
  updated() {},
  destroyed() {},
  data() {
    return {
      id_desde_url: null,
      nombre: "Pedro"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "ESTA ES LA WEB";
    },
    redirigirAlBlog() {
      this.$router.push({ name: "pagina", params: { id: "Redireccion" } });
    }
  }
};
</script>

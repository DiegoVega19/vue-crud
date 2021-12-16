<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Empleados</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              required
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              aria-describedby="helpId"
              placeholder="nombre"
              v-model="empleado.nombre"
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el nombre del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="Correo">Correo</label>
            <input
              required
              type="email"
              name="correo"
              id="correo"
              class="form-control"
              placeholder="Correo"
              aria-describedby="helpId"
              v-model="empleado.correo"
            />
            <small id="helpId" class="text-muted"
              >Escribe el correo del empleado</small
            >
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Modificar</button>

            <router-link :to="{ name: 'Listar' }" class="btn btn-warning"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      empleado: {},
    };
  },
  created: function () {
    console.log("Hello");
    this.consultarEmpleadosById();
  },
  methods: {
    consultarEmpleadosById() {
      fetch("http://empleados-main.test/?consultar=" + this.$route.params.id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.empleado = datosRespuesta[0];
        })
        .catch(console.log);
    },
    actualizarRegistro() {
      console.log(this.empleado);
      var datosEnviar = {
        id: this.$route.params.id,
        nombre: this.empleado.nombre,
        correo: this.empleado.correo,
      };
      fetch("http://empleados-main.test/?actualizar=" + this.$route.params.id, {
        method: "POST",
        body: JSON.stringify(datosEnviar),
      }).then((respuesta) =>
        respuesta.json().then((respuesta) => {
          console.log(respuesta);
          // window.location.href = "listar";
          this.$router.push("/list");
        })
      );
    },
  },
};
</script>
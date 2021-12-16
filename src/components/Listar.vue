<template>
  <div class="container">
    <router-link class="btn btn-success" to="/crear">Crear</router-link>
    <br /><br />
    <div class="card">
      <div class="card-header">Empleados</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
              <td>{{ empleado.id }}</td>
              <td>{{ empleado.nombre }}</td>
              <td>{{ empleado.correo }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link
                    :to="{ name: 'Editar', params: { id: empleado.id } }"
                    class="btn btn-info"
                    >Editar</router-link
                  >
                  <button
                    type="button"
                    class="btn btn-danger"
                    v-on:click="borrarEmpleado(empleado.id)"
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      empleados: [],
    };
  },
  created: function () {
    console.log("Hello");
    this.consultarEmpleados();
  },
  methods: {
    consultarEmpleados() {
      fetch("http://empleados-main.test/")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.empleados = [];
          if (typeof datosRespuesta[0].success === "undefined") {
            this.empleados = datosRespuesta;
          }
        })
        .catch(console.log);
    },
    borrarEmpleado(id) {
      fetch("http://empleados-main.test/?borrar=" + id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.consultarEmpleados();
        })
        .catch(console.log);
    },
  },
};
</script>
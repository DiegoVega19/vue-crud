<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/crear">Crear</router-link>
      <router-link class="nav-link" to="/list">Empleados</router-link>
    </div>
  </nav>
  <br />
  <router-view />
</template>



<script setup>
import { ref } from 'vue';

const alumnos = ref([]);

const agregarAlumno = (alumno) => {
  alumnos.value.push(alumno);
};
</script>

<template>
  <nav class="navbar bg-body-tertiary mb-4">
    <div class="container-fluid justify-content-center gap-2">
      <RouterLink to="/" class="btn btn-outline-primary">Ingreso</RouterLink>
      <RouterLink to="/listado" class="btn btn-outline-secondary">Ver Lista</RouterLink>
    </div>
  </nav>

  <router-view :alumnos="alumnos" @agregar="agregarAlumno" />
</template>

<style scoped></style>

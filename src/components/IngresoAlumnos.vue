<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['agregar']);

const alumno = reactive({
  numControl: 0,
  nombreCompleto: "",
  semestre: 0,
  edad: 0,
  materiasAgregadas: [],
  materiasEspecialidad: [],
  actividadesExtraescolares: []
});

const handleSubmit = () => {
  const alumnoAux = { ...alumno };

  emit('agregar', alumnoAux);
  alert("Alumno agregado");
};
</script>

<template>
  <div class="container">
    <h1>INGRESO ALUMNOS</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <strong for="inputNumControl">Numero de control</strong>
        <input class="form-control" v-model="alumno.numControl" type="number" id="inputNumControl">
      </div>

      <div class="form-group">
        <strong for="inputNombreCompleto">Nombre completo</strong>
        <input class="form-control" v-model="alumno.nombreCompleto" id="inputNombreCompleto">
      </div>

      <div class="form-group">
        <strong for="inputEdad">Edad</strong>
        <input class="form-control" v-model="alumno.edad" type="number" id="inputEdad">
      </div>

      <div class="form-group">
        <strong for="inputSemestre">Semestre</strong>
        <select class="form-control" v-model="alumno.semestre" id="inputSemestre">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="form-group">
        <strong>Materias agregadas</strong>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="POO" v-model="alumno.materiasAgregadas"
            id="inputMateriaPOO">
          <label class="form-check-label" for="inputMateriaPOO">POO</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="BASE DATOS" v-model="alumno.materiasAgregadas"
            id="inputMateriaBD">
          <label class="form-check-label" for="inputMateriaBD">BASE DATOS</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="REDES" v-model="alumno.materiasAgregadas"
            id="inputMateriaRedes">
          <label class="form-check-label" for="inputMateriaRedes">REDES</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="CALCULO" v-model="alumno.materiasAgregadas"
            id="inputMateriaCalculo">
          <label class="form-check-label" for="inputMateriaCalculo">CALCULO</label>
        </div>

      </div>

      <div class="form-group">
        <strong>Materias de especialidad</strong>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="TOPICOS" v-model="alumno.materiasEspecialidad"
            id="inputMateriaTopicos">
          <label class="form-check-label" for="inputMateriaTopicos">TOPICOS</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="WEB" v-model="alumno.materiasEspecialidad"
            id="inputMateriaWEB">
          <label class="form-check-label" for="inputMateriaWEB">WEB</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="IA" v-model="alumno.materiasEspecialidad"
            id="inputMateriaIA">
          <label class="form-check-label" for="inputMateriaIA">IA</label>
        </div>
      </div>

      <div class="form-group">
        <strong for="inputActividadesExtraescolares">Actividades extraescolares</strong>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Servicio" v-model="alumno.actividadesExtraescolares"
            id="inputActividadComun">
          <label class="form-check-label" for="inputActividadComun">Servicio</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Deportes" v-model="alumno.actividadesExtraescolares"
            id="inputActividadDeporte">
          <label class="form-check-label" for="inputActividadDeporte">Deportes</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Recreativo" v-model="alumno.actividadesExtraescolares"
            id="inputActividadRecreativo">
          <label class="form-check-label" for="inputActividadRecreativo">Recreativo</label>
        </div>
      </div>

      <button class="btn btn-success mt-3">Ingresar</button>
    </form>
  </div>

  <!--Tabla alumno-->
  <hr>
  <div class="container mb-5">
    <h1>Previsualización del Alumno</h1>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>Campos</th>
          <th>Información</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Número de Control:</strong></td>
          <td>{{ alumno.numControl }}</td>
        </tr>
        <tr>
          <td><strong>Nombre Completo:</strong></td>
          <td>{{ alumno.nombreCompleto }}</td>
        </tr>
        <tr>
          <td><strong>Semestre:</strong></td>
          <td>{{ alumno.semestre }}</td>
        </tr>
        <tr>
          <td><strong>Edad:</strong></td>
          <td>{{ alumno.edad }}</td>
        </tr>
        <tr>
          <td><strong>Materias Seleccionadas:</strong></td>
          <td>
            <ul>
              <li v-for="materia in alumno.materiasAgregadas" :key="materia">
                {{ materia }}
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>Materias de Especialidad:</strong></td>
          <td>
            <ul>
              <li v-for="materia in alumno.materiasEspecialidad" :key="materia">
                {{ materia }}
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>Actividades Extraescolares:</strong></td>
          <td>
            <ul>
              <li v-for="actividad in alumno.actividadesExtraescolares" :key="actividad">
                {{ actividad }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

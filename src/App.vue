<script setup></script>

<template>

  <div class="container">
    <h1>INGRESO ALUMNOS</h1>

    <form action="">
      <div class="form-group">
        <strong for="inputNumControl">Numero de control</strong>
        <input class="form-control" type="number" id="inputNumControl">
        <small class="form-text text-muted">MSJ EJEM</small>
      </div>

      <div class="form-group">
        <strong for="inputNombreCompleto">Nombre completo</strong>
        <input class="form-control" id="inputNombreCompleto">
        <small class="form-text text-muted">MSJ EJEM</small>
      </div>

      <div class="form-group">
        <strong for="inputEdad">Edad</strong>
        <input class="form-control" type="number" id="inputEdad">
        <small class="form-text text-muted">MSJ EJEM</small>
      </div>

      <div class="form-group">
        <strong for="inputSemestre">Semestre</strong>
        <select class="form-control" id="inputSemestre">
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
          <input class="form-check-input" type="checkbox" id="inputMateriaPOO">
          <label class="form-check-label" for="inputMateriaPOO">POO</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputMateriaBD">
          <label class="form-check-label" for="inputMateriaBD">BASE DATOS</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputMateriaRedes">
          <label class="form-check-label" for="inputMateriaRedes">REDES</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputMateriaCalculo">
          <label class="form-check-label" for="inputMateriaCalculo">CALCULO</label>
        </div>

      </div>

      <div class="form-group">
        <strong>Materias de especialidad</strong>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputMateriaTopicos">
          <label class="form-check-label" for="inputMateriaTopicos">TOPICOS</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputMateriaWEB">
          <label class="form-check-label" for="inputMateriaWEB">WEB</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputMateriaIA">
          <label class="form-check-label" for="inputMateriaIA">IA</label>
        </div>
      </div>

      <div class="form-group">
        <strong for="inputActividadesExtraescolares">Actividades extraescolares</strong>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputActividadComun">
          <label class="form-check-label" for="inputActividadComun">Servicio</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputActividadDeporte">
          <label class="form-check-label" for="inputActividadDeporte">Deportes</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="inputActividadRecreativo">
          <label class="form-check-label" for="inputActividadRecreativo">Recreativo</label>
        </div>
      </div>

      <button class="btn btn-success">Ingresar</button>
    </form>
  </div>



</template>

<style scoped></style>

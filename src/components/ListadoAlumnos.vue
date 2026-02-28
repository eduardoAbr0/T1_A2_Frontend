<script setup>
const props = defineProps({
    alumnos: Array
});
</script>

<template>
    <div class="card">
        <h5>Alumnos Registrados</h5>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>Control</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Semestre</th>
                            <th>Materias</th>
                            <th>Especialidad</th>
                            <th>Extraescolares</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="alumnos.length === 0">
                            <td class="text-center">No hay alumnos registrados.</td>
                        </tr>
                        <tr v-for="(al, index) in alumnos" :key="index">
                            <td><span class="fw-bold">{{ al.numControl }}</span></td>
                            <td>{{ al.nombreCompleto }}</td>
                            <td>{{ al.edad }} años</td>
                            <td class="text-center">{{ al.semestre }}</td>
                            <td>
                                <span v-for="m in al.materiasAgregadas" :key="m">
                                    | {{ m }} |
                                </span>
                            </td>
                            <td>
                                <span v-for="e in al.materiasEspecialidad" :key="e">
                                    | {{ e }} |
                                </span>
                            </td>
                            <td>
                                <span v-for="act in al.actividadesExtraescolares" :key="act">
                                    | {{ act }} |
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

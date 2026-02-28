<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

    defineProps({
        
    })
</script>

<template>
    <DataTable :value="alumno" tableStyle="min-width: 50rem" paginator :rows="5">
        <Column field="numControl" header="Número de Control"></Column>
        <Column field="nombreCompleto" header="Nombre"></Column>
        <Column field="semestre" header="Semestre"></Column>
        <Column field="edad" header="Edad"></Column>
    </DataTable>
</template>

<style></style>
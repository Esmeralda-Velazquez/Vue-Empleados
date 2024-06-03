<template>
    <div>
      <h1>Tareas traidas desde el backend</h1>
      <div class="card-container">
        <div v-for="tarea in tareas" :key="tarea.id" class="card">
          <h2>{{ tarea.title }}</h2>
          <p><strong>Descripción:</strong> {{ tarea.description }}</p>
          <p><strong>Completada:</strong> {{ tarea.completed ? 'Sí' : 'No' }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
  width: 300px;
}
</style>
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BackInfo',
    data() {
      return {
        tareas: []
      };
    },
    created() {
      this.fetchTareas();
    },
    methods: {
      fetchTareas() {
        axios.get('http://127.0.0.1:8000/api/todos/')
          .then(response => {
            this.tareas = response.data;
            console.log('this.tareas:', this.tareas);
          })
          .catch(error => {
            console.error('Error al obtener las tareas:', error);
          });
      }
    }
  };
  </script>
  
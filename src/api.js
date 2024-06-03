import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',  
  withCredentials: false,  
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getTareas() {
    return apiClient.get('/tareas/');
  },
  getTarea(id) {
    return apiClient.get(`/tareas/${id}/`);
  },
  postTarea(tarea) {
    return apiClient.post('/tareas/', tarea);
  },
  updateTarea(id, tarea) {
    return apiClient.put(`/tareas/${id}/`, tarea);
  },
  deleteTarea(id) {
    return apiClient.delete(`/tareas/${id}/`);
  }
};

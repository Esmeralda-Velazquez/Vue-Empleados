<template>
  <div id="project-table">
    <h2>Employee Projects</h2>
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Employee Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="index">
          <td>{{ project.name }}</td>
          <td>{{ project.employee }}</td>
          <td :class="getStatusClass(project.status)">{{ project.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProjectTable',
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    getStatusClass(status) {
      switch(status) {
        case 'In Progress':
          return 'in-progress';
        case 'Completed':
          return 'completed';
        case 'Pending':
          return 'pending';
        default:
          return '';
      }
    }
  }
}
</script>

<style scoped>
.in-progress {
  color: #FFD700; /* Amarillo */
}

.completed {
  color: #008000; /* Verde */
}

.pending {
  color: #b65e0b; /* Naranja */
}
</style>

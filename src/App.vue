<template>
   <link rel="stylesheet" href="https://unpkg.com/primitive-ui/dist/css/main.css" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-table 
      :employees="employees"
      @edit="editEmployee"
      @delete="deleteEmployee"
      @add="addEmployee"
    />
    <div>
      <h2>Add New Employee</h2>
      <input type="text" placeholder="Name" v-model="newEmployee.name" />
      <input type="text" placeholder="Email" v-model="newEmployee.email" />
      <button @click="addEmployee">Add Employee</button>
    </div>
    
    <project-table :projects="projects" />
  </div>
</template>

<script>
import EmployeeTable from '@/components/table.vue';
import ProjectTable from '@/components/projects.vue';

export default {
  name: 'HelloWorld',
  components:{
    EmployeeTable,
    ProjectTable 
  },
  data() {
    return {
      employees: [ 
        { name: 'Richard Hendricks', email: 'richard@piedpiper.com' },
        { name: 'Bertram Gilfoyle', email: 'gilfoyle@piedpiper.com' },
        { name: 'Dinesh Chugtai', email: 'dinesh@piedpiper.com' }
      ],
      newEmployee: {
        name: '',
        email: ''
      },
      projects: [ 
        { name: 'Project 1', employee: 'Richard Hendricks', status: 'In Progress' },
        { name: 'Project 2', employee: 'Bertram Gilfoyle', status: 'Completed' },
        { name: 'Project 3', employee: 'Dinesh Chugtai', status: 'Pending' }
      ]
    };
  },
  methods: {
    addEmployee() {
      if (this.newEmployee.name && this.newEmployee.email) {
        this.employees.push({
          name: this.newEmployee.name,
          email: this.newEmployee.email
        });
        this.newEmployee.name = '';
        this.newEmployee.email = '';
      } else {
        alert('Please enter both name and email for the new employee.');
      }
    },
    editEmployee(rowData) {
      console.log('Editar empleado:', rowData);
    },
    deleteEmployee(index) {
      this.employees.splice(index, 1);
    }
  }
}
</script>

<style></style>

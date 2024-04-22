<template>
    <div id="employee-table">
      <table>
        <thead>
          <tr>
            <th>Employee name</th>
            <th>Employee email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="index">
            <td>
              <input type="text" v-model="employee.name" :disabled="employee.editing" />
            </td>
            <td>
              <input type="text" v-model="employee.email" :disabled="employee.editing" />
            </td>
            <td>
              <button @click="toggleEdit(employee)" class="edit-button">
                <i class="fas fa-edit"></i> Edit
              </button>
              <button @click="deleteEmployee(index)" class="delete-button">
                <i class="fas fa-trash-alt"></i> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmployeeTable',
    props: {
      employees: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        newEmployee: {
          name: '',
          email: ''
        }
      };
    },
    methods: {
      toggleEdit(employee) {
        employee.editing = !employee.editing;
      },
      deleteEmployee(index) {
        this.$emit('delete', index); 
      },
      addEmployee() {
        if (this.newEmployee.name && this.newEmployee.email) {
          this.$emit('add', {
            name: this.newEmployee.name,
            email: this.newEmployee.email
          });
          this.newEmployee.name = '';
          this.newEmployee.email = '';
        } else {
          alert('Please enter both name and email for the new employee.');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .edit-button {
    background-color: #001F3F;
    color: white;
  }
  
  .delete-button {
    background-color: #941811;
    color: white;
  }
  </style>
  
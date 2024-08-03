<template>
    <el-container>
      <el-header>
        <el-form :model="newRow" @submit.prevent="addRow" label-width="100px" inline>
          <el-form-item label="Name">
            <el-input v-model="newRow.name" placeholder="Name" />
          </el-form-item>
          <el-form-item label="Age">
            <el-input v-model="newRow.age" type="number" placeholder="Age" />
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="newRow.email" placeholder="Email" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addRow">Add Row</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <el-table :data="rows" style="width: 100%">
              <el-table-column prop="id" label="ID" width="180" />
              <el-table-column prop="name" label="Name" />
              <el-table-column prop="age" label="Age" />
              <el-table-column prop="email" label="Email" />
            </el-table>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import axios from 'axios'
  import 'element-plus/dist/index.css'
  import { ElMessage } from 'element-plus'
  
  const newRow = reactive({
    name: '',
    age: null,
    email: ''
  })
  
  const rows = ref([])
  
  const addRow = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:4523/m1/4296710-3939141-default/assets/create', newRow)
      if (response.data.success) {
        rows.value.push(response.data.data)
        newRow.name = ''
        newRow.age = null
        newRow.email = ''
        ElMessage.success('Row added successfully!')
      } else {
        ElMessage.error('Failed to add row')
      }
    } catch (error) {
      ElMessage.error('Error adding row: ' + error.message)
      console.error('Error adding row:', error)
    }
  }
  </script>
  
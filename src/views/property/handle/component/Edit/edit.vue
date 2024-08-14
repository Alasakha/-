<template>
    <el-button plain @click="dialogTableVisible = true">
      Open a Table nested Dialog
    </el-button>
  
    <el-button plain @click="dialogFormVisible = true">
      Open a Form nested Dialog
    </el-button>
  
    <el-dialog v-model="isVisible" title="Shipping address" width="800" @close="handleClose">
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </el-dialog>
  
    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
import { reactive, ref,toRef} from 'vue'
import { watch } from 'vue';
import { defineProps, defineEmits } from 'vue';
  
// 定义 props 接收父组件传递的对话框显示状态
const props = defineProps({
  visible: Boolean
});
const emit = defineEmits(['update:visible']);

// 内部状态，初始为 props 传递的值
const isVisible = ref(props.visible);

// 监听 props 变化以同步内部状态
watch(() => props.visible, (newValue) => {
  isVisible.value = newValue;
});

// 处理对话框关闭
const handleClose = () => {
  emit('update:visible', false); // 通知父组件对话框已关闭
  isVisible.value = false; // 更新内部状态
};



  const dialogTableVisible = ref(false)
  const dialogFormVisible = ref(false)
  const formLabelWidth = '140px'
  
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  const gridData = [
    {
      date: '2016-05-02',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
      date: '2016-05-04',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
      date: '2016-05-01',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
      date: '2016-05-03',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
  ]
  </script>
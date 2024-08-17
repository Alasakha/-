<template>
    <el-dialog v-model="DeletedialogVisible" title="删除" width="500" @close="handleClose">
      <div class="delete_dialog_text">是否确认删除<span :style="{color: textColor}">{{selectedRow.assetcode}}</span>数据?</div>

      <div class="footer">
        <el-button type="primary">确定</el-button>
        <el-button type="primary" plain @click="handleClose">取消</el-button>
      </div>

    </el-dialog>
  </template>
  
  <script lang="ts" setup>
import { reactive, ref,toRef} from 'vue'
import { watch } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { useDialogStore } from '/@/stores/asset';
 import {computed} from 'vue'

 const  dialogStore = useDialogStore()
 const  selectedRow = computed(() => dialogStore.selectedRow);
 const  textColor = ref('blue')
 

  
// 定义 props 接收父组件传递的对话框显示状态
const props = defineProps({
  visible: Boolean
});
const emit = defineEmits(['update:visible']);

// 内部状态，初始为 props 传递的值
const DeletedialogVisible = ref(props.visible);

// 监听 props 变化以同步内部状态
watch(() => props.visible, (newValue) => {
    DeletedialogVisible.value = newValue;
});

// 处理对话框关闭
const handleClose = () => {
  emit('update:visible', false); // 通知父组件对话框已关闭
 DeletedialogVisible.value = false; // 更新内部状态
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
  

  </script>

  <style scoped lang="scss">
.delete_dialog_text{
  font-size: 15px;
  align-items: center;
  height:100px;
  margin-top: 30px;
  font-size: 20px;
  font-family: '微软雅黑';
}
.footer{
  height: 50px;
  display: flex;
  align-items: center;
}

</style>
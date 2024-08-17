<template>
    <el-dialog v-model="isVisible" title="编辑" width="1300" @close="handleClose">
      <div class="edit_title_box">
        <span class="edit_title_content">
          采购信息
        </span>
      </div>
  
        <div class="edit_content_box">
              <div class="block">
                  <span class="title">申请编号</span>
                  <div class="input_content">
                      <el-input v-model="ApplicationNum" disabled placeholder="Please input" />
                  </div>
              </div>

              <div class="block">
                    <span class="title">申请时间</span>
                    <div class="input_content">
                        <el-date-picker
                          v-model="value2"
                          type="date"
                          placeholder="Pick a day"
                          :disabled-date="disabledDate"
                          :shortcuts="shortcuts"
                          :size="size" />
                    </div>
              </div>

              <div class="block">
                  <span class="title">申请编号</span>
                  <div class="input_content">
                      <el-input v-model="ApplicationNum" disabled placeholder="Please input" />
                  </div>
                </div>
                


              <div class="block">
                <span class="title">所属公司</span>
                <div class="input_content">
                    <el-select v-model="value" class="m-2" placeholder="Select">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />  
                    </el-select>
                </div>     
              </div>

              <div class="block">
                <span class="title">到货时间</span>
                <div class="input_content">
                    <el-select v-model="value" class="m-2" placeholder="Select">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />  
                    </el-select>
                </div>     
              </div>

              <div class="block">
                    <span class="title">供应商</span>
                    <div class="input_content">
                        <el-date-picker
                          v-model="value2"
                          type="date"
                          placeholder="Pick a day"
                          :disabled-date="disabledDate"
                          :shortcuts="shortcuts"
                          :size="size" />
                    </div>
              </div>

              <div class="block">
                <span class="title">收货信息属部门</span>
                <div class="input_content">
                    <el-select v-model="value" class="m-2" placeholder="Select">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />  
                    </el-select>
                </div>     
              </div>
          
              <div class="block">
                  <span class="title">申请编号</span>
                  <div class="input_content">
                      <el-input v-model="ApplicationNum" disabled placeholder="Please input" />
                  </div>
              </div>

              <div class="block" style="width: 1000px;">
                  <span class="title">申请编号</span>
                  <el-input
                    v-model="textarea"
                    :rows="2"
                    type="textarea"
                    placeholder="Please input"
                  />
              </div>
          </div>

        <div class="footer_box">
            <div class="footer_button_box">
                <el-button type="primary">提交审批</el-button>
                <el-button type="primary">暂存</el-button>
                <el-button type="primary" plain>取消</el-button>
            </div>
        </div>
      

    </el-dialog>
  </template>
  

 








  <script lang="ts" setup>
import { reactive, ref,toRef} from 'vue'
import { watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

//申请编号
const ApplicationNum = ref('')

  
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
  

  </script>

<style scoped lang="scss">

 .edit_title_box{
  width: 100%;
  margin-right: 100px;
  display: flex;
  align-items: center;
  font-family: '黑体';
  margin-bottom: 40px;
  font-size: 20px;
 } 

.edit_title_content{
  text-align: center;
  font-size: 30x;
  display: flex;
  margin-left: 20px;
}
.edit_content_box{
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
}
.block{
  justify-content: start;
  display: flex;
  align-items:center;
  width: 350px;
  margin-bottom: 20px;
  margin-left:30px;
  .title{
    width:120px;
  }
  .input_content{
    width: 200px;
  }
}

.footer_box{
  display: flex;
  justify-content: center;
  height:60px;
  .footer_button_box{
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
}

</style>




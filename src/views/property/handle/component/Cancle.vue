<script setup>

import {  ref, watch  } from 'vue';


 const data = ref({
 
})

const add = () => {
    console.log(data.value)
}

const reset = () => {


    console.log(data.value)
}

// 使用对话框装载form表单
const dialog = ref(false)


const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['closecancle'])
const closeDialog = () => {
    emits('closecancle', false)
}


watch(() => props.isShow, (val) => {
    console.log(val)
    dialog.value = val
}, { immediate: true })


</script>

<template>


  <!-- 采用对话框，允许拖拽 -->
  <el-dialog v-model="dialog" width="1200" title="清理报废" draggable @close="closeDialog"
  >
  <div class="basic_information_cancle">
        <div class="block">
        <span class="demonstration">退库单号</span>
         <el-input style="height:40px ;width: 320px;" placeholder="Please input" />
          </div>

          <div class="block">
        <span class="demonstration">领用日期</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :size="size"
        />
         </div>

          <div class="block">
        <span class="demonstration">领用人</span>
         <el-input style="height:40px ;width: 320px;" placeholder="Please input" />
          </div>
         </div>
     <!-- 退库信息 -->
    <div class="basic_information_title"> 退库信息</div>

    <!-- 填写部分 -->
    <div class="basic_information">
        <div class="block">
         <span class="demonstration">领用后使用公司</span>
         <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>
        </div>

        <div class="block">
         <span class="demonstration">领用后使用公司</span>
         <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>
        </div>

        
     <!-- 退库说明 -->
     <div class="block">
          <span class="demonstration"
          style="margin-left: 30px;">退库说明</span>
          <el-input 
            v-model="textarea"
            :rows="3"
            type="textarea"
            placeholder="Please input"/>
          </div>
         
    </div>

               

    
            <!-- 领用明细-资产列表 -->
             <div class="AccessDetails_ListofAssets">
                <div class="basic_information_title"> 退库明细-资产列表</div>
                    
                   <!-- 表格 -->
                   <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                     >
                    <el-table-column prop="date" label="序号" width="70" />
                    <el-table-column prop="pic" label="照片" width="70" />
                    <el-table-column prop="AssCode" label="资产编码" width="120" />
                    <el-table-column prop="assetname" label="所属公司" width="150" />
                    <el-table-column prop="assetclass" label="当前所在公司" width="150"  />
                    <el-table-column prop="assetclass" label="当前所在部门" width="150" />
                    <el-table-column prop="assetclass" label="当前使用人" width="130" />
                    <el-table-column prop="assetclass" label="存放地点" width="120" />
                    </el-table>

             </div>



             <!-- 底部添加框和重置框 -->
        <el-form-item>
            <el-button type="primary" @click="add">添加</el-button>
            <el-button @click="reset">重置</el-button>
        </el-form-item>
   
  </el-dialog>
</template>

<style lang="scss">
.cancle_box1{
    height: 200px;
    background-color: aqua;
}


  .basic_information_title::before {
   content:"..";
   background-color: rgb(54, 86, 230);
}



.block{
    width: 500px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    .demonstration{
        margin-right:10px ;
    }
    span{
        width: 120px;
    }
}
    .basic_information{
        display: flex;
        justify-content: space-between;
        width:1100px;
        height: 140px;
        flex-wrap: wrap;
        align-items: center;
        align-content: start;
    }
    .basic_information_cancle{
        display: flex;
        justify-content: space-between;
        width:1100px;
        height: 120px;
        flex-wrap: wrap;
        align-items: center;
        align-content: start;
    }

    .el-dialog_header{
       background-color: antiquewhite
    }

    .AccessDetails_ListofAssets{
        height: 300px ;
        margin-top: 20px;
    }
</style>
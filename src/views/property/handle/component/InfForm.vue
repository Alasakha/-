<script setup>

import { onMounted, ref, watch  } from 'vue';


 const data = ref({
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: ''
})

const add = () => {
    console.log(data.value)
}

const reset = () => {
    data.value = {
        name: '',
        radio: '',
        checkbox: [],
        date: '',
        select: '',
        multipleSelect: [],
        textarea: ''
    }

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

const emits = defineEmits(['closein'])
const closeDialog = () => {
    emits('closein', false)
}


watch(() => props.isShow, (val) => {
    console.log(val)
    dialog.value = val
}, { immediate: true })


</script>

<template>


  <!-- 采用对话框，允许拖拽 -->
  <el-dialog v-model="dialog" width="1200" title="新建领用单" draggable @close="closeDialog"
  >
    <div class="basic_information_title">基本信息</div>
    <!-- 填写部分 -->
     <!-- 领用人 -->
    <div class="basic_information_in">
        <div class="block">
        <span class="demonstration">领用人</span>
         <el-input style="height:40px ;width: 320px;" placeholder="Please input" />
          </div>
        <!-- 日期 -->
        <div class="block">
        <span class="demonstration">领用日期</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :size="size"
        />
         </div>
         <!-- 领用后使用公司 -->
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
        <!-- 领用后使用部门 -->
        <div class="block">
            <span class="demonstration">领用后使用部门</span>
                <el-select v-model="value" class="m-2" placeholder="Select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            />
                </el-select>
         </div>  
         <!-- 领用后区域 -->
         <div class="block">
                <span class="demonstration">领用后区域</span>
                <el-select v-model="value" class="m-2" placeholder="Select">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
        </div>
        <!-- 领用后存放地点 -->
        <div class="block">
        <span class="demonstration">领用后存放地点</span>
         <el-input style="height:40px ;width: 400px;" placeholder="Please input" />
          </div>
          <!-- 领用处理人 -->
          <div class="block">
        <span class="demonstration">领用处理人</span>
         <el-input style="height:40px ;width: 400px;" placeholder="Please input" />
          </div>
         
    </div>

     <!-- 说明 -->
     <!-- <div class="block">
          <span class="demonstration"
          style="margin-left: 25px;">说明</span>
          <el-input 
            v-model="textarea"
            :rows="2"
            type="textarea"
            placeholder="Please input"/>
          </div> -->
               

    
            <!-- 领用明细-资产列表 -->
             <div class="AccessDetails_ListofAssets">
                <div class="basic_information_title">领用明细-资产列表</div>
                    
                   <!-- 表格 -->
                   <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                     >
                    <el-table-column prop="date" label="序号" width="70" />
                    <el-table-column prop="pic" label="照片" width="70" />
                    <el-table-column prop="AssCode" label="资产编码" width="120" />
                    <el-table-column prop="assetname" label="资产名称" width="120" />
                    <el-table-column prop="assetclass" label="资产类别" />
                    <el-table-column prop="assetclass" label="规格型号" />
                    <el-table-column prop="assetclass" label="SN号" />
                    <el-table-column prop="assetclass" label="所属公司" />
                    <el-table-column prop="assetclass" label="当前所在公司" />
                    <el-table-column prop="assetclass" label="存放地点" />
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
  .basic_information_title::before {
   content:". ";
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
    .basic_information_in{
        display: flex;
        justify-content: space-between;
        width:1100px;
        height: 240px;
        flex-wrap: wrap;
        align-items: center;
        align-content: start;
        // #el-option{
        //     width: 200px;
        // }
    }

    .el-dialog_header{
       background-color: antiquewhite
    }

    .AccessDetails_ListofAssets{
        height: 300px ;
        margin-top: 40px;
    }
</style>
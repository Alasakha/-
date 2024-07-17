<script setup>

import { onMounted, ref, watch  } from 'vue';


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

const emits = defineEmits(['closeallot'])
const closeDialog = () => {
    emits('closeallot', false)
}


watch(() => props.isShow, (val) => {
    console.log(val)
    dialog.value = val
}, { immediate: true })

//新建按钮

</script>

<template>


  <!-- 采用对话框，允许拖拽 -->
  <el-dialog v-model="dialog" width="1200" title="新建调拨单" draggable @close="closeDialog"
  >

     <!-- 退库信息 -->
    <div class="basic_information_title"> 基本信息</div>

    <!-- 填写部分 -->
    <div class="basic_information_borrow">
        <!-- 调出公司 -->
        <div class="block">
         <span class="demonstration">调出公司</span>
         <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
         </el-select>
        </div>

        <!-- 调入公司 -->
        <div class="block">
         <span class="demonstration">调入公司</span>
         <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :size="size"
         />
        </div>
        
         <!-- 借出处理人 -->
         <div class="block">
            <span class="demonstration">借出处理人</span>
            <el-input v-model="input" disabled placeholder="Please input" />
         </div>
         
        
         <!-- 备注  -->
        <div class="block_text">
          <span class="demonstration"
            style="margin-left: 25px;">备注</span>
          <el-input 
            v-model="textarea"
            :rows="4"
            type="textarea"
            placeholder="Please input"/>
        </div>
                     
    </div>
            <!-- 领用明细-资产列表 -->
             <div class="AccessDetails_ListofAssets">
                <div class="basic_information_title"> 借用明细-资产列表</div>
                    <!-- 借用人 -->
                   

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
                    <el-table-column prop="assetclass" label="资产类别" width="120"  />
                    <el-table-column prop="assetclass" label="规格型号" width="120" />
                    <el-table-column prop="assetclass" label="SN号" width="130" />
                    <el-table-column prop="assetclass" label="金额" width="120" />
                    <el-table-column prop="assetclass" label="所属公司" width="120" />
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


.block_text{
    width: 900px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    .demonstration{
       width: 90px;
    }
}
.el-textarea_inner{
        margin-left: 50px;
    }
.block{
    width: 500px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    .demonstration{
        width: 100px;
    }
    span{
        width: 160px;
    }
}
    .basic_information_borrow{
        display: flex;
        justify-content: space-between;
        width:1100px;
        height: 240px;
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
    .el-select .el-input .el-select__caret.el-icon{
        margin-left: 100px;
    }

    .el-input__prefix-inner>:first-child, .el-input__prefix-inner>:first-child.el-input__icon{
        margin-left: 330px;
    }
    .el-select {
        width: 500px;
    }

</style>
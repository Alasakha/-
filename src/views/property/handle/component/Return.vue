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

const emits = defineEmits(['closereturn'])
const closeDialog = () => {
    emits('closereturn', false)
}


watch(() => props.isShow, (val) => {
    console.log(val)
    dialog.value = val
}, { immediate: true })
</script>

<template>
  <!-- 采用对话框，允许拖拽 -->
  <el-dialog v-model="dialog" width="1200" title="归还" draggable @close="closeDialog">
    <div class="basic_information_title"> 基本内容</div>
    <!-- 填写部分 -->
    <div class="basic_information_phyinf">
        <!-- 借用单号 -->
        <div class="block">
            <span class="demonstration">借用单号</span>
            <el-input v-model="input" disabled placeholder="10010010101" />
         </div>

         <!-- 借用时间 -->
         <div class="block">
            <span class="demonstration">借用时间</span>
            <el-input v-model="input" disabled placeholder="10010010101" />
         </div>

         <!-- 预计归还时间 -->
         <div class="block">
            <span class="demonstration">预计归还时间</span>
            <el-input v-model="input" disabled placeholder="10010010101" />
         </div>
         <!-- 借出处理人 -->
         <div class="block">
            <span class="demonstration">借出处理人</span>
            <el-input v-model="input" disabled placeholder="李白" />
         </div>        
      </div>
      <!-- 说明 -->
      <div class="block">
            <span class="demonstration">说明</span>
            <el-input v-model="input" disabled placeholder="暂无" />
         </div>        


                    <!-- 领用明细-资产列表 -->
                <div class="basic_information_title"> 资产列表</div>
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
                    <el-table-column prop="assetclass" label="所属公司" width="120"  />
                    <el-table-column prop="assetclass" label="当前所在公司" width="120" />
                    <el-table-column prop="assetclass" label="当前所在部门" width="130" />
                    <el-table-column prop="assetclass" label="当前使用人" width="120" />
                    <el-table-column prop="assetclass" label="存放地点" width="120" />                </el-table>


        <div class="basic_information_return">
            <!-- 实际归还时间 -->
            <div class="block">
            <span class="demonstration">实际归还时间</span>
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Pick a day"
                :size="size"
            />
            </div>
            <!-- 归还处理人 -->
            <div class="block">
            <span class="demonstration">归还处理人</span>
            <el-input v-model="input" disabled placeholder="李寻欢" />
         </div>
    

        </div>
    </el-dialog>   
</template>

<style lang="scss">


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
.basic_information_return{
 display: flex;
 justify-content: space-between;
 width:1100px;
 height: 140px;
 flex-wrap: wrap;
 align-items: center;
 align-content: start;
 }

    .el-dialog_header{
       background-color: antiquewhite
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
    .change_content_box{
        display: flex;
        justify-content: space-between;
        width:1100px;
        height: 440px;
        flex-wrap: wrap;
        align-items: center;
        align-content: start;
    }
</style>
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

const emits = defineEmits(['closemantenance'])
const closeDialog = () => {
    emits('closemantenance', false)
}


watch(() => props.isShow, (val) => {
    console.log(val)
    dialog.value = val
}, { immediate: true })


</script>

<template>


  <!-- 采用对话框，允许拖拽 -->
  <el-dialog v-model="dialog" width="1200" title="维保信息登录记录" draggable @close="closeDialog">

    <!-- 填写部分 -->
    <div class="basic_information_phyinf">
        <!-- 变更单号 -->
        <div class="block">
            <span class="demonstration">借出处理人</span>
            <el-input v-model="input" disabled placeholder="Please input" />
         </div>

         <!-- 业务日期 -->
        <div class="block">
        <span class="demonstration">业务日期</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :size="size"
        />
         </div>

         <!-- 业务所属公司 -->
        <div class="block">
         <span class="demonstration">业务所属公司</span>
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

    <div class="basic_information_title"> 变更内容</div>
    <div class="change_content_box_2">
        <!-- 供应商 -->
        <div class="block">
            <span class="demonstration">供应商</span>
            <el-input v-model="input" disabled placeholder="Please input" />
         </div>
        <!-- 联系人 -->
        <div class="block">
            <span class="demonstration">联系人</span>
            <el-input v-model="input" disabled placeholder="Please input" />
         </div>
        <!-- 联系方式 -->
        <div class="block">
            <span class="demonstration">联系方式</span>
            <el-input v-model="input" disabled placeholder="Please input" />
         </div>
        <!-- 负责人 -->
        <div class="block">
         <span class="demonstration">负责人</span>
         <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
         </el-select>
        </div>
        <!-- 维保到期 -->
        <div class="block">
        <span class="demonstration">维保到期</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :size="size"
        />
         </div>
    </div>
    
            <!-- 说明 -->
            <div class="block">
             <span class="demonstration">维保说明</span>
             <el-input 
             v-model="textarea"
             :rows="2"
             type="textarea"
             placeholder="Please input"/>
            </div>

            <!-- 领用明细-资产列表 -->
             <div class="AccessDetails_ListofAssets">
                <div class="basic_information_title"> 实物信息变更-资产列表</div>
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
                    <el-table-column prop="assetclass" label="规格型号" width="120"  />
                    <el-table-column prop="assetclass" label="SN号" width="120" />
                    <el-table-column prop="assetclass" label="供应商" width="130" />
                    <el-table-column prop="assetclass" label="联系人" width="120" />
                    <el-table-column prop="assetclass" label="负责人" width="120" /> 
                    <el-table-column prop="assetclass" label="维保到期时间" width="120" /> 
                    <el-table-column prop="assetclass" label="维保说明" width="120" /> 
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
.basic_information_phyinf{
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
    
    .change_content_box_2{
        display: flex;
        justify-content: space-between;
        width:1100px;
        height: 180px;
        flex-wrap: wrap;
        align-items: center;
        align-content: start;
    }
</style>
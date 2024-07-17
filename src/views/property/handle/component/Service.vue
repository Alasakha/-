<script setup lang="ts">

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

const emits = defineEmits(['closeservice'])
const closeDialog = () => {
    emits('closeservice', false)
}


watch(() => props.isShow, (val) => {
    console.log(val)
    dialog.value = val
}, { immediate: true })



import type { ImageProps } from 'element-plus'

const fits = [
  'fill',
] as ImageProps['fit'][]
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>


  <!-- 采用对话框，允许拖拽 -->
  <el-dialog v-model="dialog" width="1200" title="维修信息变动" draggable @close="closeDialog">

    <!-- 填写部分 -->
    <div class="basic_information_phyinf">
        <!-- 维修编号 -->
        <div class="block">
            <span class="demonstration">维修编号</span>
            <el-input v-model="input" disabled placeholder="10010010101" />
         </div>

         <!-- 业务日期 -->
        <div class="block">
        <span class="demonstration">业务日期</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :size="size"/>
         </div>

         <!-- 处理人 -->
         <div class="block">
            <span class="demonstration">处理人</span>
            <el-input v-model="input" disabled placeholder="10010010101" />
         </div>
      </div>

    <div class="basic_information_title"> 变更内容</div>

    <div class="change_content_box_2">
        <!-- 维修花费 -->
        <div class="block">
        <span class="demonstration">维修花费</span>
         <el-input style="height:40px ;width: 400px;" placeholder="Please input" />
          </div>
         
          <!-- 状态 -->
          <div class="block">
         <span class="demonstration">状态</span>
         <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
         </el-select>
        </div>
             <!-- 维修内容 -->
            <div class="block">
            <span class="demonstration">维修内容</span>
            <el-input style="height:40px ;width: 400px;" placeholder="Please input" />
            </div>
        </div>
            <!-- 备注 -->
            <div class="block" style="width: 1100px;">
             <span class="demonstration">备注</span>
             <el-input 
             v-model="textarea"
             :rows="3"
             type="textarea"
             placeholder="Please input"/>
            </div>
            <!-- 图片 -->


            <!-- 领用明细-资产列表 -->
             <div class="AccessDetails_ListofAssets">
                <div class="basic_information_title"> 维修信息登记-资产列表</div>
                    <!-- 借用人 -->
                    <div class="demo-image">
                     <div v-for="fit in fits" :key="fit" class="block">
                         <span class="demonstration">图片</span>
                          <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
                      </div>
                      </div>

                   <!-- 表格 -->
                   <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                     >
                    <el-table-column prop="date" label="序号" width="70" />
                    <el-table-column prop="pic" label="照片" width="70" />
                    <el-table-column prop="AssCode" label="资产编码" width="120" />
                    <el-table-column prop="assetname" label="所属公司" width="120" />
                    <el-table-column prop="assetclass" label="当前所在公司" width="150"  />
                    <el-table-column prop="assetclass" label="当前所在部门" width="150" />
                    <el-table-column prop="assetclass" label="当前使用人" width="150" />
                    <el-table-column prop="assetclass" label="存放地点" width="170" />                    </el-table>

             </div>

             <!-- 底部添加框和重置框 -->
        <el-form-item>
            <el-button type="primary" @click="add">添加</el-button>
            <el-button @click="reset">重置</el-button>
        </el-form-item>
   
  </el-dialog>
</template>

<style scoped lang="scss">

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
        height: 120px;
        flex-wrap: wrap;
        align-items: center;
        align-content: start;
    }
</style>.
<script setup lang="ts">
import { log } from 'console';
import {ref , watch} from 'vue'


const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false
    }
})
const dialog = ref(false)

watch(() => props.dialogVisible, (newValue) =>{
    dialog.value= newValue
    console.log(newValue);
    
},{immediate:true})

const emits = defineEmits(['closecreate'])
const closeDialog = () => {
    emits('closecreate', false)
}


</script>

<template>
    <el-dialog v-model="dialog" title="新建资产" width="70%" draggable @close="closeDialog">
        <div class="basic_information_title">  基本信息</div>
            <div class="information_add_box">
                <!-- 资产类别 -->
                <div class="block">
                    <div class="block_title">
                        <span>资产类别</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
                <!-- 标准型号 -->
                <div class="block">
                    <div class="block_title">
                        <span>标准型号</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>

                <div class="block">
                    <div class="block_title"><span>资产编码</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>
            </div>
            




        <!-- 底部确认区域 -->
             <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialog=false">Cancel</el-button>
                  <el-button type="primary" @click ="dialog = false">Confirm</el-button>
                </span>
             </template>
    </el-dialog>

</template>


<style scoped lang="scss">
 .basic_information_title::before {
   content:"..";
   background-color: rgb(54, 86, 230);
}


  .information_add_box{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .block{
        width: 500px;
        height: 30px;
        margin-right: 40px;
        .block_title{
            display: flex;
            width: 20%;
            height: 100%;
            align-items: center;
            span{
                display: flex;
                justify-content: center;
            }
        }        
      }
    }

    .el-input{
        height: 80%;
    }


</style>
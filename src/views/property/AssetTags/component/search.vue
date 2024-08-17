<template>
<div class="search_box">
        <div class="block">
                <span>资产编号</span>
                <el-input v-model="input" placeholder="Please input" />
        </div>
        <div class="block">
                <span>资产名称</span>
                <el-input v-model="input" placeholder="Please input" />
        </div>
        <div class="block">
                <span>使用部门</span>
                <el-input v-model="input" placeholder="Please input" />
        </div>
        <div class="block">
                <span>RFID卡号</span>
                <el-input v-model="input" placeholder="Please input" />
        </div>

        <div class="button_box">
                <el-button type="primary"><el-icon><Search /></el-icon>查询</el-button>
                <el-button type="primary"><el-icon><Refresh /></el-icon>重置</el-button>
        </div>
</div>        


<div class="title_box">
        <p>查询结果列表</p>
</div>

</template>
      
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped lang="scss">
   .search_box{
        height: 100px;
        display: flex;
        align-items: center;
        .block{
                width: 300px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-right: 30px;
               span{
                width: 100px;
                text-align: center;
               }
        }
        .button_box{
                width: 200px;
                display: flex;
                align-items: center;
                justify-content: space-between;
        }
    }
    p{
        font-size: 17px;
        font-family: '黑体';
    }

</style>
        

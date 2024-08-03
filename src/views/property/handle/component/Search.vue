<template>
<div class="assethandle_search_box">
    <div class="span">
        <p>资产编码</p>
        <el-input  v-model="assetcode" style="width: 240px; height: 40px;"  placeholder="Please input" />
    </div>
    <div class="span">
        <p>使用人员</p>
        <el-input v-model="user" style="width: 240px; height: 40px;"  placeholder="Please input" />
    </div>
    <div class="span">
        <p>所属部门</p>
        <el-select v-model="selectedValue" placeholder="Select" style="width: 240px">
            <el-option
            v-for="item in uniqueCategories"
            :key="item.value"
            :value="item.value"
            :label="item.value"
             />
            </el-select>
    </div>

    <div class="span">
        <p>资产类别</p>
        <el-select v-model="value" placeholder="Select" style="width: 240px">
            <el-option
            v-for="item in dataStore.filter"
            :key="item.label"
            :label="item.label"
            :value="item.UserDepartment"
             />
            </el-select>
    </div>

    <div class="span">
        <p>选择日期</p>
        <div class="block">
            <el-date-picker
             v-model="value1" style="width: 240px; height: 40px;"
             type="date"
            placeholder="Pick a day"
            :size="size"
             />
         </div>
    </div>

    <div class="span">
        <p>资产名称</p>
        <el-input v-model="input" style="width: 240px; height: 40px;"  placeholder="Please input" />
    </div>

    <div class="span">
        <p>资产状态</p>
        <el-input v-model="input" style="width: 240px; height: 40px;"  placeholder="Please input" />
    </div>


    <div class="span">
        <el-button type="primary" style="margin-left: 0;" @click='updateFilter'><el-icon><Search /></el-icon>查询</el-button>
        <el-button type="primary" style="margin-left: 30px;" @click="resetFilter"><el-icon><Refresh /></el-icon>重置</el-button>
    </div>

    <div class="span"></div>

</div>
    
</template>

<script setup lang="ts">

import { ref,computed  } from 'vue'
import { useDataStore } from '/@/stores/asset';

// 使用Pinia store
const dataStore = useDataStore();

const assetcode = ref(dataStore.filter.assetcode);
const user = ref(dataStore.filter.user)
const selectedValue = ref<string | null>(dataStore.selectedValue);

const uniqueCategories = computed(() => dataStore.uniqueCategories);
console.log(uniqueCategories);

const options = computed(() => 
  dataStore.items.map(item => ({
    value: item.UserDepartment, // or another unique identifier
    label: item.order
  }))
);


function updateFilter() {
  dataStore.setFilter({
    assetcode: assetcode.value,
    user: user.value,
    UserDepartment:selectedValue.value
  });
}

function resetFilter() {
  dataStore.resetFilter();
  // 同步搜索输入框的值
  assetcode.value = '',
  user.value= '',
  selectedValue.value=''
}

const input = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]



</script>

<style scoped lang="scss">
.assethandle_search_box{
    display: flex;
    flex-wrap: wrap;
    align-content:flex-start ;
    justify-content: start;
    .span{
        width: 330px;
        height: 50px;
        align-items: center;
        display: flex;
        margin-top: 5px;
        p{
            margin-right: 10px;
        }

      }
}
    
</style>
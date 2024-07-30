<template >

<div class="table_title_box">
  <h1>查询结果列表</h1>
  <div class="span">
    <el-button type="primary" style="margin-left: 0;">新增</el-button>
    <el-button type="primary" style="margin-left: 30px;">打印</el-button>
    <el-button type="primary" style="margin-left: 30px;">导出</el-button>
  </div>
</div>

<!-- 表格 -->
<el-table
    ref="multipleTableRef"  
    :data="filteredItems.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    style="width: 100% ;"
    @selection-change="handleSelectionChange">

    <el-table-column type="selection" width="55" />
    <el-table-column property="order" label="序号" width="60" />
    <el-table-column property="assetcode" label="资产编码" width="100"/>
    <el-table-column property="assetname" label="资产名称" width="100" />
    <el-table-column property="specification" label="规格型号" width="100" />
    <el-table-column property="category" label="所属类别" width="100"/> 
    <el-table-column property="unit" label="计量单位" width="100"/>
    <el-table-column property="unitprice" label="资产单价" width="120"/>
    <el-table-column property="IsRFID" label="是否配置RFID" width="150"/>
    <el-table-column property="RFIDCardId" label="RFID卡号" width="120"/>
    <el-table-column property="StorageLocation" label="存放地点" width="120"/>
    <el-table-column property="Purchasingdate" label="购买日期" width="120"/>
    <el-table-column property="UserDepartment" label="使用部门" width="120"/>
    <el-table-column property="User" label="使用人员" width="120"/>
    <el-table-column property="StartTime" label="维护开始时间" width="120"/>
    <el-table-column property="CycleTime" label="维护周期" width="150"/>
    <el-table-column property="Supplier" label="供应商" width="150" />
    <el-table-column property="ContactPerson" label="联系人员" width="150"/>
    <el-table-column property="ContactInf" label="联系方式" width="150"/>
    <el-table-column property="AssetStatus" label="资产状态" width="150"/>
    <el-table-column fixed="right" label="操作" min-width="150" >
      <template #default="scope" >
        <el-button link type="primary" size="small" @click="viewDetails(scope.row)">
          查看
        </el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <div class="demo-pagination-block">
    <div class="demonstration">Jump to</div>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="filteredItems.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

  <!-- <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">
      Toggle selection status of second and third rows
    </el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div> -->

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { onMounted } from 'vue';
import type { ComponentSize } from 'element-plus'
import { ElTable } from 'element-plus'
import { useDataStore } from '/@/stores/asset';
import { computed } from 'vue';
import { useDialogStore} from '/@/stores/asset'


let state = reactive([])
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
// const multipleSelection = ref<User[]>([])
const currentPage  = ref(1)
const pageSize = ref(5)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)



//查看功能
const dialogStore = useDialogStore();

function viewDetails(row :any) {
  console.log(row);
  dialogStore.openDialog(row);
}

// 使用Pinia store
const dataStore = useDataStore();

onMounted(() => {
  dataStore.fetchData();
});

// 计算属性获取过滤后的数据
let filteredItems = computed(() => dataStore.filteredItems);

</script>

<style scoped lang="scss">
 .table_title_box{
  display: flex;
  justify-content: space-between;
  align-items: center;
    h1{
      margin-left: 10px;
    }
   .span{
        width: 330px;
        height: 50px;
        align-items: center;
        display: flex;
        margin-top: 5px;}
 }

 .dialog-footer {
  display: flex;
  padding: 10px;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  flex-direction:column
}
.demo-pagination-block{
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>

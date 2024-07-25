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
    :data="res.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    style="width: 100% ;"
    @selection-change="handleSelectionChange"
  >
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
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
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
      :total="res.length"
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
import api from '/@/api/assets/index'
import { onMounted } from 'vue';
import internal from 'stream';
import type { ComponentSize } from 'element-plus'

const currentPage  = ref(5)
const pageSize = ref(5)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

interface User {
  order: internal,
  assetcode:string,
  assetname:string,
  specification:string
}

let posts = ref([]); // 使用ref定义一个响应式变量
let res = ref<User[]>([])

const fetchPosts = async () => {
    try {
        const data = await api.getPosts(); // 调用封装的接口函数
        // posts.value = toRaw(data);
       posts=JSON.parse(JSON.stringify(data))
       console.log(posts)
       
       res.value = posts.AssetsData
        console.log(res);
      } catch (error) {
        // 处理错误
      }
    };

onMounted(() => {
    fetchPosts()
})



const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
// const toggleSelection = (rows?: User[]) => {
//   if (rows) {
//     rows.forEach((row) => {
//       // TODO: improvement typing when refactor table
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       multipleTableRef.value!.toggleRowSelection(row, undefined)
//     })
//   } else {
//     multipleTableRef.value!.clearSelection()
//   }
// }
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

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

 .demo-pagination-block{
  display: flex;
  align-items: center;
  justify-content: end
 }

</style>

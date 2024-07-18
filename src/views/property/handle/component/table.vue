<template >
    <el-table 
    :data="tableData" 
    height="600" 
    style="width: 100%"
    ref="multipleTableRef"
     @selection-change="handleSelectionChange"
    >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="state" label="状态" width='60' />
    <el-table-column prop="sigstate" label="签字状态" width={{len}} />
    <el-table-column prop="picture" label="照片" width={{len}} />
    <el-table-column prop="assetcoding" label="资产编码" width=140 />
    <el-table-column prop="assetname" label="资产名称" width={{len}} />
    <el-table-column prop="RFID" label="RFID" width={{len}} />
    <el-table-column prop="Assetcategory" label="资产类别" width={{len}} />
    <el-table-column prop="SpecModel" label="规格型号" width={{len}} />
    <el-table-column prop="label" label="标签" width={{len}} />
    <el-table-column prop="unit" label="计量单位" width={{len}} />
    <el-table-column prop="price" label="金额" width={{len}} />
    <el-table-column prop="company" label="使用公司" width={{len}} />
    <el-table-column prop="department" label="使用部门" width={{len}} />
    <el-table-column prop="name" label="使用人" width={{len}} />
    <!-- <el-table-column prop="region" label="区域名称" width={{len}} />
    <el-table-column prop="storageloc" label="存放地点"  width={{len}} />
    <el-table-column prop="administrator" label="管理员" width={{len}} />
    <el-table-column prop="affcompany" label="所属公司" width={{len}} />
    <el-table-column prop="name" label="购入日期" width={{len}} />
    <el-table-column prop="name" label="供应商" width={{len}} />
    <el-table-column prop="name" label="使用期限" width={{len}} />
    <el-table-column prop="name" label="来源" width={{len}} />
    <el-table-column prop="name" label="创建人" width={{len}} />
    <el-table-column prop="name" label="创建时间" width={{len}} />
    <el-table-column prop="name" label="收获单号" width={{len}} /> -->
  </el-table>

  <el-pagination
  
  style="
  flex-direction: row-reverse;"
    :page-size="20"
    :pager-count="4"
    layout="prev, pager, next"
    :total="1000"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

var len:number =70 
const tableData = [
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
  {
    state: '闲置',
    sigstate:'已签字',
    picture:'9000.jpg',
    assetcoding:'zc00000000001',
    assetname:'笔记本电脑',
    RFID:'53E8E880A80D4',
    Assetcategory:'电子产品及通信设备',
    SpecModel:'型号1',
    label:'固定资产',
    unit:'台',
    price:'￥8000',
    company:'一点点科技',
    department:'科技创新部',
    name:'张飞'
  },
]
</script>
<style lang="scss" scoped>
/* ---el-table滚动条公共样式--- */
.el-scrollbar {
  // 横向滚动条
  .el-scrollbar__bar.is-horizontal .el-scrollbar__thumb {
    opacity: 1; // 默认滚动条自带透明度
    height: 8px; // 横向滑块的宽度
    border-radius: 2px; // 圆角度数
    background-color: rgba(136, 219, 255, 1); // 滑块背景色
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15); // 滑块阴影
  }
  // 纵向滚动条
  .el-scrollbar__bar.is-vertical .el-scrollbar__thumb {
    opacity: 1;
    width: 8px; // 纵向滑块的宽度
    border-radius: 2px;
    background-color: rgba(136, 219, 255, 1);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  }
}
</style>
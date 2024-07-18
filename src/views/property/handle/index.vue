<script setup>
import Form from './component/table.vue'
import { ref } from 'vue';
import ReceiveForm from '/@/views/property/handle/component/InfForm.vue';
import CancelForm from './component/Cancle.vue'
import BorrowForm from './component/Borrow.vue'
import AllotForm from './component/Allot.vue'
import PhyinfoForm from './component/PhyInf.vue'
import MaintenanceForm from './component/Maintenance.vue';
import FianceForm from './component/Finance.vue'
import ServiceForm from './component/Service.vue';
import CleanFrom from './component/Cleanup.vue'
import ReturnForm  from "./component/Return.vue";
//新建数据表单引用
import CreateForm from '../handle/create/create.vue'
import axios from 'axios';


const res = axios({
    method: 'GET',
    url: 'http://v.juhe.cn/toutiao/index'
})
console.log(res);


let isShowIn = ref(false)
let isShowCancle = ref(false)
let isShowBorrow =ref(false)
let isShowAllot = ref(false)
let isShowPhy = ref(false)
let isShowMantainence = ref(false)
let isShowFinance = ref(false)
let isShowServece = ref(false)
let isShowCleanup = ref(false)
let isShowReturn = ref(false)
const dialogVisible = ref(false)


const closein = (val) => {
  isShowIn.value = val}

const closecancle = (val) => {
  isShowCancle.value = val}

const closeborrow = (val) => {
  isShowBorrow.value = val}

const closeallot = (val) => {
  isShowAllot.value = val}

const closephy = (val)=>{
  isShowPhy.value = val
}

const closemantenance = (val)=>{
  isShowMantainence.value = val
}

const closefinance = (val) =>{
  isShowFinance.value = val
}
const closeservice =(val) =>{
  isShowServece.value =val
}
const closecleanup = (val) =>{
  isShowCleanup.value = val
}
const closereturn = (val) =>{
  isShowReturn.value = val
}

const closecreate = (val) =>{
  dialogVisible.value= val
}
</script>


<template>
    <!-- 输入领用表单 -->
     <ReceiveForm :isShow="isShowIn" @close="closein">
     </ReceiveForm >
    <!-- 输入退货表单 -->
     <CancelForm :isShow="isShowCancle" @close="closecancle"></CancelForm>
     <!-- 输入借用表单 -->
     <BorrowForm :isShow="isShowBorrow" @close="closeborrow"></BorrowForm>
     <!-- 输入调拨单 -->
     <AllotForm :isShow="isShowAllot" @close="closeallot"></AllotForm>
      <!-- 输入实物变更单 -->
       <PhyinfoForm :isShow="isShowPhy" @close="closephy"></PhyinfoForm>
       <!-- 输入实现维保信息 -->
        <MaintenanceForm :isShow ="isShowMantainence" @close="closemantenance"></MaintenanceForm>
      <!-- 输入财务信息 -->
       <FianceForm :isShow="isShowFinance" @close="closefinance"></FianceForm>
       <!-- 输入维修信息 -->
      <ServiceForm :isShow="isShowServece" @close="closeservice"></ServiceForm>
      <!-- 输入清理报废 -->
      <CleanFrom :isShow="isShowCleanup" @close="closecleanup"></CleanFrom>
      <!-- 输入归还报表 -->
       <ReturnForm :isShow="isShowReturn" @close="closereturn"></ReturnForm>

       <!-- 新建数据表单 -->
        <CreateForm :dialogVisible="dialogVisible"  @close="closecreate"></CreateForm>
        <div>
        <!-- //标题 -->
        <div class="ax_default_box1">资金处理</div>

        <!-- 选择栏 -->
         <div class="back">
            <span>使用公司/部门：</span>
         <el-select v-model="value" class="m-2" placeholder="Select" size="large">
         <el-option
           v-for="item in options"
           :key="item.value"
           :label="item.label"
           :value="item.value"/>
        </el-select>

          <!-- 快速处理 -->
          <!-- 编辑选项 -->
        <el-dropdown style="margin-left: 10px;">
      <el-button type="primary">
       快速处理<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="isShowIn=!isShowIn">领用</el-dropdown-item>
          <el-dropdown-item @click="isShowCancle=!isShowCancle">退库</el-dropdown-item>
          <el-dropdown-item @click="isShowBorrow=!isShowBorrow">借用</el-dropdown-item>
          <el-dropdown-item @click="isShowAllot=!isShowAllot">挑拨</el-dropdown-item>
          <el-dropdown-item @click="isShowPhy=!isShowPhy">实物信息</el-dropdown-item>
          <el-dropdown-item @click="isShowMantainence=!isShowMantainence">维保信息</el-dropdown-item>
          <el-dropdown-item @click="isShowFinance=!isShowFinance">财务信息</el-dropdown-item>
          <el-dropdown-item @click="isShowServece=!isShowServece">维修信息</el-dropdown-item>
          <el-dropdown-item @click="isShowCleanup=!isShowCleanup">清理报废</el-dropdown-item>
          <el-dropdown-item @click="isShowReturn= !isShowReturn">归还</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>



    <!-- 新建选项 -->
    <el-button id="create" type="primary" size="large" style="margin-left: 10px;border: 1px solid #CDD0D6"
     text @click="dialogVisible= !dialogVisible ">
      <el-icon><Plus /></el-icon>
       新建 </el-button>
    
      



        <!-- 编辑选项 -->
        <el-dropdown style="margin-left: 10px;">
      <el-button type="primary">
       编辑<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改</el-dropdown-item>
          <el-dropdown-item>复制</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

        <!-- 导入导出选项 -->
        <el-dropdown style="margin-left: 10px;">
      <el-button type="primary">
       导入/导出<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>下载导入模板</el-dropdown-item>
          <el-dropdown-item>批量导入资产</el-dropdown-item>
          <el-dropdown-item>批量上传附件</el-dropdown-item>
          <el-divider  style="margin:5px"/>
          <el-dropdown-item>导出资产</el-dropdown-item>
          <el-dropdown-item>导出资产与单据</el-dropdown-item>
          <el-divider  style="margin:5px"/>
          <el-dropdown-item>批量更新维保信息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- RFID管理 -->
    <el-dropdown style="margin-left: 10px; ">
      <el-button type="primary">
        RFID管理<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>发卡</el-dropdown-item>
          <el-dropdown-item>批量发卡</el-dropdown-item>
          <el-divider  style="margin:5px"/>
          <el-dropdown-item>换卡</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
         </div>
        
         <!-- 表单部分 -->
           <!-- 合计部分 -->
            <div class="handle_price_total">
                <p class="total">总计金额：</p>
            </div>
   <Form></Form>
    </div>
</template>



<style lang="scss">
    .ax_default_box1{
        font-family: "iconfont";
        width: 100%;
        height: 30px;
        border-bottom: 1px black solid;
    }
    .back{
        width: 100%;
        height: 45px;
        margin-top: 10px;
    }
    // 合计金额背景框
    .handle_price_total{
      display: flex;
        margin-top: 20px;
        width:100%;
        height:40px;
        border: 1px solid black;
        background-color: white;
        .total{
          align-content: center;
          background-color: white;
          margin-left: 10px;
        }
    }
    #create:hover{
      background-color: #F2F3F5;
         opacity: 0.5;
    }
</style>
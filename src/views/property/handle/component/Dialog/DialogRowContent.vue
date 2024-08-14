<template >
    <div class="asset_inf_box">
        <div class="block">
            <span>资产编码:</span>
            <div class="row_info">{{ selectedRow.assetcode }}</div>
        </div>

        <div class="block">
            <span>资产名称:</span>
            <div class="row_info">{{ selectedRow.assetname }}</div>
        </div>

        <div class="block">
            <span>规格型号:</span>
            <div class="row_info">{{ selectedRow.specification }}</div>
        </div>

        <div class="block">
            <span>所属类别:</span>
            <div class="row_info">{{ selectedRow.category }}</div>
        </div>

        <div class="block">
            <span>计量单位:</span>
            <div class="row_info">{{ selectedRow.unit }}</div>
        </div>

        <div class="block">
            <span>资产单价:</span>
            <div class="row_info">{{ selectedRow.unitprice }}</div>
        </div>

        <div class="block">
            <span>是否配置RFID:</span>
            <div class="row_info">{{ selectedRow.IsRFID }}</div>
        </div>

        <div class="block">
            <span>RFID卡号:</span>
            <div class="row_info">{{ selectedRow.RFIDCardId }}</div>
        </div>

        <div class="block">
            <span>存放地点:</span>
            <div class="row_info">{{ selectedRow.StorageLocation }}</div>
        </div>

        <div class="block">
            <span>购买日期:</span>
            <div class="row_info">{{ selectedRow.Purchasingdate }}</div>
        </div>

        <div class="block">
            <span>使用部门:</span>
            <div class="row_info">{{ selectedRow.UserDepartment }}</div>
        </div>

        <div class="block">
            <span>使用人员:</span>
            <div class="row_info">{{ selectedRow.user}}</div>
        </div>

        <div class="block">
            <span>维护开始时间:</span>
            <div class="row_info">{{ selectedRow.StartTime }}</div>
        </div>

        <div class="block">
            <span>维护周期:</span>
            <div class="row_info">{{ selectedRow.CycleTime}}</div>
        </div>

        <div class="block">
            <span>供应商:</span>
            <div class="row_info">{{ selectedRow.Supplier}}</div>
        </div>

        <div class="block">
            <span>联系人员:</span>
            <div class="row_info">{{ selectedRow.ContactPerson}}</div>
        </div>

        <div class="block">
            <span>联系方式:</span>
            <div class="row_info">{{ selectedRow.ContactInf}}</div>
        </div>

        <div class="block">
            <span>资产状态:</span>
            <div class="row_info">{{ selectedRow.AssetStatus}}</div>
        </div>

        <div class="block placeholder">

        </div>

        <div class="block placeholder">
      
        </div>





        
     </div>


</template>

<script lang="ts" setup>
 import { useDialogStore } from '/@/stores/asset';
 import {ref,computed} from 'vue'

 const  dialogStore = useDialogStore()

 const selectedRow = computed(() => dialogStore.selectedRow);


</script>



<style lang="scss" scoped>
    
    .asset_inf_box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .block{
        margin: 10px 20px 20px 20px ;
        font-size: large;
        display: flex;
        width: 300px;
        justify-content: space-between;
        // align-items: center;
        .row_info{
            width: 150px;
        }
        }


        .placeholder {
          visibility: hidden;
                     }
         }
         
</style>
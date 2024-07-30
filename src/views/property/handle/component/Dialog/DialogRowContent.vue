<template >
     <el-input v-model="selectedRow.order" placeholder="Edit Name"></el-input>
     <div class="block">
        <span>资产编码:</span>
        <div class="row_info">{{ selectedRow.assetcode }}</div>
     </div>
</template>


<script lang="ts" setup>
 import { useDialogStore } from '/@/stores/asset';
 import {ref,computed} from 'vue'

 const  dialogStore = useDialogStore()

 const selectedRow = computed(() => dialogStore.selectedRow);


</script>



<style lang="scss" scoped>
    .block{
        font-size: large;
        display: flex;
        width: 200px;
        justify-content: space-around;
        align-items: center;
    }
</style>
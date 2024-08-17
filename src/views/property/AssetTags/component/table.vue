<template >
  <el-row style="margin-top: 10px" :gutter="10">
    <el-col :span="12" ><div class="grid-content ep-bg-purple" />
        <el-table
                ref="multipleTableRef"
                :data="filteredItems.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column type="selection" width="55" />
                <el-table-column type="index" label="序号" width="60">
                </el-table-column>
                <el-table-column property="assetcode" label="assetcode" width="150">
                </el-table-column>
                <el-table-column property="assetname" label="资产名称" width="130" />
                <el-table-column property="specification" label="规格型号" width="150" />
                <el-table-column property="StorageLocation" label="存放地点" width="100"/>
                <el-table-column property="UserDepartment" label="使用部门" width="90"/>
         </el-table>
                <div class="demo-pagination-block">
                        <div class="demonstration">Jump to</div>
                        <el-pagination
                        v-model:currentPage="currentPage"
                        v-model:page-size="pageSize"
                        :small="small"
                        :disabled="disabled"
                        :background="background"
                        layout="prev, pager, next, jumper"
                        :total="filteredItems.length"
                        />
                </div>
        </el-col>

<!-- 标签部分  -->
        <el-col :span="12"><div class="grid-content ep-bg-purple-light" />
                <div class="label_search_box">
                        <div class="label_button_box">
                                <el-button type="primary">打印</el-button>
                                <el-button type="primary">导出</el-button>
                        </div>
                </div>
                <div class="label_box">
                        <div class="asset-card">
                                <div class="header">固定资产标识卡</div>
                                        <div class="card-content">
                                                <div class="info-table">
                                                        <div class="row" v-for="(item, index) in tableData" :key="index">
                                                                <div class="label">{{ item.label }}</div>
                                                                <div class="value">{{ item.value }}</div>
                                                        </div>
                                                </div>
                                                <div class="qr-code">
                                                <img :src="qrCodeUrl" alt="QR Code">
                                        </div>
                                </div>
                        </div>
                </div>
        </el-col>
</el-row>


</template>


<script setup lang="ts">
import { ref, reactive } from 'vue';
import { onMounted,computed } from 'vue';
import type { ComponentSize } from 'element-plus'
import { ElTable } from 'element-plus'
import { useDataStore } from '/@/stores/asset';

const multipleSelection = ref([])

// 使用Pinia store
const dataStore = useDataStore();
onMounted(() => {
  dataStore.fetchData();
});


// 计算属性获取过滤后的数据
let filteredItems = computed(() => dataStore.filteredItems);


const handleSelectionChange = (val:any) => {
  multipleSelection.value = val
}

const currentPage  = ref(1)
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const small = ref(false)

const tableData = ref([
  { label: '资产编码', value: 'SBXX202SN7200067' },
  { label: '资产名称', value: '3号楼1号电梯' },
  { label: '资产型号', value: 'OTIS0980' },
  { label: '资产位置', value: '电梯设备' },
  { label: '使用部门', value: '物业管理部' },
]);
const qrCodeUrl = ref('https://th.bing.com/th/id/R.57384e4c2dd256a755578f00845e60af?rik=uy9%2bvT4%2b7Rur%2fA&riu=http%3a%2f%2fimg06file.tooopen.com%2fimages%2f20171224%2ftooopen_sy_231021357463.jpg&ehk=whpCWn%2byPBvtGi1%2boY1sEBq%2frEUaP6w2N5bnBQsLWdo%3d&risl=&pid=ImgRaw&r=0');
</script>


<style scoped lang="scss">
.demo-pagination-block{
display:flex;
align-items: center;
height: 80px;
justify-content: end
}
.label_search_box{
        justify-content: space-around;
        display: flex;
        height: 50px;
        align-items: center;
        .label_button_box{
                width: 200px;
                justify-content: space-around;
                display: flex;
        }
}
.label_box{
        height: 475px;
        display: flex;
        background-color: rgb(226, 226, 226);;
                .asset-card {
                margin: 20px auto;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                margin: auto;
                height: 250px;
                width: 600px;
                background-color: white;
                }

                .header {
                text-align: center;
                font-weight: bold;
                font-size: 20px;
                margin-bottom: 10px;
                }

                .card-content {
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                }

                .info-table {
                width: calc(60% - 10px); /* 左侧表格宽度 */
                display: flex;
                flex-direction: column;
                gap: 5px;
                font-size: 18px;
                }

                .row {
                display: flex;
                }

                .label {
                width: 100px;
                font-weight: bold;
                padding-right: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                }

                .value {
                flex-grow: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                }

                .qr-code {
                width: calc(40% - 10px); /* 右侧二维码宽度 */
                display: flex;
                align-items: center;
                justify-content: center;
                }

                .qr-code img {
                max-width: 100%;
                height: auto;
                border: 1px solid #ccc;
                }
                }


</style>
        
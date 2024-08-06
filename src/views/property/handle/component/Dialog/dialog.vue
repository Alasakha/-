<template>
  <el-dialog  v-model="isDialogVisible" title="查看" width="1500" :before-close="closeDialog">
    <div class="info_box">
      <div class="sidebar-menu">
    <ul>
      <li
        v-for="(item,index) in menuItems"
        :key="item"
        :class="{ active: activeMenu === item }"
        @click="selectMenuItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
      <!-- 具体内容 -->
        <div class="specific_menu_inf_box">
            <div v-if="activeMenu=='资产信息'">
                <DialogContent></DialogContent>
            </div>
            <div v-if="activeMenu=='关联工单'">
               <p>关联工单</p>
            </div>
        </div>
    </div>
    
    
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { computed } from 'vue';
 import { useDialogStore } from '/@/stores/asset';
 import DialogContent from './DialogRowContent.vue';

 const menuItems = ['资产信息', '关联工单', '附属资产','资产资料'];
const activeMenu = ref(menuItems[0]);
function selectMenuItem(item: string) {
  activeMenu.value = item;
}


const dialogStore = useDialogStore()

const isDialogVisible = computed(() => dialogStore.isDialogVisible);
const selectedRow = computed(() => dialogStore.selectedRow);
const currentView = computed(() => dialogStore.currentView);

function closeDialog() {
  dialogStore.closeDialog();
}

// function switchView(view: 'details' | 'edit') {
//   dialogStore.switchView(view);
// }

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style scoped lang="scss">

.info_box{
  display:flex;
}
.sidebar-menu {
  width: 100px;
  color:#73767a;
  padding: 0;
  background-color: white;
}

.sidebar-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;

}

.sidebar-menu li {
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-right: #e9e9eb solid 4px; 
}

.sidebar-menu li:hover {
  background-color: #A8ABB2;
}

.sidebar-menu li.active {
  background-color: whitesmoke;
  color: #337ecc;
  border-right : #337ecc 4px solid;
}
  .specific_menu_inf_box{
    height: 100%;
    background-color: aqua;
  }
  .el-dialog__body{
    padding: 0;
  }
</style>



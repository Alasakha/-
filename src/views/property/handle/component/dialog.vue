<template>
  <el-dialog  v-model="isDialogVisible" title="查看" :before-close="closeDialog">
    <div class="info_box">
      <div class="sidebar-menu">
    <ul>
      <li
        v-for="item in menuItems"
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
            <div v-if="currentView === 'details'">
              <p>Name:</p>
              <p>Age: </p>
            </div>
            <div v-if="currentView === 'edit'">
              <el-input v-model="selectedRow.assetcode" placeholder="Edit Name"></el-input>
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

 const menuItems = ['Item 1', 'Item 2', 'Item 3'];
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

function switchView(view: 'details' | 'edit') {
  dialogStore.switchView(view);
}

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
  background-color:red;
  display:flex;
}
.sidebar-menu {
  width: 200px;
  height: 100vh;
  color:blue;
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
}

.sidebar-menu li:hover {
  background-color: #A8ABB2;
}

.sidebar-menu li.active {
  background-color: whitesmoke;
  color: white;
  border-right: rgb(255, 0, 0) 4px solid;
}
  .specific_menu_inf_box{
    height: 100%;
    background-color: aqua;
  }

</style>



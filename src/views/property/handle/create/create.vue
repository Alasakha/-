<script setup lang="ts">
import { log } from 'console';
import {ref , watch} from 'vue'


const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false
    }
})
const dialog = ref(false)

watch(() => props.dialogVisible, (newValue) =>{
    dialog.value= newValue
    console.log(newValue);
    
},{immediate:true})

const emits = defineEmits(['closecreate'])
const closeDialog = () => {
    emits('closecreate', false)
}


</script>

<template>
    <el-dialog v-model="dialog" title="新建资产" width="70%" draggable @close="closeDialog">
        <div class="basic_information_title">  基本信息</div>
            <div class="information_add_box">
                <!-- 资产类别 -->
                <div class="block">
                    <div class="block_title">
                        <span>资产类别</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
                <!-- 标准型号 -->
                <div class="block">
                    <div class="block_title">
                        <span>标准型号</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
                
                <div class="block">
                    <div class="block_title"><span>资产编码</span></div>
                    <el-input
                    v-model="input"
                    style="width: 400px"
                    disabled
                    placeholder="Please input"
                />
                </div>
                <div class="block">
                    <div class="block_title"><span>资产名称</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>
                <div class="block">
                    <div class="block_title"><span>规格型号</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>
                <div class="block">
                    <div class="block_title"><span>计量单位</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>
                <div class="block">
                    <div class="block_title"><span>SN号</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>
                <div class="block">
                    <div class="block_title">
                        <span>来源</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
                <!-- 购入日期 -->
                <div class="block">
                    <div class="block_title"><span>购入日期</span></div>
                    <el-date-picker
                        style="align-items: center; width: 100%; "
                        v-model="value1"
                        type="date"
                        placeholder="Pick a day"
                        :size="size"
                    />
                </div>

                <div class="block">
                    <div class="block_title">
                        <span>所属公司</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>

                <div class="block">
                    <div class="block_title"><span>金额</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>

                <div class="block">
                    <div class="block_title">
                        <span>管理员</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="block">
                    <div class="block_title">
                        <span>使用人</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="block">
                    <div class="block_title">
                        <span>使用公司</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>

                <div class="block">
                    <div class="block_title">
                        <span>使用部门</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>

                <div class="block">
                    <div class="block_title"><span>使用期限(月)</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>

                <div class="block">
                    <div class="block_title">
                        <span>区域</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>

                <div class="block">
                    <div class="block_title"><span>存放地点</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>

                <div class = "block" style="margin-top: 30px">
                    <div class="block_title"><span>存放地点</span></div>
                <el-input
                    v-model="textarea"
                    style="width: 440px"
                    :rows="3"
                    type="textarea"
                    placeholder="Please input"
                    />
                </div>   
            </div>
              <br><br>
            <div class="basic_information_title">  维保信息</div>
            <div class="information_add_box">

                <div class="block">
                    <div class="block_title"><span>供应商</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>

                <div class="block">
                    <div class="block_title"><span>联系人</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>

                <div class="block">
                    <div class="block_title"><span>联系方式</span></div>
                    <el-input v-model="input" placeholder="Please input" />
                </div>

                <div class="block">
                    <div class="block_title">
                        <span>负责人</span>
                    </div>
                    <el-select v-model="value" class="m-2" placeholder="请选择人员" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </div>

                
                <div class="block" >
                    <div class="block_title"><span>购入日期</span></div>
                    <el-date-picker
                        style="align-items: center; width: 100%; "
                        v-model="value1"
                        type="date"
                        placeholder="Pick a day"
                        :size="size"
                    />
                </div>
                

                <div class = "block" style="margin-top: 30px">
                    <div class="block_title"><span>维保说明</span></div>
                    <el-input
                        v-model="textarea"
                        style="width: 1000px"
                        :rows="3"
                        type="textarea"
                        placeholder="Please input"
                        />
                </div>   

                <div class="basic_information_title">  附件信息</div>

            </div>


        <!-- 底部确认区域 -->
             <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialog=false">Cancel</el-button>
                  <el-button type="primary" @click ="dialog = false">Confirm</el-button>
                </span>
             </template>
    </el-dialog>

</template>


<style scoped lang="scss">
 .basic_information_title::before {
   content:"..";
   background-color: rgb(54, 86, 230);
}


  .information_add_box{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .block{
        width: 500px;
        height: 30px;
        margin-right: 40px;
        .block_title{
            display: flex;
            width: 20%;
            height: 100%;
            align-items: center;
            span{
                display: flex;
                justify-content: center;
            }
        }        
      }
    }

    .el-input{
        height: 80%;
    }

    .demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
 .el-input__wrapper{
    height: 30%;
}
</style>
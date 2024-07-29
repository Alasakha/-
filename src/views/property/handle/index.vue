<template >

<div class="ax_default_box1">资金处理</div>
<SearchContent></SearchContent>
<TableTitle></TableTitle>
<DiaglogVue></DiaglogVue>

</template>
<script setup>
import SearchContent from './component/Search.vue'
import TableTitle from './component/table.vue'
import DiaglogVue from './component/dialog.vue'
</script>
<style lang="scss" scoped>

  .ax_default_box1{
      font-family: "iconfont";
      width: 100%;
      height: 30px;
      border-bottom: 1px black solid;
      display: flex;
     
  }

  


</style>
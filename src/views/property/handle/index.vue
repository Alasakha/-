<template >

<div class="ax_default_box1">资金处理</div>
<SearchContent></SearchContent>
<TableTitle></TableTitle>
<DiaglogVue></DiaglogVue>
<CreateTable></CreateTable>

</template>
<script setup>
import SearchContent from './component/Search.vue'
import TableTitle from './component/table.vue'
import DiaglogVue from './component/Dialog/dialog.vue'
import CreateTable from './create/create.vue'
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
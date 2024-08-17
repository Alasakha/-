<template >

<div class="ax_default_box1">资产标签</div>
    <SearchContent></SearchContent>
    <TableContent></TableContent>


</template>
<script setup>
import SearchContent from './component/search.vue'
import TableContent from './component/table.vue'

</script>


<style lang="scss" scoped>

.ax_default_box1{
        font-family: "iconfont";
        width: 100%;
        height: 30px;
        border-bottom: 1px black solid;
    }

 
</style>
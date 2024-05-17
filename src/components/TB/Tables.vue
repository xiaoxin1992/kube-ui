<script setup>
const props = defineProps({
  size: {
    default: "default"
  },
  data: {
    type: Array,
    default: []
  },
  columns: {
    type: Array,
    default: []
  },
  emptyText: {
    type: String,
    default: "暂无数据"
  },
  border: {
    type: Boolean,
    default: true
  },
  multipleSelect: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(["multipleSelect"]);
const multipleSelect = (items) => {
  if (props.multipleSelect) {
    emits("multipleSelect", items)
  }
}
</script>

<template>
  <!--基础的table表格用于信息展示-->
  <el-table :size="props.size" :data="props.data" :empty-text="props.emptyText" :border="props.border"
            @selection-change="multipleSelect">
    <el-table-column v-if="props.multipleSelect" type="selection" width="55"/>
    <el-table-column align="center"
                     v-for="column in props.columns"
                     :key="column.name"
                     :prop="column.prop"
                     :label="column.label"
                     :width="column.width"
                     :formatter="column.formatter"
                     :fixed="column.fixed"
    />
    <slot name="table-ext"></slot>
  </el-table>
</template>

<style scoped>

</style>
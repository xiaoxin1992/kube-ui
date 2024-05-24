<script setup>

const data = defineModel()

const toNumber = () => {
  // 判断输入的是数字则转换成Number类型，否则就是string类型
  const numData = Number(data.value)
  if (!isNaN(numData)) {
    data.value = numData
  }
}

</script>

<template>
  <!--数据双向绑定-->
  <el-input v-model.lazy.trim="data" placeholder="xxx" @change="toNumber"></el-input>
</template>

<style scoped>

</style>
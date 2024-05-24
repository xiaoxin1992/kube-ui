<script setup>
const props = defineProps({
  defaultValue: {
    type: Number,
    default: 420
  }
})

const data = defineModel()

// 八进制转10进制
const convertToOct = (value) => {
  value = value.trim()
  if (value.indexOf('0') === 0) {
    value = parseInt(value, 8)
    value = isNaN(value) ? props.defaultValue : value
  }
  value = parseInt(value, 10)
  value = isNaN(value) ? props.defaultValue : value
  if (value > 511) {
    value = 511
  }
  return value
}

const changeValue = (value) => {
  data.value = convertToOct(value)
}
</script>

<template>
  <!--
  输入8进制的数据会自动转换成10进制， 主要用于k8s configmap或secret中mode的输入
  使用用例
  script 配置
  {
      const inputData = ref("")
  }
  <OctalInput v-model="inputData" :defaultValue=420></OctalInput>
  使用defineModel()进行数据双向绑定
  -->
  <el-input @change="changeValue" v-model="data"></el-input>
</template>

<style scoped>

</style>
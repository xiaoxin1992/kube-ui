<script setup>
import Tables from "./components/TB/Tables.vue";
import {reactive, ref} from "vue";
import KubeSelect from "./components/TB/KubeSelect.vue";
import OctalInput from "./components/TB/OctalInput.vue";
let data =[
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    time: '2016-05-03',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    time: '2016-05-03',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    time: '2016-05-03',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    time: '2016-05-03',
  },
]
const columns = [
  {
    prop: "name",
    label: "Name",
    width: "150px",
    formatter: (row) => {
      return row.name.toUpperCase();
    }
  },
  {
    prop: "address",
    label: "Address",
  },
  {
    prop: "date",
    label: "Date",
    fixed: "right",  // right || left
  },
]
const mt = (items) => {
  items.forEach(item => {
    console.log(item, "back call");
  })
}


const value = ref()
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
let options2 = reactive(
    {
      "items": []
    }
)
const options3 = reactive({
  items: [
    {
      value: 'ns-Option1',
      label: 'ns-Option1',
    },
    {
      value: 'ns-Option2',
      label: 'ns-Option2',
    },
    {
      value: 'ns-Option3',
      label: 'ns-Option3',
    },
    {
      value: 'ns-Option4',
      label: 'ns-Option4',
    },
    {
      value: 'ns-Option5',
      label: 'ns-Option5',
    },
  ]
})

const changeNum = (obj) => {
  options2.items = options3.items
  console.log(options2, options3)
}
const inputData = ref("")
const clusterData = ref("Option1")
const namespaceData = ref("default")
</script>

<template>
  <KubeSelect v-model:clusterData="clusterData" v-model:namespaceData="namespaceData" :clusterOptions="options" :namespaceOptions="options2.items" @changeCluster="changeNum" :namespace-show="true"></KubeSelect>
  <Tables :data="data"  :columns="columns" :multipleSelect="false" @multiple-select="mt">
    <template #table-ext>
      <el-table-column  label="操作" fixed="right" width="180px">
        <template #default="scope">
          <el-button type="primary" link size="default">编辑</el-button>
          <el-button type="danger" link size="default">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </Tables>
  <OctalInput v-model:data="inputData"></OctalInput>
  {{inputData}}
</template>

<style scoped>
</style>

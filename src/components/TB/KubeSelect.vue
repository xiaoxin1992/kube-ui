<script setup>

import {reactive, ref, watch} from "vue";

const props = defineProps({
  clusterData: {
    type: String
  },
  namespaceData: {
    type: String
  },
  size: {
    default: "default"
  },
  clusterPlaceholder: {
    type: String,
    default: "请选择集群"
  },
  clusterOptions: {
    type: Array,
    default: []
  },
  namespaceShow: {
    // 是否显示namespace 组件
    type: Boolean,
    default: true
  },
  namespacePlaceholder: {
    type: String,
    default: "请选择命名空间"
  },
  namespaceOptions: {
    type: Array,
    default: []
  },
  width: {
    type: String,
    default: "240px"
  },
  clusterDataText: {
    type: String,
    default: "没有集群数据"
  },
  namespaceDataText: {
    type: String,
    default: "没有命名空间数据"
  }
})

const emits = defineEmits(["changeCluster", "changeNamespace", "update:clusterData", "update:namespaceData"])
const namespaceChange = (value) => {
  emits("update:namespaceData", value)
  emits("changeNamespace", value)
}
const clusterChange = (value) => {
  emits("update:clusterData", value)
  emits("changeCluster", value)
}

</script>

<template>
  <!--
  提供k8s集群和namespace的select， 支持父子组件数据双向绑定
  script {
    options = [{value:"cluster1", label: "cluster1"}]
    options2 = [{value:"namespace1", label: "namespace1"}]
    const clusterData = ref("Option1")
    const namespaceData = ref("default")
  }
    <KubeSelect
    v-model:clusterData="clusterData"
    v-model:namespaceData="namespaceData"
    :clusterOptions="options"
    :namespaceOptions="options2.items"
    @changeCluster="changeNum"
    @changeNamespace="changenamespace"
    :namespace-show="true"></KubeSelect>

  -->
  <div class="flex flex-wrap gap-4 items-center">
    <el-select
        :model-value="clusterData"
        :size="props.size"
        :style="{width: props.width}"
        :placeholder="props.clusterPlaceholder"
        :no-data-text="props.clusterDataText"
        @change="clusterChange"

    >
      <el-option
          v-for="item in props.clusterOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>
    <el-select
        v-if="props.namespaceShow"
        :size="props.size"
        :model-value="namespaceData"
        :placeholder="props.namespacePlaceholder"
        :style="{width: props.width}"
        :no-data-text="props.namespaceDataText"
        @change="namespaceChange"
    >
      <el-option
          v-for="item in props.namespaceOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  gap: 1rem;

}
</style>
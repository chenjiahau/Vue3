<script setup>
const props = defineProps(["tabList"]);
const tab = props.tabList[2];
</script>

<template>
  <div>
    <h1>{{ tab.title }}</h1>
  </div>
</template>

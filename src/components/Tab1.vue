<script setup>
import { ref } from "vue";
const props = defineProps(["tabList"]);
const tab = props.tabList[0];

const name = ref("");
</script>

<template>
  <div>
    <h1>{{ tab.title }}</h1>
    <input v-model="name" />
  </div>
</template>

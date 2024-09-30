<script setup>
import { ref } from "vue";
import AccountComponent from "./components/AccountComponent.vue";

const accountList = ref([]);

const addAccount = (value) => {
  if (!value) {
    return;
  }

  accountList.value.push(value);
};
</script>

<template>
  <AccountComponent @add-account="addAccount">
    <ul>
      <li v-for="(item, index) in accountList" :key="index">
        {{ item }}
      </li>
    </ul>
  </AccountComponent>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["addAccount"]);
const account = ref("");
const submit = () => {
  emit("addAccount", account.value);
  account.value = "";
};
</script>

<template>
  <label for="account">Account:</label>
  <input id="account" type="text" v-model="account" />
  <button @click="submit">Add</button>
  <slot></slot>
</template>

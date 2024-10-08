<script setup>
const props = defineProps(["name", "email"]);
</script>

<template>
  <div>
    <h1>Account</h1>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

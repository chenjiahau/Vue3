<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink class="nav-item" active-class="active" to="/">Home</RouterLink>
    <RouterLink class="nav-item" active-class="active" to="/about"
      >About</RouterLink
    >
    <RouterLink class="nav-item" active-class="active" to="/articles"
      >Articles</RouterLink
    >
  </nav>
  <router-view />
</template>

<style scoped>
.nav-item {
  margin-right: 10px;
  color: #333;
}

.active {
  font-weight: bold;
  color: #f00;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const gotoIndex = () => {
  router.replace("/");
};
</script>

<template>
  <div>
    <h1>Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <div @click="gotoIndex">Go to Home Page</div>
  </div>
</template>

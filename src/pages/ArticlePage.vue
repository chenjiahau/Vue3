<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useArticlesStore } from "../stores/articles";

const articlesStore = useArticlesStore();
const route = useRoute();

const article = computed(() => {
  return articlesStore.getArticleById(route.params.id);
});
</script>

<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

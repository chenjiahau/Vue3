<script setup>
import { ref, onMounted } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useArticlesStore } from "../stores/articles";

const router = useRouter();
const articlesStore = useArticlesStore();
const newArticle = ref({ title: "", content: "" });

const saveArticle = async (article) => {
  await articlesStore.addArticle(article);
  articlesStore.articleSnapshot();
};

onMounted(() => {
  articlesStore.fetchArticles();
});
</script>

<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articlesStore.articles" :key="article.id">
        <RouterLink
          class="item"
          :to="{ name: 'Article', params: { id: article.id } }"
        >
          {{ article.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
  <div>
    <h2>Add Article</h2>
    <div>
      <label for="new-article-title">Title</label>
      <input id="new-article-title" v-model="newArticle.title" />
    </div>
    <div>
      <label for="new-article-content">Content</label>
      <textarea id="new-article-content" v-model="newArticle.content" />
    </div>
    <button @click="saveArticle(newArticle)">Save</button>
  </div>
</template>

<style scoped>
.item {
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>

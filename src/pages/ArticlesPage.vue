<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useArticlesStore } from "../stores/articles";

const router = useRouter();
const articlesStore = useArticlesStore();
const newArticle = ref({ title: "", content: "" });

const gotoArticle = (article) => {
  router.push({ name: "Article", params: { id: article.id } });
};

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
        <div @click="gotoArticle(article)">
          {{ article.title }}
        </div>
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

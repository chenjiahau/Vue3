import { defineStore } from 'pinia';

export const useArticlesStore = defineStore({
  id: 'articles',
  state: () => ({
    articles: []
  }),
  actions: {
    async fetchArticles() {
      const response = await fetch('http://localhost:8080/articles');
      const articles = await response.json();
      this.articles = articles;
    },
    async addArticle(article) {
      const response = await fetch('http://localhost:8080/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
      });
      const newArticle = await response.json();
      this.articles.push(newArticle);
    }
  },
  getters: {
    getArticleById: (state) => (id) => {
      return state.articles.find((article) => article.id === id);
    }
  }
});
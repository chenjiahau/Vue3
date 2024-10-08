export const saveSnapshot = ({ store }) => {
  store.articleSnapshot = () => {
    const articles = JSON.stringify(store.$state.articles);
    localStorage.setItem(`log-${new Date}`, articles);
  };
}
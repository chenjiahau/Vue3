import { ref } from "vue";

export default function useTab() {
  const tabList = ref([]);
  const selectedTab = ref(0);

  const fetchTabList = async () => {
    const response = await fetch("http://localhost:8080/tabs");
    const data = await response.json();
    tabList.value = data;
  }

  const changeTab = (index) => {
    selectedTab.value = index;
  }

  return {
    tabList,
    selectedTab,
    fetchTabList,
    changeTab
  }
}
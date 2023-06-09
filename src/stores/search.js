import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', () => {
  const keyword = ref('')
  const data = ref([])
  const page = ref(1)
  const loading = ref(false)
  const finished = ref(false)

  function modifyKeyword(k) {
    keyword.value = k
    page.value = 1
    data.value = []
    finished.value = false
  }
  async function fetchRepos() {
    if (!loading.value && !finished.value) {
      try {
        loading.value = true
        const result = await axios.get(
          `https://api.github.com/users/${keyword.value}/repos?per_page=6&page=${page.value}`
        )
        data.value = [...data.value, ...result.data]
        page.value += 1
        if (data.value.length === 0) {
          finished.value = true
        }
        loading.value = false
      } catch (error) {
        console.log(error)
        loading.value = false
      }
    }
  }

  return { keyword, data, loading, modifyKeyword, fetchRepos }
})

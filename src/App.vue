<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import Search from '@/components/UserSearch.vue'
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()
const { loading } = storeToRefs(store)

async function onSearch(keyword) {
  store.modifyKeyword(keyword)
  await store.fetchRepos()
}
</script>

<template>
  <header>
    <v-container>
      <Search :loading="loading" @search="onSearch"></Search>
    </v-container>
  </header>

  <RouterView />
</template>

<style scoped></style>

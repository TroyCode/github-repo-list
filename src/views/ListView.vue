<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()
const { data } = storeToRefs(store)
const scrollComponent = ref(null)

const handleScroll = (e) => {
  const element = scrollComponent.value
  if (element.getBoundingClientRect().bottom <= window.innerHeight) {
    store.fetchRepos()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main ref="scrollComponent">
    <v-container>
      <div class="d-flex align-center flex-column">
        <v-card width="400" v-for="item in data" :key="item.id" class="my-2">
          <v-card-item>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
          </v-card-item>
          <v-card-text
            ><a :href="item.html_url">{{ item.html_url }}</a>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </main>
</template>

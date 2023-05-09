<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['loading'])
const emit = defineEmits(['search'])

const searchText = ref('franklion')

onMounted(() => {
  emit('search', searchText.value)
})
</script>

<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
    <v-card-text>
      <v-text-field
        density="compact"
        variant="solo"
        label="Search Github user"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        :loading="props.loading"
        v-model="searchText"
        @click:append-inner="$emit('search', searchText)"
        @keyup.enter="$emit('search', $event.target.value)"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>

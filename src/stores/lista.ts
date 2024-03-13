import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useListStore = defineStore('list', () => {
  const lista = ref([]);
  const kategoriak = computed(() => lista.value.map(x => x.category))
  const termekek = computed(() => lista.value.find(x => x.category == lista.value).map(x => x.productname));

  axios.get('http://localhost:3000/bevasarlolista')
    .then(x => lista.value = x.data);

  return { lista, kategoriak, termekek }
})

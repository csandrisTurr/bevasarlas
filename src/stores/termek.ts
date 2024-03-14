import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export interface TermekAdat {
  id: number;
  category: string;
  productname: string;
  price: number;
}

export const useTermekStore = defineStore('termek', () => {
  const lista: Ref<Array<TermekAdat>> = ref([]);
  const kategoriak = () => [...new Set(lista.value.map((x) => x.category))];
  const termekek = (kategoria: string) => lista.value.filter((x) => x.category == kategoria)?.map((x) => x.productname);
  const ar = (kategoria: string, termek: string) =>
    lista.value.find((x) => x.category == kategoria && x.productname == termek)?.price;

  axios.get('http://localhost:3000/bevasarlolista').then((x) => (lista.value = x.data));

  return { lista, kategoriak, termekek, ar };
});

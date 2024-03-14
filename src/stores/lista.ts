import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { v4 } from 'uuid';

export interface ListaElem {
  uuid: string;
  category: string;
  productname: string;
  count: string;
}

export const useListaStore = defineStore('lista', () => {
  const lista: Ref<Array<ListaElem>> = ref([]);
  function add(val: ListaElem) {
    val.uuid = v4();
    lista.value.push(val);
  }
  function del(uuid: string) {
    lista.value = lista.value.filter(x => x.uuid != uuid);
  }

  return { lista, add, del };
});

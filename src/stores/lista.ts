import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { v4 } from 'uuid';
import { useTermekStore } from './termek';

export interface ListaElem {
  uuid: string;
  productId: number;
  category: string;
  productname: string;
  count: number;
}

export const useListaStore = defineStore('lista', () => {
  const vegosszeg: Ref<number> = ref(0);
  const lista: Ref<Array<ListaElem>> = ref([]);
  const termekStore = useTermekStore();

  function add(val: ListaElem) {
    val.uuid = v4();
    lista.value.push(val);

    refreshVegosszeg();
  }

  function del(uuid: string) {
    lista.value = lista.value.filter(x => x.uuid != uuid);
    refreshVegosszeg();
  }

  function refreshVegosszeg() {
    vegosszeg.value = 0;

    lista.value.forEach(x => {
      vegosszeg.value += termekStore.ar(x.category, x.productname)! * x.count;
    })
  }

  return { vegosszeg, lista, add, del, refreshVegosszeg };
});

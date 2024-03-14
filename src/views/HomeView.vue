<script setup lang="ts">
import { useListaStore } from '@/stores/lista';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Button from '@/components/Button.vue';
import { useTermekStore } from '@/stores/termek';

const listaStore = useListaStore();
const termekStore = useTermekStore();
</script>

<template>
  <main class="overflow-auto">
    <div class="overflow-auto w-full min-h-[100vh]">
      <section class="flex flex-col p-8 gap-4 m-auto max-w-[1280px]">
        <span class="font-bold text-3xl text-neutral-800">Bevasarlo lista</span>
        <span class="font-bold text-2xl text-neutral-700">Items</span>
        <table>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Count</th>
            <th>Price per piece</th>
            <th>Overall price</th>
            <th>Methods</th>
          </tr>
          <tr v-for="listaElem in listaStore.lista">
            <td>{{ listaElem.category }}</td>
            <td>{{ listaElem.productname }}</td>
            <td>{{ listaElem.count }}</td>
            <td>{{ termekStore.ar(listaElem.category, listaElem.productname) }}</td>
            <td>{{ termekStore.ar(listaElem.category, listaElem.productname) * listaElem.count }}</td>
            <td>
              <span class="material-symbols-outlined text-red-500 cursor-pointer select-none" @click="listaStore.del(listaElem.uuid)"> delete </span>
            </td>
          </tr>
        </table>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
section {
  @apply flex flex-col gap-2;
}

td {
  @apply text-center;
}
</style>

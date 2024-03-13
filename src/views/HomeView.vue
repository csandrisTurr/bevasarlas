<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

let bevasarloLista = ref([]);
</script>

<template>
  <main class="overflow-auto">
    <div class="overflow-auto w-full min-h-[100vh]">
      <section class="flex flex-col p-8 gap-4 m-auto max-w-[1280px]">
        <span class="font-bold text-3xl text-neutral-800">Bevasarlo lista</span>
        <span class="font-bold text-2xl text-neutral-700">Items</span>
        <table>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
          <tr v-for="listaElem in bevasarloLista">
            <th>{{ listaElem.id }}</th>
            <th>{{ listaElem.category }}</th>
            <th>{{ listaElem.productname }}</th>
            <th>{{ listaElem.price }} Ft</th>
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
</style>

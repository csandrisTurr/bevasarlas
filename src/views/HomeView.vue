<script setup lang="ts">
import { useListaStore } from '@/stores/lista';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { useTermekStore } from '@/stores/termek';
import NumericUpDown from '@/components/NumericUpDown.vue';
import { v4 } from 'uuid';

const listaStore = useListaStore();
const termekStore = useTermekStore();
const showSaveModal = ref(false);
const mentesek = ref([]);
const mentesNev = ref('');

function clearAll() {
  listaStore.lista = [];
  listaStore.refreshVegosszeg();
}

function getMentesek() {
  mentesek.value = JSON.parse(localStorage.getItem('mentesek') || '[]');
}

function mentes(nev: string) {
  if (!mentesNev.value) return;

  mentesek.value.push({
    uuid: v4(),
    nev,
    // retard workaround de mukodik
    lista: [...listaStore.lista],
  });

  mentesNev.value = '';

  localStorage.setItem('mentesek', JSON.stringify(mentesek.value));
}

function mentesTorles(uuid: string) {
  mentesek.value = mentesek.value.filter(x => x.uuid != uuid);

  localStorage.setItem('mentesek', JSON.stringify(mentesek.value));
}

function mentesBetoltes(uuid: string) {
  listaStore.lista = mentesek.value.find(x => x.uuid == uuid)!.lista;
}

getMentesek();
</script>

<template>
  <Teleport to=".modalContainer" v-if="showSaveModal">
    <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/30">
      <div class="bg-neutral-50 p-6 rounded flex flex-col gap-4">
        <span class="font-bold text-2xl text-neutral-700">Mentesek</span>
        <hr>
        <div class="flex flex-col gap-4 min-w-[300px]">
          <div class="flex flex-col gap-2">
            <span v-for="mentes in mentesek" :key="mentes.uuid" class="flex items-center justify-between">
              <span>{{ mentes.nev }}</span>
              <span class="flex gap-2">
                <span><Button icon danger @click="() => mentesTorles(mentes.uuid)">delete</Button></span>
                <span><Button icon @click="() => mentesBetoltes(mentes.uuid)">refresh</Button></span>
              </span>
            </span>
          </div>
          <div class="flex gap-4">
            <Input v-model="mentesNev"></Input>
            <Button @click="() => mentes(mentesNev)">Mentes</Button>
          </div>
        </div>
        <hr>
        <span class="flex justify-end">
          <Button @click="showSaveModal = !showSaveModal">Vissza</Button>
        </span>
      </div>
    </div>
  </Teleport>
  <main class="overflow-auto">
    <div class="overflow-auto w-full min-h-[100vh]">
      <section class="flex flex-col p-8 gap-4 m-auto max-w-[1280px]">
        <span class="flex justify-between">
          <span class="font-bold text-3xl text-neutral-800">Bevasarlo lista</span>
          <span class="flex gap-4">
            <Button icon @click="showSaveModal = !showSaveModal">save</Button>
            <Button icon danger @click="clearAll">delete_forever</Button>
          </span>
        </span>
        <hr>
        <span class="font-bold text-2xl text-neutral-700">Elemek</span>
        <table>
          <tr>
            <th>Kategoria</th>
            <th>Termek</th>
            <th>Menny.</th>
            <th>Egysegar</th>
            <th>Ar</th>
            <th>-</th>
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

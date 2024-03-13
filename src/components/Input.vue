<script setup lang="ts">
defineProps(['text']);
const contentModel = defineModel();
</script>

<template>
    <input 
        class="border-teal-500 border-2 hover:border-teal-400 duration-200 active:border-teal-600 cursor-text select-none px-3 py-2 rounded-sm shadow text-neutral-800 font-medium outline-teal-500"
        type="text"
        name=""
        id=""
        v-model="contentModel"
        >
</template>
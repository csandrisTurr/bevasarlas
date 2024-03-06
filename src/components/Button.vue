<script setup lang="ts">
defineProps(['text']);
</script>

<template>
    <span class="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-neutral-50 duration-200 cursor-pointer select-none px-3 py-2 rounded-sm shadow font-medium">
        {{ text }}
    </span>
</template>
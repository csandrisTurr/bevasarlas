<script setup lang="ts">
defineProps(['text']);
</script>

<template>
    <span class="bg-teal-500 hover:bg-teal-400 duration-200 cursor-pointer select-none active:bg-teal-600 px-3 py-2 rounded-sm shadow text-neutral-50 font-medium">
        {{ text }}
    </span>
</template>
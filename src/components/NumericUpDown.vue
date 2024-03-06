<script setup lang="ts">
const props = defineProps(['text']);
const contentModel = defineModel(['content'])

function up() {
    const input = document.getElementById('input');
    input.value = Number(input.value) + 1;
    input.dispatchEvent(new Event('input'));
}

function down() {
    const input = document.getElementById('input');
    input.value = Number(input.value) - 1;
    input.dispatchEvent(new Event('input'));
}
</script>

<template>
    <span class="flex border-teal-500 border-2 hover:border-teal-400 duration-200 active:border-teal-600 rounded-sm shadow">
        <input
            id="input"
            class="cursor-text select-none px-3 py-2 text-neutral-800 font-medium outline-none border-none"
            type="text" name="example" v-model="contentModel" />
        <span class="flex flex-col cursor-pointer select-none">
            <span class="op" @click="up">/\</span>
            <span class="op" @click="down">\/</span>
        </span>
    </span>
</template>

<style lang="scss">
.op {
    @apply px-3 text-sm duration-200 font-bold text-teal-600;
}
</style>
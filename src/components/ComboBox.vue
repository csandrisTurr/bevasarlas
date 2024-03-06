<script setup lang="ts">
const props = defineProps(['text', 'values']);
const contentModel = defineModel('content');

function getValues() {
    if (props.values instanceof Function) {
        return props.values();
    } else {
        return props.values || [];
    }
}
</script>

<template>
    <input 
    class="border-teal-500 border-2 hover:border-teal-400 duration-200 active:border-teal-600 cursor-text select-none px-3 py-2 rounded-sm shadow text-neutral-800 font-medium outline-teal-500"
    type="text" name="example" list="exampleList" v-model="contentModel" />
    <datalist id="exampleList">
        <option v-for="val in getValues()" :key="val" :value="val" />  
    </datalist>
</template>
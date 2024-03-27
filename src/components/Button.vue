<script setup lang="ts">
const props = defineProps({
  text: String,
  icon: Boolean,
  danger: Boolean,
});

function getColor() {
  return props.danger ? 'red' : 'teal';
}
</script>

<template>
  <span
    :class="`bg-${getColor()}-500 hover:bg-${getColor}-400 active:bg-${getColor()}-600 text-neutral-50 duration-200 cursor-pointer select-none px-3 py-2 rounded-sm shadow font-medium ${icon ? 'material-symbols-outlined' : ''}`"
  >
    <slot></slot>
  </span>
</template>

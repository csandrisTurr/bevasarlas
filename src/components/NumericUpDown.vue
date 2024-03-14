<script setup lang="ts">
const props = defineProps({
  text: String,
  can_go_negative: Boolean,
});
const contentModel = defineModel();

function up() {
  const input = document.getElementById('input');
  input.value = Number(input.value) + 1;
  input.dispatchEvent(new Event('input'));
}

function down() {
  const input = document.getElementById('input');
  input.value = Number(input.value) - 1;

  // handle negative
  if (!props.can_go_negative && input.value < 0) {
    input.value = 0;
  }

  input.dispatchEvent(new Event('input'));
}
</script>

<template>
  <span
    class="flex border-teal-500 border-2 hover:border-teal-400 duration-200 rounded-sm focus:rounded-sm shadow w-full"
  >
    <input
      id="input"
      class="cursor-text select-none px-3 py-2 text-neutral-800 font-medium outline-none border-none w-full"
      type="text"
      name="example"
      v-model="contentModel"
    />
    <span class="flex flex-col cursor-pointer select-none">
      <span class="op material-symbols-outlined" @click="up">keyboard_arrow_up</span>
      <span class="op material-symbols-outlined" @click="down">keyboard_arrow_down</span>
    </span>
  </span>
</template>

<style lang="scss">
.op {
  @apply px-1 text-sm duration-200 font-bold text-teal-600 hover:text-teal-400 active:text-teal-700;
}
</style>

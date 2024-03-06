<script setup lang="ts">
import ComboBox from '@/components/ComboBox.vue';
import NumericUpDown from '@/components/NumericUpDown.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <main class="flex flex-col p-8 gap-4 m-auto max-w-[1280px] h-[100vh]">
    <span class="font-bold text-3xl text-neutral-800">Bevasarlo lista</span>
    <section>
      <span class="font-bold text-2xl text-neutral-700">Fieldek</span>
      <div class="flex gap-4 justify-stretch">
        <span class="field">
          <span>Kategoria</span>
          <ComboBox></ComboBox>
        </span>
        <span class="field">
          <span>Termek</span>
          <ComboBox></ComboBox>
        </span>
        <span class="field">
          <span>Mennyiseg</span>
          <NumericUpDown></NumericUpDown>
        </span>
        <span class="field">
          <span>Termek</span>
          <ComboBox></ComboBox>
        </span>
        <span class="field">
          <span>Termek</span>
          <ComboBox></ComboBox>
        </span>
        <span class="field justify-end">
          <span>⠀</span>
          <Button class="material-symbols-outlined text-center h-max flex-grow">add</Button>
        </span>
      </div>
    </section>
    <section>
      <span class="font-bold text-2xl text-neutral-700">Tablazat</span>
      <table>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </table>
    </section>
  </main>
</template>

<style lang="scss">
section {
  @apply flex flex-col gap-2;
}

.field {
  @apply flex flex-col gap-1 w-1/6;

  & > span {
    @apply font-medium;
  }
}
</style>
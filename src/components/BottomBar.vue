<script setup lang="ts">
import ComboBox from '@/components/ComboBox.vue';
import NumericUpDown from '@/components/NumericUpDown.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <main class="p-4 bg-neutral-100 border-t-[1px]">
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
          <span>Reszosszeg</span>
          <span class="label">
            <span>1 000 Ft</span>
          </span>
        </span>
        <span class="field">
          <span>Vegosszeg</span>
          <span class="label">
            <span>1 000 Ft</span>
          </span>
        </span>
        <span class="field justify-end">
          <span>⠀</span>
          <Button class="material-symbols-outlined text-center h-max flex-grow">add</Button>
        </span>
      </div>
    </main>
</template>

<style scoped lang="scss">
.label {
  @apply text-2xl font-bold self-center h-[100%] flex items-center w-full;
}
</style>
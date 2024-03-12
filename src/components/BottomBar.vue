<script setup lang="ts">
import ComboBox from '@/components/ComboBox.vue';
import NumericUpDown from '@/components/NumericUpDown.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <main class="p-4 bg-neutral-100 border-t-[1px]">
      <div class="flex gap-4 justify-stretch max-md:flex-wrap">
        <div class="fields flex gap-4 justify-stretch w-3/6 max-md:w-full">
          <span>
            <span>Kategoria</span>
            <ComboBox></ComboBox>
          </span>
          <span>
            <span>Termek</span>
            <ComboBox></ComboBox>
          </span>
          <span>
            <span>Mennyiseg</span>
            <NumericUpDown></NumericUpDown>
          </span>
        </div>
        <div class="labels flex gap-4 justify-evenly w-2/6 max-md:w-full max-md:justify-around">
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
        </div>
        <div class="flex flex-col gap-1 max-md:w-full lg-max-w-[200px] w-1/6">
          <span class="flex flex-col justify-end w-full">
            <span class="max-md:hidden">⠀</span>
            <Button class="material-symbols-outlined text-center h-max flex-grow">add</Button>
          </span>
        </div>
      </div>
    </main>
</template>

<style scoped lang="scss">

.fields > span, .labels > span {
  @apply flex flex-col gap-1;

  & > span {
    @apply font-medium;
  }
}

.fields > span {
  @apply w-1/3;
}

.label {
  @apply text-2xl font-bold self-center h-[100%] flex items-center w-full;
}
</style>
<script setup lang="ts"></script>

<template>
  <main class="overflow-auto">
    <div class="overflow-auto w-full min-h-[100vh]">
      <section class="flex flex-col p-8 gap-4 m-auto max-w-[1280px]">
        <span class="font-bold text-3xl text-neutral-800">Bevasarlo lista</span>
        <span class="font-bold text-2xl text-neutral-700">Items</span>
        <table>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </table>
      </section>
    </div>
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

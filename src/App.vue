<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import BottomBar from './components/BottomBar.vue';
</script>

<template>
  <RouterView class="page" />
  <BottomBar class="bottombar"/>
</template>

<style scoped>
.page {
  @apply overflow-auto grow-0;
}

.bottombar {
  width: 100%;
}
</style>

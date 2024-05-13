<template>
  <div class="wrapper">
    <!-- Основное содержимое (MainContent.vue) -->
    <router-view />
    <SidebarView />
  </div>
</template>

<script setup lang="ts">
import SidebarView from './components/SidebarView.vue'
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 300px;
  height: auto;
}
</style>

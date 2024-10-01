<template>
  <v-app>
    <v-main>
      <div class="main-content">
        <AppHeader />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.v-application {
  background-color: #e0e0e0; /* Imposta il colore di sfondo */
}

.main-content {
  margin: 4rem; /* Margine di 2rem per tutti i contenuti interni */
}
</style>

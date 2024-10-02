<template>
  <v-app>
    <v-main>
      <div class="main-content">
        <AppHeader />
        <AppTecnologies />
        <AppWork />
        <AppFooter />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppTecnologies from './components/AppTechnologies.vue'
import AppWork from './components/AppWork.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.v-application {
  background-color: #e0e0e0;
}
.main-content {
  margin: 4rem;

  @media (max-width: 600px) {
    margin: 2rem;
  }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

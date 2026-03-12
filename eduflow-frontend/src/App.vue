<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import CardsSection from './components/CardsSection.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-container">

    <div class="top-section">
      <Header />
      <Hero />
    </div>

    <main>
      <CardsSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  width: 100%;
  background-color: var(--text-primary);
}

.top-section {
  width: 100%;
  background: linear-gradient(165deg, #1c52e1, #7207c6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
}
</style>
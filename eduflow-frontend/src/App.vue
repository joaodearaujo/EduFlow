<script setup lang="ts">
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import CardsSection from './components/CardsSection.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-container">
    <div class="first-section">
      <Header />
      <Main />
    </div>
    
    <CardsSection />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #ffffff; 
}

.app-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.first-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(165deg, #1c52e1, #7207c6);
    padding: 0 20px;
}
</style>
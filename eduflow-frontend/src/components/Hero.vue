<script lang="ts" setup>
import FormularioMatricula from './FormularioMatricula.vue';

const title = "Transform Your Future with Modern Education";
const subtitle = "Join thousands of students advancing their careers through our innovative online learning platform.";
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <header class="hero__text-container">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__subtitle">{{ subtitle }}</p>
      </header>
      
      <div class="hero__actions">
        <button class="hero__button hero__button--primary">
          Watch a Demo
        </button>
      </div>
    </div>

    <aside class="hero__form-wrapper">
      <FormularioMatricula />
    </aside>
  </section>
</template>

<style scoped>

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  gap: 40px;
}

.hero__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 0;
}

.hero__text-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  text-align: left; 
}

.hero__title {
  font-size: clamp(32px, 8vw, 64px);
  color: var(--text-primary);
  line-height: 1.1;
  font-weight: 800;
}

.hero__subtitle {
  color: var(--text-secondary);
  font-weight: 400;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.5;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero__button {
  font-size: 18px;
  padding: 16px 32px;
  border-radius: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.hero__button--primary {
  color: var(--accent-color);
  background-color: var(--text-primary);
}

.hero__form-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

</style>
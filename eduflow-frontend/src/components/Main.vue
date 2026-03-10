<script lang="ts" setup>
const title = "Transform Your Future with Modern Education";
const subtitle = "Join thousands of students advancing their careers through our innovative online learning platform.";
</script>

<template>
  <main class="hero">
    <div class="hero__text-container">
      <h1 class="hero__title">{{ title }}</h1>
      <p class="hero__subtitle">{{ subtitle }}</p>
    </div>
    
    <div class="hero__button-area">
      <button class="hero__button hero__button--get-started">Get Started Free</button>
      <button class="hero__button hero__button--watch-demo">Watch Demo</button>
    </div>
  </main>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 40px 20px;
  text-align: center;
}

.hero__text-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
}

.hero__title {
  font-size: clamp(32px, 8vw, 64px);
  color: #ffffff;
  line-height: 1.1;
  font-weight: 800;
}

.hero__subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 1.5;
}

.hero__button-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

.hero__button--get-started {
  color: #155dfc;
  background-color: #ffffff;
}

.hero__button--watch-demo {
  color: #ffffff;
  background-color: #4a4ee0;
}

@media (max-width: 480px) {
  .hero__button-area {
    flex-direction: column;
    width: 100%;
  }

  .hero__button {
    width: 100%;
  }
}
</style>
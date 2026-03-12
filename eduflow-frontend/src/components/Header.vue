<script lang="ts" setup>
    const navLinks = [
        {name: 'Home', href: '#'},
        {name: 'Courses', href: '#'},
        {name: 'About Us', href: '#'},
    ];

    const logo = 'EduFlow';
</script>

<template>
    <header class="header">   
        <div class="header__logo-wrapper">
                <a class="header__logo-link" href="#">{{logo}}</a>
        </div>

        <nav class="header__nav">
            <ul class="header__ul">
                <li class="header__li" v-for="link in navLinks">
                    <a class="header__link"
                    :key="link.name"
                    :href="link.href"
                    >{{ link.name }}</a>
              </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

.header {
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px auto;
  background-color: var(--text-primary);
  border-radius: 35px;
  padding: 0 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.header__logo-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}

.header__logo-link {
  font-size: 35px;
  font-weight: 800;
  text-decoration: none;
  color: var(--primary-bg);
  margin: auto 0;
  cursor: pointer;
}

.header__nav {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
}

.header__ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__li {
  list-style: none;
}

.header__link {
  text-decoration: none;
  color: var(--primary-bg);
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 6px 12px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.header__link:hover {
  color: var(--text-primary);
  background-color: var(--accent-color);
}

.header__button-area {
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: space-between;
}

.header__button {
  color: var(--primary-bg);
  background-color: var(--text-primary);
  font-size: 16px;
  border-radius: 12px;
  padding: 6px 12px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: none;
}

.header__button:hover {
  color: var(--text-primary);
  background-color: var(--primary-bg);
  transform: translateY(-2px)
}

.header__button--login {
  border: 1px solid var(--primary-bg);
}

.header__button--register {
  background-color: var(--accent-color);
  color: var(--text-primary);
}
</style>
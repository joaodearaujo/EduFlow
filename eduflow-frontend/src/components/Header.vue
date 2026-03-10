<script lang="ts" setup>
    const navLinks = [
        {name: 'Home', href: '#'},
        {name: 'Courses', href: '#'},
        {name: 'About Us', href: '#'},
    ];

    const logo =  'EduFlow';
</script>

<template>
    <header>
        <h1 class="header__logo">{{logo}}</h1>

        <nav class="header__nav">
            <a v-for="link in navLinks" 
                :key="link.name" 
                :href="link.href"
                class="header__link"
            >
                {{ link.name }}
            </a>
        </nav>
        
        <div class="header__button-area">
            <button class="header__button header__button--login">Sign-in</button>
            <button class="header__button header__button--register">Register</button>
        </div>
    </header>
</template>

<style scoped>
    header {
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px auto;
    background-color: #ffff;
    border-radius: 35px;
    padding: 0 24px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.header__nav {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__link {
    text-decoration: none;
    color: #000000;
    border: 1px solid #0000;
    border-radius: 12px;
    padding: 6px 12px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
}   

.header__link:hover {
    color: #fff;
    background-color: #4a4ee0;
}

.header__button-area{
    display: flex;
    align-items: center;
    gap: 18px;
    justify-content: space-between;   
}

.header__button {
    color: #000000;
    background-color: #ffffff;
    font-size: 16px;
    border-radius: 12px;
    padding: 6px 12px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: none;
}

.header__button:hover {
    color: #fff;
    background-color: #000000;
    transform: translateY(-2px)
}

.header__button--login {
    border: 1px solid #000000;
}

.header__button--register {
    background-color: #4a4ee0;
    color: #ffffff;
}
</style>
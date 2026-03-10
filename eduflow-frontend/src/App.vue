<script setup lang="ts">
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Enrollment from './components/Enrollment.vue';
</script>

<template>
<div class="app-container">
    <section>
        <Header/>
        <Main/>
    </section>
    <Enrollment/>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    /* border: 1px solid red; */
    font-family: 'Poppins', Sans Serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::-webkit-scrollbar {
    display: none;
}

.app-container {
    height: 100vh;
    width: 100vw;
    background-color: gray;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px;
}

section {
    width: 100%;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(165deg, rgba(28, 82, 225), rgba(114, 7, 198)) 
}
</style>
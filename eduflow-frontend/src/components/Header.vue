<template>
    <header>
        <h1 class="header__logo">EduFlow</h1>
        <nav class="header--nav">
            <a href="" class="header__link">Home</a>
            <a href="" class="header__link">Courses</a>
            <a href="" class="header__link">About</a>
        </nav>
        
        <div class="header__profile-section">
            <img src="#" alt="" class="header__profile-icon">
        </div>
    </header>
</template>

<style>
    header {
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 12px 0;
    background-color: #ffff;
    border-radius: 35px;
    padding: 0 24px;
}

nav {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__link {
    text-decoration: none;
    color: #000000;
    border-radius: 14px;
    padding: 6px 12px;
    font-weight: 500;
    transition: all 0.5s ease-in-out;
}

.header__link:hover {
    color: #fff;
    background-color: #000000;
}

.header__profile-section {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.header__profile-icon {
    height: 36px;
    width: 36px;
}
</style>
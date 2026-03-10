<script lang="ts" setup>
const currentYear = new Date().getFullYear();

const footerLinks = [
    { title: 'Courses', links: ['Web Development', 'Data Science', 'UI/UX Design'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Contact'] },
    { title: 'Support', links: ['Help Center', 'Terms of Service', 'Privacy Policy'] }
]
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__brand">
                <h2 class="footer__logo">EduFlow</h2>
                <p class="footer__description">Empowering futures through accessible and innovative online education.</p>
            </div>

            <div class="footer__nav">
                <div v-for="group in footerLinks" :key="group.title" class="footer__group">
                    <h3 class="footer__group-title">{{ group.title }}</h3>
                    <ul class="footer__list">
                        <li v-for="link in group.links" :key="link">
                            <a href="#" class="footer__link">{{ link }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <p>&copy; {{ currentYear }} EduFlow. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    width: 100%;
    background: rgba(0, 0, 0);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 60px 5% 20px;
}

.footer__container {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
}

.footer__brand {
    flex: 1;
    min-width: 250px;
}

.footer__logo {
    font-size: 28px;
    color: #ffffff;
    font-weight: 800;
    margin-bottom: 16px;
}

.footer__description {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    max-width: 300px;
}

.footer__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    flex: 2;
    justify-content: flex-end;
}

.footer__group {
    min-width: 140px;
}

.footer__group-title {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
}

.footer__list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer__link {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer__link:hover {
    color: #ffffff;
}

.footer__bottom {
    max-width: 1200px;
    margin: 60px auto 0;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
}
</style>
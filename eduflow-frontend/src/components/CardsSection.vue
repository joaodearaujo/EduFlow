<script lang="ts" setup>
const title = "Why Choose EduFlow?"
const subtitle = "Discover the benefits that make us the preferred choice for online learning"

const cardsInfo = [
    { 
        title: 'Flexible Learning', 
        cardDescription: 'Study at your own pace with 24/7 access to course materials. Balance education with your work and personal life seamlessly.',
        icon: '🕒'
    },
    { 
        title: 'Industry Certificates', 
        cardDescription: 'Earn recognized certifications upon completion. Boost your resume and stand out in the competitive job market.',
        icon: '🎓'
    },
    { 
        title: 'Expert Instructors', 
        cardDescription: 'Learn from industry professionals with years of real-world experience. Get personalized feedback and mentorship.',
        icon: '👨‍🏫'
    }
]
</script>

<template>
    <section class="cards">
        <header class="cards__header">
            <div class="cards__text-wrapper">
                <h2 class="cards__main-title">{{ title }}</h2>
                <p class="cards__main-subtitle">{{ subtitle }}</p>
            </div>
        </header>

        <div class="cards__grid">
            <article 
                v-for="{ icon, title, cardDescription } in cardsInfo" 
                :key="title" 
                class="card"
            >
                <span class="card__icon" aria-hidden="true">{{ icon }}</span>
                <h3 class="card__title">{{ title }}</h3>
                <p class="card__description">{{ cardDescription }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>

.cards {
    width: 100%;
    max-width: 1200px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding: 0 5%;
}

.cards__header {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
}

.cards__text-wrapper {
    max-width: 600px;
}

.cards__main-title {
    font-size: clamp(28px, 4vw, 40px);
    color: #000000;
    margin-bottom: 12px;
}

.cards__main-subtitle {
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
}

.cards__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    width: 100%;
}

.card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

}

.card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    
}

.card__icon {
    font-size: 32px;
}

.card__title {
    font-size: 22px;
    color: #000000;
    font-weight: 700;
}

.card__description {
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.6;
    font-size: 15px;
}
</style>
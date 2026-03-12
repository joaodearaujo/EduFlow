<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { checkEmail } from '../utils/Validators';
import { checkNumber } from '../utils/Validators';

const title = "Start Your Learning Journey";
const subtitle = "Fill out the form below to enroll in your desired course!";
const isSuccess = ref(false);

const formItems = ref([
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Peter', value: '' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', value: '' },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+55 21 987654321', value: '' },
    { 
        id: 'course', 
        label: 'Course', 
        type: 'select', 
        placeholder: 'Choose a Course', 
        options: [] as string[],
        value: '' 
    }
]);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/cursos');
        const courseField = formItems.value.find(item => item.id === 'course');
        if (courseField) {
            courseField.options = response.data.map((curso: {label: string}) => curso.label);
        }
    } catch (error) {
        console.error("Erro ao procurar cursos na API:", error)
    }
})

const handleEnroll = async () => {
    const formData = formItems.value.reduce((acc, item) => {
        acc[item.id] = item.value;
        return acc;
    }, {} as Record<string, string>);

    const emailValue = formData.email || '';
    const phoneValue = formData.phone || '';

    if (!checkEmail(emailValue)) {
        alert('This e-mail cannot be accepted. Verify if you are using a correct domain and try again.')
        return
    }

    if (!checkNumber(phoneValue)) {
        alert('This phone number cannot be accepted. Try again.')
        return
    }

    try {
        

        const response = await axios.post('http://localhost:3000/matricula', formData);

        if (response.status === 201) {
            isSuccess.value = true;

            formItems.value.forEach(item => item.value = '');

            setTimeout(() => {
                isSuccess.value = false;
            }, 5000)
        }
    } catch (error) {
        alert("Erro ao solicitar matrícula. Certifique-se de que o servidor está online.")
    }
};

</script>

<template>
    <form @submit.prevent="handleEnroll">
        <div v-if="isSuccess" class="form__success-msg">
            Enrolment successfully carried out! 🎉
        </div>

        <h2 class="form__title">{{ title }}</h2>
        <p class="form__subtitle">{{ subtitle }}</p>

        <div class="form__section" v-for="item in formItems" :key="item.id">
            <label :for="item.id" class="form__label">{{ item.label }}</label>

            <select v-if="item.type === 'select'"
                :id="item.id"
                v-model="item.value"
                class="form__input"
                required>
                <option value="" disabled selected>{{ item.placeholder }}</option>
                <option v-for="option in item.options" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>

            <input v-else
                class="form__input"
                :id="item.id"
                :type="item.type"
                :placeholder="item.placeholder"
                v-model="item.value"
                required
            >
        </div>
        
        <button type="submit" class="form__button">Enroll Now</button>
    </form>
</template>

<style scoped>
form {
    max-width: 700px;
    width: 90%;
    margin: 36px auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px 24px;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background: var(--text-primary);
    position: relative;
}

.form__success-msg {
    position: fixed;
    width: 100%;
    max-width: 600px;
    padding: 12px;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.form__section {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form__label {
    font-size: 12px;
    font-weight: 600;
}

.form__input {
    height: 50px;
    border-radius: 12px;
    padding: 0 12px;
    border: 1px solid var(--border-color);
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
}

.form__input:focus {
    border-color: var(--accent-color);
}

.form__button {
    height: 50px;
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
    border-radius: 12px;
    background: linear-gradient(165deg, var(--accent-color), #7207c6);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    cursor: pointer;
}

.form__button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, var(--accent-color), #0077ff);
}
</style>
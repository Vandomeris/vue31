<template>
    <h2 class="text-center text-2xl font-bold">Профиль пользователя - {{ userData.username }}</h2>
    <select @change="changeUser($event.target.value)">
        <option v-for="user in usersList" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div>
        <p>ID: {{ userData.id }} </p>
        <p>Имя: {{ userData.name }}</p>
        <p>Ник: {{ userData.username }}</p>
        <p>Телефон: {{ userData.phone }}</p>
        <p>E-mail: {{ userData.email }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const userData = ref({})
const usersList = ref([])

const route = useRoute()
const router = useRouter()

async function getUsers() {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`)
    usersList.value = await resp.json()
}

async function getUser(userId) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    userData.value = await resp.json()
}

function changeUser(userId) {
    getUser(userId)
    router.push(`/user/${userId}`)
}

onMounted(() => {
    getUser(route.params.id)
    getUsers()
})

</script>
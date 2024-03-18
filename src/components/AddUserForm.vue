<template>
    <form @submit.prevent="addUser" class="flex flex-col gap-y-4 w-1/3 mx-auto">
        <input required class="block border py-2 px-4" v-model="newUser.fio" type="text" placeholder="Имя Фамилия">
        <input required class="block border py-2 px-4" v-model="newUser.email" type="text" placeholder="ПОчта">
        <input required class="block border py-2 px-4" v-model="newUser.nick" type="text" placeholder="Ник">
        <button class="border py-2 px-4 w-fit mx-auto bg-orange-400 text-white">Создать</button>
    </form>

    <p>Всего добавили пользователей за эту сессию: {{ userStore.usersCount }}</p>
</template>

<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import { ref } from 'vue';

const userStore = useUsersStore()


const newUser = ref({
    fio: '',
    email: '',
    nick: ''
})

function addUser() {
    userStore.users.push(newUser.value)
    userStore.doSomth()
}




</script>
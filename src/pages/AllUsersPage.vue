<template>
    <div v-for="store in userStore.users" :key="store.fio">
        <p>{{ store.fio }}</p>
        <p>{{ store.email }}</p>
        <p>{{ store.nick }}</p>
    </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/UsersStore';


const userStore = useUsersStore()



</script>
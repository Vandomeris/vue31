<template>
    <RouterLink class=" hover:underline underline-offset-4" :to="link">{{ text }}</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    link: String,
    text: String
})
</script>
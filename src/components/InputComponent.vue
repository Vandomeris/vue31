<template>
    <h2>Тест работы инпута в Vue</h2>

    <input type="checkbox" v-model="showText">
    <p v-if="showText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum odit magnam? Distinctio fuga,
        natus qui
        deleniti, blanditiis quos magnam ullam vero debitis quam unde animi id soluta impedit optio!</p>
    <p v-else>Нажми на кнопку выше!</p>
</template>

<script setup>
import { ref } from 'vue';

const showText = ref(false)


</script>
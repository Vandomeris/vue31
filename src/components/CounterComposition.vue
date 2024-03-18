<template>
    <h1>Счетчик с использованием Composition API</h1>
    <p>Счет: {{ count }}</p>
    <button @click="increment">+++</button>
    <button @click="decrement">---</button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(2)

function increment() {
    if (count.value < 20)
        count.value++
}
function decrement() {
    if (count.value > 0)
        count.value--
}



</script>
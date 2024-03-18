<template>
    <div>
        <button @click="show = !show">Показать</button>
        <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt, quasi rerum voluptates
            numquam eos
            fugiat voluptatum pariatur obcaecati iste doloremque animi deserunt, nam tempora hic similique </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const show = ref(false)

</script>

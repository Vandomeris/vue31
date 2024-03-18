<template>
    <div class="relative">
        <button @click="show = !show" class="font-bold">English ▼</button>
        <ul class="absolute top-full" v-show="show">
            <li><button>Русский</button></li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const show = ref(false)

</script>
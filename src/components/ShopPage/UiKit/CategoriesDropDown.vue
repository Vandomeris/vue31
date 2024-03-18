<template>
    <div v-click-outside="show = false">
        <button @click="show = !show">{{ categoryTitle }}</button>
        <ul class="" v-show="show">
            <li v-for="link in links" :key="link.link"><a :href="link.link">{{ link.title }}</a></li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';


defineProps({
    categoryTitle: String,
    links: Array
})

const show = ref(false)

</script>
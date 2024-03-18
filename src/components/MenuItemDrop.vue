<template>
    <div>
        <button @click="handleClick">{{ title }}</button>
        <div v-show="showMenu" class="flex flex-col">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';



const showMenu = ref(false)

const emit = defineEmits(['menuItem'])
function handleClick() {
    showMenu.value = !showMenu.value
    emit('menuItem', showMenu)
}

defineProps({
    title: String
})


</script>
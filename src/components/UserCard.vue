<template>
    <div class="card">
        <p>{{ name }}</p>
        <p>{{ email }}</p>
        <p>{{ username }}</p>
    </div>
</template>

<script setup>

defineProps({
    name: String,
    email: String,
    username: String
})

</script>

<style scoped>
.card {
    width: 30%;
    padding: 20px;
    border: 1px solid darkblue;
    border-radius: 15px;
}
</style>
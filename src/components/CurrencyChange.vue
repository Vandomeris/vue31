<template>
    <input type="number" v-model="rubles" placeholder="Введите количество рублей">

    <p>Вы изменяли количество рублей: {{ count }} раз</p>
    <h2>Вы ввели:</h2>

    <div v-if="rubles" class="flex justify-between">
        <div>
            <p>Рублей</p>
            <p>{{ rubles }}₽</p>
        </div>

        <div>
            <p>Долларов</p>
            <p>{{ dollars }}</p>
        </div>
        <div>
            <p>Биткоин</p>
            <p>{{ btc }}</p>
        </div>

    </div>
</template>

<script setup >
import { computed, ref, watch, watchEffect } from 'vue';

const rubles = ref('')
const count = ref(0)

const dollars = computed(() => {
    const value = rubles.value / 94
    return value.toFixed(2)
})
const btc = computed(() => rubles.value * (1 / 6008400))

function получитьСвежиеКотировки() {
    // Получает свежие курсы валют
}


watchEffect(() => {
    // что-то просисходит
})

watch([rubles], () => {
    count.value++
})


</script>


<script>


</script>
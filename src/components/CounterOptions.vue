<template>
    <h1>Счетчик с использованием Options API</h1>
    <p>Счет: {{ count }}</p>
    <button @click="increment">+++</button>
    <button @click="decrement">---</button>
</template>

<script>
export default {
    data() {
        return {

            count: 1

        }
    },
    methods: {
        increment() {
            if (this.count < 20)
                this.count++
        },
        decrement() {
            if (this.count > 0)
                this.count--
        }
    }

}
</script>
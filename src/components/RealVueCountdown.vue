<template>
    <div class="flex gap-x-4">
        <div>
            <p>Days</p>
            <p class="font-bold text-2xl">{{ countDown.days }}</p>
        </div>
        <div>
            <p>Hours</p>
            <p class="font-bold text-2xl">{{ countDown.hours }}</p>
        </div>
        <div>
            <p>Minutes</p>
            <p class="font-bold text-2xl">{{ countDown.minutes }}</p>
        </div>
        <div>
            <p>Seconds</p>
            <p class="font-bold text-2xl">{{ countDown.seconds }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const countDown = reactive({
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
})

const props = defineProps({
    targetDate: String
})

var countDownDate = new Date(props.targetDate).getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    countDown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countDown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countDown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    countDown.seconds = Math.floor((distance % (1000 * 60)) / 1000);


}, 1000);
</script>
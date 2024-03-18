<script setup>
import CategoriesDropDown from './UiKit/CategoriesDropDown.vue';

</script>

<template>
    <div class="flex flex-col gap-y-4">
        <CategoriesDropDown categoryTitle="Woman`s Fashion" :links="[
            { title: 'Coats', link: '#' },
            { title: 'Shirts', link: '#' },
            { title: 'Шлепенцы', link: '#' }
        ]" />
        <CategoriesDropDown categoryTitle="Woman`s Fashion" :links="[
            { title: 'Coats', link: '#' },
            { title: 'Shirts', link: '#' },
            { title: 'Шлепенцы', link: '#' }
        ]" />

        <a href="#">Electronics</a>
        <a href="#">Home & Lifestyle</a>
        <a href="#">Medicine</a>
        <a href="#">Sports & Outdoor</a>
        <a href="#">Baby’s & Toys</a>
        <a href="#">Groceries & Pets</a>
        <a href="#">Health & Beauty</a>
    </div>
</template>
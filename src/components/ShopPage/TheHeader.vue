<template>
    <header class="container mx-auto px-5 flex items-center justify-between pb-6 pt-24">
        <div class=" text-2xl font-bold">Exclusive</div>
        <nav>
            <ul class="flex items-center gap-x-12">
                <li>
                    <HeaderLink link="/" text="Home" />
                </li>
                <li>
                    <HeaderLink link="/users" text="Users" />
                </li>
                <li>
                    <HeaderLink link="/allusers" text="All Users" />
                </li>
                <li>
                    <HeaderLink link="/about" text="About" />
                </li>
                <li>
                    <HeaderLink link="#" text="Sign Up" />
                </li>
            </ul>
        </nav>
        <div class="flex items-center gap-x-6">



            <div class="relative">
                <input placeholder="What are you looking for?"
                    class=" rounded-md min-w-64 pr-10 py-2.5 pl-5 outline-none bg-[#f5f5f5]" type="text">
                <button class="absolute top-1/2 transform -translate-y-1/2 right-4">
                    <SearchIcon />
                </button>
            </div>



            <a href="#">
                <HeartIcon />
            </a>
            <RouterLink to="/cart">
                <CartIcon />
            </RouterLink>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import CartIcon from './Icons/CartIcon.vue';
import HeartIcon from './Icons/HeartIcon.vue';
import SearchIcon from './Icons/SearchIcon.vue';
import HeaderLink from './UiKit/HeaderLink.vue';

</script>
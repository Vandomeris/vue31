import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUsersStore = defineStore('UsersStore', () => {

    const users = ref([])

    const usersCount = computed(() => users.value.length)

    function doSomth() {
        console.log(users.value);
    }

    return {
        users,
        usersCount,
        doSomth
    }
})
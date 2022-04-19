<template>
    <div class="bg-black w-full">
        <div class="container mx-auto">  
            <div class="flex items-center justify-between pt-5 pb-3">
                <img src="../assets/logo.png" alt="">
                <div class="flex items-center">
                    <div class="text-white flex items-center mr-4">
                    <i class="fas fa-search"></i>
                    <p class="ml-2">Поиск</p>
                </div>
                <router-link class="text-white flex items-center" to="/">
                    <i class="fa-regular fa-heart"></i>
                    <p class="ml-2">Избранное {{ objectsCount }}</p>
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters (['objectsCount'])
}
</script>

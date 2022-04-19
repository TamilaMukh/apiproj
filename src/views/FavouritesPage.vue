<template>
    <div>
        <navbar />
        <div class="container mx-auto my-10">
            <div class="text-center my-14"><p class="text-black font-semibold text-xl">Избранное</p></div>
            <div class="flex flex-wrap justify-between">
                <div class="w-1/5" v-for="photo of allImages" :key="photo.id">
                    <img @click="$router.push( {name: 'single', params: {item: photo} } )" class="w-full p-2 object-cover h-full" :src="photo.urls.regular" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navbar from "../components/NavbarComp.vue";

export default {
    name: "FavoritesPage",
    components: {
    navbar,
    },
    computed: mapGetters (['allImages'])
}
</script>
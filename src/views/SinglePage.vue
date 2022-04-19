<template>
  <div>
    <navbar />
    <div class="relative">
      <div class="set-absolute">
        <img
          class="w-full h-full object-cover"
          :src="this.$route.params.item.urls.regular"
          alt=""
        />
      </div>
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              class="w-14 h-14 rounded-md mr-2 my-12"
              :src="this.$route.params.item.user.profile_image.medium"
              alt=""
            />
            <div>
              <p class="text-xl text-white">{{ this.$route.params.item.user.username }}</p>
              <p class="text-base text-white" v-if="this.$route.params.item.user.twitter_username != null">
                twitter: @{{ this.$route.params.item.user.twitter_username }}
              </p>
              <p class="text-base text-white" v-if="this.$route.params.item.user.instagram_username != null">
                instagram: @{{ this.$route.params.item.user.instagram_username }}
              </p>
            </div>
          </div>
          <div class="items-center flex">
            <i class="fas fa-heart text-black text-xl bg-white py-1 px-2 rounded-md mr-4"></i>
            <p @click="addImage(setItem)" class="font-semibold text-xl text-white bg-orange-700 py-1 px-2 rounded-md">В избранное</p>
          </div>
        </div>
        <img class="w-full" :src="this.$route.params.item.urls.regular" alt="" />
      </div>
    </div>  
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import navbar from "../components/NavbarComp.vue";

export default {
  name: "SinglePage",
  components: {
    navbar,
  },
  data() {
    return {
      setItem: this.$route.params.item
    }
  },
  methods: mapActions(['addImage']),
  computed: mapGetters(['allImages'])
};
</script>
<template>
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
          <img class="w-14 h-14" :src="this.$route.params.item.user.profile_image.medium" alt="" />
          <div>
            <p class="text-xl text-white">{{ this.$route.params.item.user.username }}</p>
            <p class="text-base text-white" v-if="this.$route.params.item.user.twitter_username != null">
              twitter: {{ this.$route.params.item.user.twitter_username }}
            </p>
            <p class="text-base text-white" v-if="this.$route.params.item.user.instagram_username != null">
              instagram: {{ this.$route.params.item.user.instagram_username }}
            </p>
          </div>
        </div>
      </div>
      <img class="w-full" :src="this.$route.params.item.urls.regular" alt="" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "SinglePage",

};
</script>
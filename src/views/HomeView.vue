<template>
  <div class="home">
    <navbar />
    <div class="bg-set py-24">
      <div class="relative w-1/2 mx-auto">
        <input @keyup="setQuery()" v-model="search" type="text" class="w-full border p-2" placeholder="Поиск" />
        <i class="fa fa-magnifying-glass abs"></i>
      </div>
    </div>
    <p @click="addChisla()">{{ text }}</p>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="w-1/5" v-for="photo of images.results" :key="photo.id">
          <img @click="$router.push( {name: 'single', params: {item: photo} } )" class="w-full p-2 object-cover h-full" :src="photo.urls.regular" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import navbar from "../components/NavbarComp.vue";
export default {
  name: "HomeView",
  components: {
    navbar,
  },
  props: ['text'],
  data() {
    return {
      images: [],
      url: "https://api.unsplash.com",
      client_id: "iHW54jMd87BpT7xMFcwGmaUCdjWCICcF3wNnQlwe-98",
      search: ""
    }
  },
  methods: {
    async setQuery() {
      let full_query = this.url + "/search/photos?query={" + this.search + "}&client_id=" + this.client_id;
      let res = await axios.get(full_query);
      this.images = res.data
    },
    // addChisla() {
    //   for (let odd = 2; odd <= 15; odd++) {
    //   if (odd % 2 == 0) {
    //     console.log(odd);
    //   }
    // }
    // }
  },
  
};
</script>

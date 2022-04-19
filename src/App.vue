<template>
  <div id="app">
    <router-view v-bind:text="message"/> 
    <!-- оно в homeview -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello",
      a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      b: [],
      c: null
    }
  },
   mounted() {
    console.log(this.a);
    for (let i = 0; i <= this.a.length; i++) {
      if(this.a[i] % 2 === 0) {
        this.b.push(this.a[i])
      }
      console.log(this.a[i]);
    }
    for (let x = 0; x <= this.b.length; x++) {
      this.c = this.b[x] 
    }
  },
  
}
</script>
<template>
  <div id="app">
    <router-view v-bind:text="message"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello"
    }
  }
}
</script>
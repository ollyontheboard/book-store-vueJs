<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: 'Layout',
    methods:{
      ...mapActions(['getallProducts']),
    },
    mounted() {
      this.getallProducts();
    }
  }
</script>

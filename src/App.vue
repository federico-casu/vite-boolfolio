<script>
  // import axios from 'axios';
  // import MainComp from './components/MainComp.vue';
  import AppHeader from './components/AppHeader.vue';
  // import { store } from './store'

  export default {
    components: {
      // MainComp
      AppHeader
    },
    data() {
      return {
        // store
      }
    },
    methods: {
      
    }
  }

</script>

<template>
  <!-- <MainComp 
  :projectsProp="this.projects"
  :currentPageProp="this.currentPage"
  :lastPageProp="this.lastPage"
  @getProjects="getProjects"
  /> -->

  <AppHeader />

  <router-view>

  </router-view>


</template>

<style scoped>

</style>

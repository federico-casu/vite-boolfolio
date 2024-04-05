<script>
  import axios from 'axios';
  import MainComp from './components/MainComp.vue';

  export default {
    components: {
      MainComp
    },
    data() {
      return {
        projects: []
      }
    },
    methods: {
      getProjects() {
        axios
          .get('http://127.0.0.1:8000/api/projects')
          .then( res => {
            return this.projects = res.data.projects;
          } )
      }
    },
    mounted() {
      this.getProjects();
    }
  }

</script>

<template>
  <MainComp 
  :projectsProp="this.projects"
  />
</template>

<style scoped>

</style>

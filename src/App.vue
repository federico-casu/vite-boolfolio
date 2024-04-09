<script>
  import axios from 'axios';
  import MainComp from './components/MainComp.vue';

  export default {
    components: {
      MainComp
    },
    data() {
      return {
        projects: [],
        currentPage: '',
        lastPage: ''
      }
    },
    methods: {
      getProjects(postApiPage) {
        axios
          .get('http://127.0.0.1:8000/api/projects', 
            {
              params: {
                page: postApiPage
              }
            }
          )
          .then( res => {

            this.currentPage = res.data.projects.current_page;
            this.lastPage = res.data.projects.last_page;

            this.projects = res.data.projects.data;

            console.log(this.currentPage, this.lastPage, this.projects)
          } )
      }
    },
    mounted() {
      this.getProjects(1);
    }
  }

</script>

<template>
  <MainComp 
  :projectsProp="this.projects"
  :currentPageProp="this.currentPage"
  :lastPageProp="this.lastPage"
  @getProjects="getProjects"
  />
</template>

<style scoped>

</style>

<script>
import MainComp from '../components/MainComp.vue';
import axios from 'axios';
import { store } from '../store'
// Js componente
export default {
    name: 'ProjectList',
    components: {
        MainComp
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getProjects(postApiPage) {
            axios
                .get(`${store.apiBaseUrl}/api/projects`,
                    {
                        params: {
                            page: postApiPage
                        }
                    }
                )
                .then(res => {

                    this.store.currentPage = res.data.projects.current_page;
                    this.store.lastPage = res.data.projects.last_page;

                    this.store.projects = res.data.projects.data;

                    console.log(this.store.currentPage, this.store.lastPage, this.store.projects)
                })
        }
    },
    mounted() {
      this.getProjects(1);
    }
}
</script>


<template>
    <!-- html componente -->
    <div class="container">
        <h1>Project List</h1>
        <MainComp 
        @getProjects="getProjects" />
    </div>
</template>


<style scoped>
/* stile del componente */
</style>
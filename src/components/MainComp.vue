<script>

import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
import { store } from '../store'

// Js componente
export default {
    name: 'MainComp',
    components: {
        ProjectCard
    },
    // props: [ 'projectsProp', 'currentPageProp', 'lastPageProp' ],
    // {
    //     projectsProp: Array,
    //     currentPageProp: Number,
    //     lastPageProp: Number
    // },
    data() {
        return {
            store
        }
    },
    methods: {
    //     getProjects(postApiPage) {
    //     axios
    //       .get('http://127.0.0.1:8000/api/projects', 
    //         {
    //           params: {
    //             page: postApiPage
    //           }
    //         }
    //       )
    //       .then( res => {

    //         // this.currentPage = res.data.projects.current_page;
    //         // this.lastPage = res.data.projects.last_page;

    //         this.projectsProp = res.data.projects.data;

    //         // console.log(this.currentPage, this.lastPage, this.projects)
    //       } )
    //   }
    }
}
</script>


<template>
    <!-- html componente -->
    <!-- <ul>
        <li
        v-for="(project, index) in this.projectsProp"
        :key="project.id"
        >{{ project.title }}</li>
    </ul> -->
    <div class="container d-flex flex-wrap">
        <ProjectCard v-for="(project, index) in this.store.projects" :key="project.id" :projectProp="project" />

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link" :class="this.store.currentPage == 1 ? 'disabled' : ''" @click="$emit('getProjects', this.store.currentPage - 1)">Previous</button>
                </li>
                
                <li v-for="(element, index) in this.store.lastPage" class="page-item">
                    <button class="page-link" @click="$emit('getProjects', element)">{{ element }}</button>
                </li>
                
                <li class="page-item">
                    <button class="page-link" :class="this.store.currentPage == this.store.lastPage ? 'disabled' : ''" @click="$emit('getProjects', this.store.currentPage + 1)">Next</button>
                </li>
            </ul>
        </nav>

    </div>

</template>


<style scoped>
/* stile del componente */
</style>
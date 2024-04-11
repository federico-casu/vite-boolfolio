<script>

import {store} from '../store'
// Js componente
export default {
    name: 'ProjectCard',
    props: {
        projectProp: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>


<template>
    <!-- html componente -->
    <!-- <h1>Ciao dalla ProjectCard</h1> -->
    <div class="col-4 p-3">
        <div class="card">
            <img class="card-img-top" :src="store.apiBaseUrl + '/storage/' + this.projectProp.cover_image"
                :alt="this.projectProp.title" />
            <div class="card-body">
                <router-link :to="{ name: 'single-project', params: { repo_name: this.projectProp.repo_name } }">
                    <h4 class="card-title">{{ this.projectProp.title }}</h4>
                </router-link>
                <p class="card-text">{{ this.projectProp.description }}</p>
                <span v-if="this.projectProp.type"><strong>Project type:</strong> {{ this.projectProp.type.name }}</span>
                <div v-if="this.projectProp.technologies.length">
                    <strong>Technologies:</strong>
                    <ul>
                        <li style="margin-left: -1em;" v-for="(technology, index) in this.projectProp.technologies" :key="technology.id">{{ technology.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


</template>


<style scoped>
/* stile del componente */
</style>
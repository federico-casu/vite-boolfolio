<script>
import axios from 'axios';
import {store} from '../store'

// Js componente
export default {
    name: 'SingleProject',
    data() {
        return {
            project: null,
            store
        }
    },
    methods: {
        getSingleProject() {
            axios
                .get(`${store.apiBaseUrl}/api/projects/${this.$route.params.repo_name}`)
                .then(res => {
                    if (res.data.success) {
                        this.project = res.data.project
                    } else {
                        // redirect 404
                        this.$router.push({name: 'not-found'})
                    }
                })
        }
    },
    mounted() {
        this.getSingleProject()
    }
}
</script>


<template>
    <!-- html componente -->
    <!-- <h1>{{ project?.title }}</h1> -->
    <div class="container">
        <div class="card">
            <img class="card-img-top" :src="store.apiBaseUrl + '/storage/' + project?.cover_image"
                :alt="project?.title" />
            <div class="card-body">
                <h4 class="card-title">{{ project?.title }}</h4>
                <p class="card-text">{{ project?.description }}</p>
                <span v-if="project?.type"><strong>Project type:</strong> {{ project?.type.name }}</span>
                <div v-if="project?.technologies.length">
                    <strong>Technologies:</strong>
                    <ul>
                        <li style="margin-left: -1em;" v-for="(technology, index) in project?.technologies"
                            :key="technology.id">{{ technology.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
/* stile del componente */
</style>
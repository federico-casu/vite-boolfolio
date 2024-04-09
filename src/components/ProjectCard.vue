<script>
// Js componente
export default {
    name: 'ProjectCard',
    props: {
        projectProp: Object
    },
    data() {
        return {

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
            <img class="card-img-top" :src="'http://127.0.0.1:8000/storage/' + this.projectProp.cover_image"
                :alt="this.projectProp.title" />
            <div class="card-body">
                <h4 class="card-title">{{ this.projectProp.title }}</h4>
                <p class="card-text">{{ this.projectProp.description }}</p>
            </div>
        </div>
    </div>


</template>


<style scoped>
/* stile del componente */
</style>
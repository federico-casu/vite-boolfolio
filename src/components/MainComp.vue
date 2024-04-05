

<script>

    import ProjectCard from './ProjectCard.vue';

    // Js componente
    export default {
        name: 'MainComp',
        components: {
            ProjectCard
        },
        props: {
            projectsProp: Array
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
    <!-- <ul>
        <li
        v-for="(project, index) in this.projectsProp"
        :key="project.id"
        >{{ project.title }}</li>
    </ul> -->

    <ProjectCard 
    v-for="(project, index) in this.projectsProp"
    :key="project.id"
    :projectProp="project"
    />
    
</template>


<style scoped>
    /* stile del componente */

    
</style>
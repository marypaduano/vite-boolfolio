<template>
    <div>
      <div class="projects">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div> 
    </div> 
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue'
  import axios from 'axios'

    export default {
      components: {
        ProjectCard
      },

      data() {
        return {
          projects: [],
        }
      },
      methods: {
        fetchProjects(page) {
          axios.get('http://127.0.0.1:8000/api/projects',{
            params:{
                page: page
            }
          })
          .then(res => {
            const results = res.data.results
            this.links = results.links
            this.lastPage = results.last_page
            this.projects = results.data
            this.currentPage = results.current_page

          })
          .catch(err => {
            console.log(err)
          })
        }
        },
      mounted() {
        this.fetchProjects(1)
      },
    }
  </script>
  
  <style scoped>
  .projects {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4,1fr);
  }
  
  </style>
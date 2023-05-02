<template>
    <div>
      <div class="projects">
        <p v-for="project in projects" :key="project.id"> {{ project.title }}</p>
      </div> 
    </div> 
  </template>
  
  <script>
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
        fetchProjects() {
          axios.get('http://127.0.0.1:8000/api/projects')
          .then(res => {
            const results = res.data.results
            this.projects = results.data

          })
          .catch(err => {
            console.log(err)
          })
        },
       
      },
      mounted() {
        this.fetchProjects()
      },
    }
  </script>
  
  <style  scoped>
  .projects {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4,1fr);
  }
  
  </style>
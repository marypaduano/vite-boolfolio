<template>
    <div>
      <div class="projects">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
      <ul class="pagination">
        <li :class="[n === currentPage ? 'active' : '','page_link']" v-for="n in lastPage" @click="fetchProjects(n)" :key="n">{{ n }}

        </li>
      </ul> 
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
          lastPage: null,
          currentPage: 1
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
        this.fetchProjects(this.currentPage)
      },
    }
  </script>
  
  <style scoped>
  .projects {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4,1fr);
  }
  .pagination {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  .page_link{
    color: white;
    background-color: cornflowerblue;
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
  }

  .page_link.active{
    background-color: blue;
  }
  
  </style>
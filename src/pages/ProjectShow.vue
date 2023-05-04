<template>
    <Layout>
      <template v-if="project">
        <div class="container">
          <h1>
            {{project.title}}
          </h1>
          <p v-if="project.type">{{ project.type.name }}</p>
          <ul>
            <li v-for="technology in project.technologies" :key="technology.slug">{{ technology.name }}</li>
          </ul>
          <p v-if="project.description" style="line-height: 28px; font-size: 18px;">{{ project.description }}</p>
        </div>
    </template>
    </Layout>
</template>

<script>

  import Layout from '../layouts/Default.vue'
  import axios from 'axios'
  import ProjectCard from '../components/ProjectCard.vue';

    export default {
      components: {
        Layout,
        ProjectCard
      },
      data(){
        return {
          project : null
        }
      },
      props: ['slug'],

      methods: {
      fetchProject(slug) {
        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`) //this.$route.params.slug
        .then(res => {
          const { success, project } = res.data
          if(success) {
            this.project = project
          } else {
            this.$router.replace('/ErrorPage')
          }

        })
        .catch(err => {
          // console.log(err)
          this.$router.replace('/ErrorPage')
        })
      }
    },
    created() {
      this.fetchProject(this.slug)
    
    },
    } 
  
    
    
</script>

<style scoped>

ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
li {
  list-style: none;
  padding: 10px;
  background-color: aqua;
  border-radius: 15px;
  max-width: max-content;
}
</style>
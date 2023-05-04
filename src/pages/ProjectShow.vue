<template>
    <Layout>
      <div class="container">
        dettaglio post
      </div>
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
      props: ['slug'],

      methods: {
      fetchProject(slug) {
        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`) //this.$route.params.slug
        .then(res => {
          const { success, project } = res.data
          if(success) {
            this.project = project
          } else {
            this.$router.replace('./pages/ErrorPage')
          }

        })
        .catch(err => {
          // console.log(err)
          this.$router.replace(('./pages/ErrorPage'))
        })
      }
    },
    created() {
      this.fetchProject(this.slug)
    
    },
    } 
  
    
    
</script>

<style scoped>
</style>
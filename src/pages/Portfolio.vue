<template>
  <Layout>
    <div class="container">
      <h1>Projects Portfolio</h1>
    </div>
    <div class="container">
      <Projects />
    </div>

  </Layout>
</template>

<script>
import Layout from '../layouts/Default.vue';
import Projects from '../components/Projects.vue';
  export default {
    components: {
      Projects,
      Layout
    }
    
  }
</script>

<style scoped>
</style>
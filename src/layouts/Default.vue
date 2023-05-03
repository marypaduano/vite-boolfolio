<template class="h-screen">

  <NavBar/>

  <main class="content">
    <slot />

  </main>

  <Footer />
  
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components: {
      NavBar,
      Footer
    }
    
  }
</script>

<style scoped>

.content {
    min-height: 100vh;
}

</style>
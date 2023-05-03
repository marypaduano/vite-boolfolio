<template>

  <NavBar/>

  <main class="h-screen">
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
.h-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333;
  color: white;
}
</style>
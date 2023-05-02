<template>
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.client }}</p>
      <ul class="tech-list" v-if="project.technologies && project.technologies.length > 0">
        <li class="tech_item" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
      </ul>
    </div>
</template>
  
  <script>
    export default {
      props: {
        project: {
          type: Object,
          required: true
        }
      },
      mounted() {
        console.log(this.project.title)
      },
    }
  </script>
  
  <style scoped>
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    list-style: none;
  }
  .tech_item {
    padding: 0 1rem;
    line-height: 24px;
    font-size: 12px;
    border-radius: 999px;
    background: #8a96e2;
  }

  .project-card{
    border: 1px solid lightgrey;
    border-radius: 20px;
  }
  </style>
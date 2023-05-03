<template>
    <header>
      <div class="container">
  
        <router-link :to="{ name: 'home'}">Boolfolio</router-link>
  
        <ul class="nav_menu">
          <li class="nav__item">
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{name: 'portfolio'}">Projects</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{name: 'about'}">About Me</router-link>
          </li>
        </ul>
  
      </div>
    </header> 
  </template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(170, 170, 230, 0.717);
  padding: 10px 20px;
}
.nav_menu {
  list-style: none;
  display: flex;
  gap: 1.8rem;
}
</style>
<template>
    <div class="page-container">
      <Header/>
    <div id="router-container">
      <router-view></router-view>
    </div>
    <Footer/>
    </div>
</template>

<script>

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    /* background-color: #4f0e0e; */
    background-image: url('./assets/background.jpg');
    background-size: 100%;
    width: 100%;
    color:#bb8760;
  font-family: 'Comfortaa', cursive;
  }

  .page-container {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 768px) {
    .page-container {
      flex-direction: column;
      align-items: center; 
    }
  }
</style>

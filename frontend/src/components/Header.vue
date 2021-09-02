<template>
    <header>
        <router-link to="./" id="H">Home</router-link>
        <router-link to="./allposts" id="AP">All Posts</router-link>
        <router-link to="./newarticle" id="ANP">Add new post</router-link>
        <router-link to="./registration" id="R">Registrate</router-link>
    </header>
</template>

<script>
    export default {
        name: 'Header', 
    }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

    header {
        display: flex;
        background-color: #bb8760;
        width: 100%;
        justify-content: space-between;
    }
      
    a{
        text-decoration: none;
        color: #4f0e0e;
        font-weight: bold ;
        /* background-color: #bb8760; */
        font-family: 'Comfortaa', cursive;
        color:#4f0e0e;
        position: relative;
        border: none;
        margin: 20px 60px; 
        text-decoration: none;
        font-size: 1rem;
    }

@media (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: center;
    }
    a{
          margin: 5px 60px;     
    }
  
  }

</style>


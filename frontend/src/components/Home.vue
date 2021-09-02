<template>
    <div id="home-container">
        <h1>{{pageTitle}}</h1>
        <h3>{{pageMessage}}</h3>
        <router-link to="./allposts">
        <img id="welcome" src="../assets/cabernet.jpg" alt="welcome">
        </router-link>
    </div>
</template>

<script>
export default {
   name: 'Home',
   data(){
       return {
           pageTitle: "Welcome to our page!",
           pageMessage: "Relax and enjoy!"
       }
   }
}
</script>

<style>
#home-container{
    margin: 50px;
    color:white;
    text-align: center;
}
#welcome{
    width: 300px;
    margin: 30px;
    border-radius: 50%;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
}

@media (max-width: 768px) {
 #welcome{
     width: 200px;
     font-size-adjust: initial;
 }
 #home-container{
     margin: 0;
 }
  }
</style>
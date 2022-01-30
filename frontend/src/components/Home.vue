<template>
    <div id="home-container">
        <h1>{{pageTitle}}</h1>
        <h3 class="subtitle">{{pageMessage}}</h3>
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
    color:#313552;
    text-align: center;
}
h1 {
  font-size: 6rem;
  font-weight: bolder;
}

.subtitle {
  font-size: 3rem;
  font-weight: bolder;
}
#welcome{
    width: 200px;
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

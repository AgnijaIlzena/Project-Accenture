<template>
    <div id="home-container">
    <center>
        <h1>Welcome to our page!</h1>
        <h3>Relax and enjoy!</h3>
        <router-link to="./allposts">
        <img id="welcome" src="../assets/cabernet.jpg" alt="welcome">
        </router-link>
    </center>
    </div>
</template>

<script>
export default {
   name: 'Home',
//    methods: {
//        ageAlert(){
//            return {
//                alert: "Are You 18 already?!"
//            };
//        }
//    },
}
</script>

<style>
#home-container{
    color: #ffdada;
}
#welcome{
    width: 300px;
    margin: 10px;
    border-radius: 50%;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
}

@media (max-width: 768px) {
 #welcome{
     width: 200px;}
  }
</style>
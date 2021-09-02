<template>
    <div id="error-container">
        <h1 id="error">{{message}}</h1>
        <h2>{{goTo }}</h2>
</div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data(){
      return {
        message: "ERROR 404",
        goTo: "Please return to Home page"
      }
  },
}
</script>

<style>
#error-container{
    text-align: center;
    justify-content: center;
    color: white;
}
</style>
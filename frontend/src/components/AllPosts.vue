<template>
    <div >
        <div id="all-posts-container">
            <!-- <h2> {{ postName}} </h2> -->
        <!-- <div class="postView"> -->
          <Article
            v-for="article in postArray"
            :postName="article.name"
            :postContent="article.content"
            :postMonth="article.month"
            :postYear="article.year"
            :key="article.name"/></div>
            <!-- <p> {{ postContent }}</p>
            <p> {{ postMonth }}, {{ postYear }}</p> -->
        <!-- </div> -->
    </div>
</template>

<script>
import Article from './Article.vue'
// import axios from "axios";
export default {
   name: 'AllPosts',
   data (){
        return {
        postArray:[] 
        }
   },

   components: {
       Article
   },
    
  mounted() {
         fetch("http://localhost:3001/posts")
            .then(res => res.json())
            .then(data => {
              this.postArray = data.posts;
              console.log(data.posts)
              console.log(data);
          }) 
            .catch (error => console.log(error))
          },
  
}
</script>

<style>
#all-posts-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    text-align: center;
    margin: 20px 50px;
}
  @media (max-width: 768px) {
    #all-posts-container {
      flex-direction: column;
    }
    }
</style>
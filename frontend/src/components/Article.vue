<template>
    <div class="article-container">
        <h2 class="post-name">{{postName}}</h2>
            <p>{{postContent}}</p>
            <p>{{postMonth}}, {{postYear}}</p>
    </div>
</template>

<script>
// import axios from "axios";
    export default {
        name: 'Article',
        data(){
            return {
            postArray: []
            }
        },
        props: {
            postName: String,
            postContent: String,
            postMonth: String,
            postYear: String
        },
        // mounted() {
        //     fetch("http://localhost:3000/posts")
        //     .then(res => res.json())
        //     .then(data => this.postArray = data)
        //     .catch (error => console.log(error))
        //     }
    }
    // // method: {
    // //     getAllPosts(){
    // //     const postArray = axios.get("http://localhost:3000/posts"),{
    // //                 name = this.postName,
    // //                 content = this.postContent;
    // //                 month = this.postMonth;
    // //                 year = this.postYear;
    // //     )};


    //     }

    // }
       
      
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

.article-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color:black;
    justify-content: center;
    font-size: 12pt;
    margin: 10px;
    padding: 20px;
    background-color: hsla(86, 89%, 64%, 0.3);
    border-radius: 20%;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
}

#post-name{
    color: white;
}

@media (max-width: 768px) {
   .article-container {
         width: 250px;
        height: 250px;
        font-size: 10pt;
    }
  }
</style>
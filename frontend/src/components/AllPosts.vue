<template>
    <div >
        <div id="all-posts-container">
            <!-- <h2> {{ postName}} </h2> -->
        <!-- <div class="postView"> -->
          <Article
            v-for="article in postArray"
            :postName="article.postName"
            :postContent="article.postContent"
            :postMonth="article.postMonth"
            :postYear="article.postYear"
            :key="article.postName"/></div>
            <!-- <p> {{ postContent }}</p>
            <p> {{ postMonth }}, {{ postYear }}</p> -->
        <!-- </div> -->
        <p class="linksTo">If You have a source or an idea for a<br>
        <router-link class="linksTo" to='./newarticle/'>new post</router-link>
        <br>feel free to<br>
        <router-link class="linksTo" to='./registration'>join us!</router-link></p>
    </div>
</template>

<script>
import Article from './Article.vue'
// import axios from "axios";

export default {
   name: 'AllPosts',
   data (){
        return {
            postArray: [
                {
            postName: "Burgundy",
            postContent: "With a prominent fishbowl shape, a Burgundy glass traps the aromas of the full-bodied wine. It also balances the wine's intensity. Since the wine comes from thin-skinned grapes, it does not need to be swirled quite as much to enjoy the aromas. The narrow rim mitigates acidity by targeting the wine to the center of the palate.",       
            postMonth: "January",
            postYear: "2020"
            },
            {
            postName: "Bordeaux",
            postContent: "In contrast with Burgundy glasses, Bordeaux glasses are taller, allowing you to maximize the surface area of wine exposed to air as you swirl the liquid up the edge of the glass. Produced from thicker-skinned grapes, Bordeaux wine is best when it's swirled and allowed to breathe. The shape also helps reduce the effects of tannins by concentrating the wine to the back of the tongue.",
            postMonth: "August",
            postYear: "2021"
            },
            {
            postName: "Chardonnay",
            postContent: "The large bowl of a Chardonnay glass balances out oaky notes. Furthermore, the greater surface area exposed to air lets the wine open up to reveal other tastes. The wide aperture evenly spreads the wine across the palate, which brings the complex layers of flavor into focus.",
            postMonth: "June",
            postYear: "2021"
            },
            ],
        }
   },
   components: {
       Article
   }
    // data(){
    //     return {
    //         // id="",cd 
    //         postName: "",
    //         postContent: "",
    //         postMonth: "",
    //         postYear: ""
    //     };
    // },
    // methods: {
    //     async savePost(){
    //         try {
    //             await axios.post("http://localhost:3000/posts/create", {
    //                 name: this.postName,
    //                 content: this.postContent,
    //                 month: this.postMonth,
    //                 year: this.postYear,
    //             }),
    //             this.postName= "";
    //             this.postContent= "";
    //             this.postMonth= "";
    //             this.postYear= "";
    //             this.$app.push("/");
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
    // },
};

</script>

<style>

#all-posts-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ffdada;
    text-align: center;
    margin: 20px 50px;
}

.linksTo{
    margin-top: 70px;
    text-align: center;
    font-size: 14pt;
    color: #bb8760;
}

  @media (max-width: 768px) {
    #all-posts-container {
      flex-direction: column;
      align-items: center; 
    }
  }
</style>


<template>
<div id="newArticle-container">
    <form v-on:submit.prevent>
        <h2>Add a new Post</h2>
        <input type="text"  name="name" placeholder="Title" v-model="postName"/>
        <!-- <input type="file"/> -->
        <textarea id="postBox" name="content" rows ="5" cols="60" placeholder="Text" v-model="postContent"></textarea>
        <select name="month" v-model="postMonth">
        <option value="january">january</option>
        <option value="february">february</option>
        <option value="march">march</option>
        <option value="may">may</option>
        <option value="june">june</option>
        <option value="july">july</option>
        <option value="august">august</option>
        <option value="september">september</option>
        <option value="october">october</option>
        <option value="november">november</option>
        <option value="december">december</option>
        </select>
         <select name="year" v-model="postYear">
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        </select>
        <button>Add post</button>
    </form>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: 'NewArticle',
    data(){
        return {
            // id="",
            postName="",
            postContent= "",
            postMonth="",
            postYear=""
        };
    },
    methods: {
        async savePost(){
            try {
                await axios.post("http://localhost:3000/server", {
                    name: this.postName,
                    content: this.postContent,
                    month: this.postMonth,
                    year: this.postYear,
                });
                this.postName = "";
                this.postContent = "";
                this.postMonth = "";
                this.postYear = "";
                this.$app.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

form{
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 60rem;
    height: auto;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    padding: 2rem 0;
}

#newArticle-container{
    background-color: #bb8760;
    color: #4f0e0e;
}

select{
    margin: 10px;
}

#postBox{
    width: 20rem;
    height: 10rem;
    margin: 20px;

}
@media (max-width: 768px) {
   form {
       padding: 0;
   }
  }
</style>
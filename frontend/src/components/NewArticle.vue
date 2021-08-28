<template>
<div id="newArticle-container">
    <form v-on:submit.prevent>
        <h2>Add a new Post</h2>
        <input type="text" placeholder="Title"/>
        <input type="file"/>
        <textarea id="postBox" rows ="5" cols="60" name="post" placeholder="Text"></textarea>
        <input type="date"/>
        <button>Post</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'NewArticle' 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

form{
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 60rem;
    height: 100%;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    padding: 2rem 0;
}

#newArticle-container{
    background-color: #bb8760;
    color: #4f0e0e;
}

input{
    margin: 10px;
}

#postBox{
    width: 20rem;
    height: 10rem;
    margin: 20px;

}
</style>
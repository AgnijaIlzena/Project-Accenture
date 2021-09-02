<template>
    <div class="article-container">
        <h2 class="post-name">{{postName}}</h2>
            <p>{{postContent}}</p>
            <p>{{postMonth}}, {{postYear}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            postName: String,
            postContent: String,
            postMonth: String,
            postYear: String
        },
       
}
        
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

.article-container {
 display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    color:#ffdada;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12pt;
    margin: auto;
    /* background-size: 350px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background: cover center no-repeat;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75); */

}
#post-name{
    color: white;
}


/* .article-card {
    width: 19rem;
    height: 19rem;
    color:#bb8760;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    background-size: cover;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background: cover center no-repeat;
    box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
} */

/* .article-card:hover {
    cursor: pointer;
    color: white;
} */

/* @media (max-width: 768px) {
    .article-card {
      margin-bottom: 2rem;
    }
  } */
</style>
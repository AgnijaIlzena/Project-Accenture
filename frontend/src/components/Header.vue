//template
<template>
    <header>
         <img id="logo" alt="Vue logo" src="../assets/AA_logo.jpg">
        <div>
        <ul id="nav1">
            <li class="headerLi"><router-link to='/'>Home</router-link></li>
            <!-- <router-view></router-view> -->
            <li class="headerLi"><router-link to="./allposts">AllPosts</router-link></li>
            <!-- <li class="headerLi"><a href="/" target="_blank">Home</a></li>
            <li class="headerLi"><a href="/" target="_blank">All posts</a></li> -->
        </ul>
        </div>
        <div class="button-container">
        <ul id="nav2">
            <li class="headerLi">
                <!-- v-on:click="clicker" -->
                <!-- <router-view></router-view> -->
                <router-link to="/newarticle">Add new post</router-link>
            </li>
            <li class="headerLi">
                <!-- v-on:click="clicker" -->
                <router-link to="/login">Log in/Register</router-link>
            </li>
        </ul>
        </div>
        <Dropdown :options="options" v-if="dropdownState"/>
    </header>
</template>

//script
<script>
    import Dropdown from './Dropdown.vue'

    export default {
        name: 'Header',
        props: {},
        data () {
            return {
                options: [
                    {
                        title: "Add new post",
                        url: "my-posts"
                    },
                    {
                        title: "Log in",
                        url: "login"
                    }
                ],
                dropdownState: false
            }
        },
        components: {
            Dropdown,
        },
        methods: {
         clicker () {
            return this.dropdownState = !this.dropdownState
        }
        }     
    }
</script>

//style
<style>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');
    header {
        display: flex;
        background-color: #bb8760;
        width: 100%;
        justify-content: space-between;
    }

    #nav1 {
        display: flex;
        flex: 1;
        justify-content: start;
        list-style: none;
    }

    #nav2{
         display: flex;
        flex: 1;
        justify-content: end;
        list-style: none;
      
    }
    a{
        text-decoration: none;
        color: #4f0e0e;
        font-weight: bold ;
    }

    .headerLi {
        margin: 1rem 0rem;

    }

    #logo {
       margin: 10px 30px;
        width: 3.5rem;
        height: 4.5rem;
    }

    .button-container {
        display: flex;
    }

    .headerLi{
        background-color: #bb8760;
        font-family: 'Comfortaa', cursive;
        color:#4f0e0e;
        position: relative;
        border: none;
        margin: 10px 10px; 
        text-decoration: none;
        font-size: 1rem;
    }


</style>


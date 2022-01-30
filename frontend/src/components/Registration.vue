<template>
    <div id="registration-container">
          <form v-on:submit.prevent='saveUser'>
        <h1>{{pageTitle}}</h1>
        <h3>{{pageMessage}}</h3>
        <input type="text" name="name" placeholder="userName" v-model="username"/>
        <input class="password" type="password" placeholder="password" v-model="password"/>
        <button>Register</button>
    </form>
    </div>
</template>
    
<script>
import axios from "axios";

export default {
    name: 'Registration',
    data(){
        return {
            pageTitle: "Registration",
            pageMessage: "If You want to add new useful posts please fill registration form",
            username: "",
            password: "",
            successMessage: "",
        };
    },
    methods: {
        async saveUser(){
            try {
                await axios.post("http://localhost:3000/user/create", {
                    username: this.username,
                    password: this.password,
                                  }),
                this.username= "";
                this.password= "";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style>
    #registration-container{

    color: #EEE6CE;
    display: flex;
    flex-direction: row;
    margin: auto;
    padding: 2rem 0;
   }

 form {
   background-color: #313552;
   border-radius: 1%;


    }
h3{
    text-align: center;
}

.password{
    margin: 20px;
}

button{
    font-family: 'Comfortaa', cursive;
}

input{
    margin: 15px;
}

@media (max-width: 768px) {
    p {
        width: 250px;
        text-align: center;
    }
  }
</style>

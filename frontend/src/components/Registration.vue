<template>
    <div id="registration-container">
          <form v-on:submit.prevent='saveUser'>
        <h2>Registration</h2>
        <p>If You want to add new useful posts please fill registration form</p>
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
            username: "",
            password: "",
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
<<<<<<< HEAD
                // this.$app.push("/");
=======
   //             this.$app.push("/");
>>>>>>> f37dfae69863a273ab1e8985c7489ea7ddde8417
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style>
    #registration-container{
    background-color: #ffdada;
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    padding: 2rem 0;
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
        width: 350px;
    text-align: center;
    }
  }
</style>

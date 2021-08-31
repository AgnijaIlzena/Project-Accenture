<template>
    <div id="registration-container">
          <form>
        <h2>Registration</h2>
        <p>If You want to add new useful posts please fill registration form</p>
        <input type="text" placeholder="Name"/>
        <input class="password" type="password" placeholder="Password"/>
        <button>Register</button>
    </form>
    </div>
</template>
    
<script>
export default {
    name: 'Registration'
}
</script>

<style>
    #registration-container{
        background-color: #ffdada;
}


@media (max-width: 768px) {
    p {
        width: 350px;
    text-align: center;
    }
  }
</style>

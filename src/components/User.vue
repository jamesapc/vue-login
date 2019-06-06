<template>
   <div class="app">
      <h1>Login Test</h1>
      <input class="email-input" type="email" placeholder="Email" v-model="email">
      <br>
      <input class="password-input" type="password" placeholder="Password" v-model="password">
      <br>
      <button class="button-signin" v-on:click="login">Log in</button>
   </div>
</template>


<script>
import axios from 'axios';

export default {
   name: 'todos',
   data : function() {
      return {
         email: "",
         password: "",
         token: localStorage.getItem('accToken')
      }
   },

   methods: {

      login() {
         const informations = {
            email: this.email,
            password: this.password
         }
         // login to users loopback and parsing information to login method.
         axios.post('http://localhost:3000/api/Users/login', informations)
            .then(response => {
               console.log(response);
               // set token from id of response data.
               this.token = response.data.id
               // save token to localStorage and save information when we refest page.
               localStorage.setItem('accToken', this.token)
            })
      }
      
   },
   computed: {
      
   },
}

</script>


<style scoped>
.app {
   text-align: center;
   width: 500px;
   background-color:blanchedalmond;
   height: 200px;
}

.password-input {
   margin: 20px 0 0 0px;
}

.button-signin {
   margin: 20px 0 0 0;
}
</style>



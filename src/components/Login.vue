<template>
   <div class="app">
      <h1>Login Test</h1>
      <input class="email-input" type="email" placeholder="Email" v-model="email">
      <br>
      <input class="password-input" type="password" placeholder="Password" v-model="password">
      <br>
      <button class="button-signin" @click="login">Log in</button>
      <button class="button-logout" @click="logout">Logout</button>
   </div>
</template>


<script>
import axios from 'axios';
import User from './User';
import router from 'vue-router';

export default {
   name: 'login',
   components: {
      User
   },
   data : function() {
      return {
         email: "",
         password: "",
         token: localStorage.getItem('accToken')
      }
   },

   methods: {
      login: function() {
         const informations = {
            email: this.email,
            password: this.password
         }
         // login to users loopback and parsing information to login method.
         axios.post('http://localhost:3000/api/Users/login', informations)
            .then(response => {
               console.log(response);
               console.log("login success");
               // set token from id of response data.
               this.token = response.data.id
               // save token to localStorage and save information when we refest page.
               localStorage.setItem('accToken', this.token);
               this.$router.push('/');
            })
      },

      logout: function() {
         delete localStorage.removeItem('accToken');
         console.log("token was delete");
      }
   },
   computed: {
   }
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



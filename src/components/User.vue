<template>
   <div>
      <div>
         <input type="text">
         <input type="text">
      </div>
      <button @click="logout">Log out</button>
      <!-- router-view is render component that match to the route path -->
      <router-view></router-view>
   </div>
</template>

<script>

export default {
   name: 'user',

   data: function() {
      return {
         post: '',
         content: ''
      }
   }  
}
</script>

<style scoped>

</style>

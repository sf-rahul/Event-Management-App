<template>
  <div>
  <header class = "headerclass">
    
    <div class="logo">

     <router-link to="/"> Events to cherish </router-link>
        
    </div>
    <nav>
       <ul>
         <li>
        <router-link to="/events"> Events  </router-link>
           </li>
           <li>
        <router-link to="/register"> Register   </router-link>
           </li>
          <li>
        <router-link to="/signup"> Signup   </router-link>
           </li>
           <li>
        <router-link to="/signin"> Signin </router-link>
           </li>
           <li>
        <router-link to = "/logout"> Logout</router-link>
           </li>
       </ul> 
    </nav>
   </header>
  </div>
  
</template>

<script>
export default {
  name : "header"
}
</script>

<style scoped>
  
  .headerclass{
      height: 56px;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      background-color: #571275;
      padding: 0 20px;
      align-items: center;
      
      

  }

  .logo{
       font-weight: bold;
       color:white;
   }

   .logo a {

       text-decoration: none;
       color: white;
   }
   nav{
       height: 100%;
   }

   ul{
       list-style: none;
       margin:0;
       padding: 0;
       height: 100%;
       display: flex;
       flex-flow: row;
       align-items: center;
   }
   li{

      margin: 0 16px;
  }
    li a {
      text-decoration: none;
      color:white;
  }

</style>
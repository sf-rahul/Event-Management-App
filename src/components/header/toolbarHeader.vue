<template>
  <v-card
    color="grey lighten-4"
    flat
    
    tile
  >
    <v-toolbar dark  height="60px">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Events to cherish</v-toolbar-title>
    

        <v-spacer></v-spacer>
       


         <v-text-field
            outlined
            filled
            dense
            rounded
            color="#eee"
            label="serch for events ,venue etc."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        
      

      <v-spacer></v-spacer>
     

       <v-btn to="/events" text>
         Events  
       </v-btn> 
       
          
         <v-btn to="/signin" text> Signin </v-btn>
           
           
        <v-btn to = "/logout" text> Logout</v-btn>
       
           
    </v-toolbar>
     <router-view></router-view>
  </v-card>
</template>
<script>
export default {
    
}
</script>

<style scoped>
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

  .v-text-field.v-text-field--enclosed{
      margin-top:25px;
  }
</style>
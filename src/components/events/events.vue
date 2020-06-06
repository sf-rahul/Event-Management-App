<template>
  <div class = "container"> 
      
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<script>
export default {
  
  data(){

      return {
          
         events: [ {
           eventId:'abc',
           name:'Singing',
           type:'offline',
           venue:'kankarbagh',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }},
             {
           eventId:'abc',
           name:'Singing',
           type:'offline',
           venue:'kankarbagh',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }} ,
             {
           eventId:'abc',
           name:'Singing',
           type:'offline',
           venue:'kankarbagh',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }} ,
             {
           eventId:'abc',
           name:'Singing',
           type:'offline',
           venue:'kankarbagh',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }}  ]


      }
  
  }

}
</script>

<style scoped>

.container{
  margin-top: 30px;
}

</style>

<template>
  <div class = "container"> 
      
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="event in events"
        :key="event.eventId"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <eventdetail v-bind:event="event"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import eventdetail from './eventdetail'
export default {

  components:{
    eventdetail
  }
  ,
  data(){

      return {
          
         events: [ {
           eventId:'1',
           name:' एक शाम कुमार राहुल (अवध) के नाम ',
           type:'offline',
           price:[300,400,500],
           venue:'Banerghatta ,Banglore',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }},
             {
           eventId:'2',
           name:'गलिब की गजले.',
           type:'offline',
           price:[300,400,500],
           venue:'Vishrant vadi , Pune ',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }} ,
             {
           eventId:'3',
           name:'Show your moves. A dance festival.',
           type:'offline',
           price:[300,400,500],
           venue:'Whitefiled , Banglore.',
           date: { 
                from:'6/6/2020',
                to:'6/6/2020'
             }} ,
             {
           eventId:'4',
           name:'Paint exhibition.',
           type:'offline',
           price:[300,400,500],
           venue:'Marathalli, Banglore.',
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
  margin-top: 20px;
}

</style>
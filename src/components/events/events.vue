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
          <template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
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
  margin-top: 20px;
}

</style>
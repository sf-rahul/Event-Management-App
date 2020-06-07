<template>
  <div>

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
      <v-card-title>{{name()}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{event.type}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div> Price : {{prices()}}</div>
      <div>{{venue()}}</div>

      <div>{{date()}}</div>
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
        v-bind:to="{ name: 'register', params: { eventId:event.eventId } }"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

  </div>
</template>

<script>
export default {
 props:['event'],

 methods:{
     name(){
          return this.event.name; 
     },
     venue(){
         return this.event.venue;
     },

     date(){
          return this.event.date.from + ' --- ' + this.event.date.to;
     }
     ,
     prices(){
         
         return this.event.price.join('/')

     }
 }

}
</script>

<style>

</style>
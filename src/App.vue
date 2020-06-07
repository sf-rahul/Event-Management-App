<template>
  <v-app>
    
    <v-content>
      <mainpage/>
     
    </v-content>
  </v-app>
</template>

<script>

import mainpage from './views/MainPage'
export default {
  name: 'App',

  components: {
    mainpage,
  }
  
};
</script>

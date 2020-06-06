<template>
  <v-app>
    
    <v-content>
      <mainpage/>
      <router-view></router-view>
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

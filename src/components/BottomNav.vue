<template>
  <v-bottom-navigation app dark shift>
    <v-btn :to="{ name: 'home' }">
      <span>Home</span>
      <v-icon>fa-home</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'new-game' }">
      <span>New Game</span>
      <v-icon>fa-plus-square</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'join-game' }">
      <span>Join Game</span>
      <v-icon>fa-sign-in-alt</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'options' }">
      <span>Options</span>
      <v-icon>fa-user-cog</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "bottom-nav",
    data() {
      return {
        dummy: "value",
      };
    },
  };
</script>

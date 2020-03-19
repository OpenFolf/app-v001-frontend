<template>
  <v-bottom-navigation shift app background-color="#41b883">
    <v-btn :to="{ name: 'home' }" color="#41b883">
      <span>Home</span>
      <v-icon>fa-home</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'new-game' }" color="#41b883">
      <span>New Game</span>
      <v-icon>fa-play</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'join-game' }" color="#41b883">
      <span>Join Game</span>
      <v-icon>fa-qrcode</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'options' }" color="#41b883">
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

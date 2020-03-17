<template>
  <v-card class="mx-auto my-12" color="#41b883">
    <v-toolbar color="green">
      <v-spacer />
      <v-toolbar-title>openFOLF Login</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text class="text-center font-weight-bold my-12">
      <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="green" @click="fakeLogin">Login</v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "auth",
    data() {
      return {
        dummy: "value",
      };
    },
    methods: {
      fakeLogin() {
        console.log("TODO - Implement Vuex");
        this.$store.dispatch("signIn");
        this.$router.push({ name: "home" });
      },
    },
  };
</script>

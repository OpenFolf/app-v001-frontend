<template>
  <v-btn @click="fakeSignout" class="my-5" color="#41b883">SIGN OUT</v-btn>
</template>

<script>
  export default {
    name: "signout",
    methods: {
      fakeSignout() {
        console.log("Fake 'Sign Out' triggered");
      },
    },
  };
</script>

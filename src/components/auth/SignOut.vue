<template>
  <v-btn @click="signOut" class="my-5" color="#41b883">SIGN OUT</v-btn>
</template>

<script>
  import { mapActions } from "vuex";
  import { AmplifyEventBus } from "aws-amplify-vue";
  export default {
    name: "sign-out",
    methods: {
      ...mapActions(["logOut"]),
      signOut() {
        this.$Amplify.Auth.signOut()
          .then(() => {
            return AmplifyEventBus.$emit("authState", "signedOut");
          })
          .catch((e) => this.setError(e));
        this.logOut();
      },
      setError: function(e) {
        console.log("error", e);
      },
    },
  };
</script>

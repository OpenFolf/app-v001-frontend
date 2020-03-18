<template>
  <v-container>
    <v-btn block @click="showAmplify = !showAmplify" color="#f90">
      TOGGLE AWS-AMPLIFY COMPONENT
    </v-btn>
    <v-divider class="my-5" />
    <v-btn block @click="fakeSignin" color="red">
      FAKE SIGNIN <v-icon right>fa-sign-in-alt</v-icon>
    </v-btn>
    <v-divider class="my-5" />
    <v-btn block @click="showCustom = !showCustom" color="#41b883">TOGGLE OPENFOLF AUTH</v-btn>
    <v-divider class="my-5" />
    <template v-if="showAmplify">
      <amplify-authenticator />
    </template>
    <template v-if="showCustom">
      <v-divider />
      <p class="headline black">LOGIN</p>
      <login />
      <v-divider />
      <p class="headline black">SIGNUP</p>
      <signup />
      <v-divider />
      <p class="headline black">SIGN OUT</p>
      <signout />
      <v-divider />
      <p class="headline black">RESET PASSWORD</p>
      <reset-password />
      <v-divider />
      <p class="headline black">CONFIRM SIGNUP</p>
      <confirm-signup />
    </template>
  </v-container>
</template>

<script>
  export default {
    name: "auth",
    components: {
      Login: () => import("@/components/auth/Login.vue"),
      Signup: () => import("@/components/auth/Signup.vue"),
      Signout: () => import("@/components/auth/Signout.vue"),
      ResetPassword: () => import("@/components/auth/ResetPassword.vue"),
      ConfirmSignup: () => import("@/components/auth/ConfirmSignup.vue"),
    },
    data() {
      return {
        showCustom: false,
        showAmplify: false,
      };
    },
    methods: {
      fakeSignin() {
        this.$store.dispatch("setUser", "Folfberg Nördakall");
        this.$store.dispatch("setSignedIn", true);
        this.$router.push({ name: "home" });
      },
    },
  };
</script>

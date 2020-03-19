<template>
  <v-card max-width="505px" class="mx-auto mt-5">
    <v-card class="pa-0 d-flex justify-center">
      <v-btn-toggle v-model="selectedButton">
        <v-btn @click="selectedAuthentication = 'SignIn'">
          Sign In
        </v-btn>
        <v-btn @click="selectedAuthentication = 'SignUp'">
          Sign Up
        </v-btn>
        <v-btn @click="selectedAuthentication = 'ConfirmSignUp'">
          Confirm Sign Up
        </v-btn>
        <v-btn @click="selectedAuthentication = 'ResetPassword'">
          Reset Password
        </v-btn>
      </v-btn-toggle>
    </v-card>
    <v-divider />
    <v-card class="pa-5" color="#4E4E4E">
      <keep-alive>
        <component :is="selectedAuthentication" />
      </keep-alive>
    </v-card>
  </v-card>
</template>

<script>
  export default {
    name: "authenticator",
    data() {
      return {
        selectedAuthentication: "SignIn",
        selectedButton: 0,
      };
    },
    components: {
      SignIn: () => import("@/components/auth/SignIn.vue"),
      ConfirmSignUp: () => import("@/components/auth/ConfirmSignUp.vue"),
      ResetPassword: () => import("@/components/auth/ResetPassword.vue"),
      SignUp: () => import("@/components/auth/SignUp.vue"),
    },
  };
</script>

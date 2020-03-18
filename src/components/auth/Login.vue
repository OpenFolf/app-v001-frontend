<template>
  <v-card width="400px" class="mx-auto my-5 font-weight-bold">
    <v-toolbar color="#41b883">
      <v-toolbar-title>openFOLF - Login</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="E-Mail" type="email" v-model="email" />
        <v-text-field
          label="Password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="fakeLogin" color="#41b883">Login</v-btn>
      <v-spacer />
    </v-card-actions>
    <v-card-actions>
      <v-spacer />
      <v-btn x-small text @click="fakeToggle">No account? Create one!</v-btn>
      <v-spacer />
    </v-card-actions>
    <v-card-actions>
      <v-spacer />
      <v-btn x-small text @click="fakeReset">Forgot your password? Reset Password.</v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        showPassword: false,
        password: "",
        email: "",
      };
    },
    methods: {
      fakeToggle() {
        console.log("Fake 'toggle Signin/login' triggered");
      },
      fakeLogin() {
        console.log("Fake 'Login' triggered");
        console.log("Is everything validated??");
      },
      fakeReset() {
        console.log("Fake 'Reset password' triggered");
      },
    },
  };
</script>

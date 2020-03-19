<template>
  <v-card width="400px" class="mx-auto my-5 font-weight-bold">
    <v-toolbar color="#41b883">
      <v-img
        class="mr-2"
        :src="require('@/assets/basket_white.png')"
        max-height="35"
        max-width="35"
        contain
      />
      <v-toolbar-title>openFOLF - Sign Up</v-toolbar-title>
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
        <v-text-field
          label="Re-type Password"
          v-model="rePassword"
          :type="reshowPassword ? 'text' : 'password'"
          :append-icon="reshowPassword ? 'fa-eye' : 'fa-eye-slash'"
          @click:append="reshowPassword = !reshowPassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="fakeSignup" color="#41b883">Sign Up</v-btn>
      <v-spacer />
    </v-card-actions>
    <v-card-actions>
      <v-spacer />
      <v-btn x-small text @click="fakeToggle">Already have an account? Sign In!</v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "sign-up",
    data() {
      return {
        email: "",
        password: "",
        rePassword: "",
        showPassword: false,
        reshowPassword: false,
      };
    },
    methods: {
      fakeToggle() {
        console.log("Fake 'toggle Sign In/Sign Up' triggered");
      },
      fakeSignup() {
        console.log("Fake 'Sign Up' triggered");
        console.log("Fake validation: Do the passwords match?");
      },
    },
  };
</script>

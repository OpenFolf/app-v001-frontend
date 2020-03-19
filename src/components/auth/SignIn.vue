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
      <v-toolbar-title>openFOLF - Sign In</v-toolbar-title>
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
      <v-btn @click="fakeSignIn" color="#41b883">SIGN IN</v-btn>
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
  // import { mapActions } from "vuex";
  import { AmplifyEventBus } from "aws-amplify-vue";
  export default {
    name: "sign-in",
    data() {
      return {
        showPassword: false,
        password: "",
        email: "",
        error: "",
      };
    },
    methods: {
      fakeToggle() {
        console.log("Fake 'toggle Signin/login' triggered");
      },
      fakeSignIn() {
        console.log("Fake 'SignIn' triggered");
        console.log("Is everything validated??");
      },
      fakeReset() {
        console.log("Fake 'Reset password' triggered");
      },
      signIn() {
        this.$Amplify.Auth.signIn(this.signInUsername, this.password)
          .then(() => {
            return AmplifyEventBus.$emit("authState", "signedIn");
          })
          .catch((e) => {
            if (e.code && e.code === "UserNotConfirmedException") {
              AmplifyEventBus.$emit("localUser", { username: this.signInUsername });
              AmplifyEventBus.$emit("authState", "confirmSignUp");
            } else {
              this.setError(e);
            }
          });
      },
      forgot: function() {
        AmplifyEventBus.$emit("authState", "forgotPassword");
      },
      signUp: function() {
        AmplifyEventBus.$emit("authState", "signUp");
      },
      setError: function(e) {
        this.error = this.$Amplify.I18n.get(e.message || e);
        this.logger.error(this.error);
      },
    },
  };
</script>

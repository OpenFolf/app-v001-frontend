<template>
  <v-card width="400px" class="mx-auto my-5 font-weight-bold">
    <v-toolbar color="#41b883">
      <v-toolbar-title>openFOLF - Reset Password</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="Reset Code" type="text" v-model="reset" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="fakeReset" color="#41b883">Reset</v-btn>
      <v-spacer />
    </v-card-actions>
    <v-card-actions>
      <v-spacer />
      <v-btn x-small text @click="fakeBackToSignin">Back to Signin.</v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "reset-password",
    data() {
      return {
        reset: "",
      };
    },
    methods: {
      fakeBackToSignin() {
        console.log("Fake 'Back to Signin' triggered");
      },
      fakeReset() {
        console.log("Fake 'Reset' triggered");
      },
    },
  };
</script>

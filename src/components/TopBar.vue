<template>
  <v-app-bar color="#41b883" app>
    <router-link :to="{ name: 'home' }">
      <v-img
        class="mr-2"
        :src="require('@/assets/basket_white.png')"
        max-height="40"
        max-width="40"
        contain
      />
    </router-link>
    <v-spacer />
    <v-toolbar-title class="headline mr-5">{{ pageName }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        pageName: "Title",
      };
    },
  };
</script>

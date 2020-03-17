<template>
  <v-app>
    <v-content>
      <router-view />
      <bottom-nav v-if="signedIn" />
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "App",
    components: {
      BottomNav: () => import("@/components/BottomNav.vue"),
    },
    computed: {
      ...mapGetters(["signedIn"]),
    },
  };
</script>

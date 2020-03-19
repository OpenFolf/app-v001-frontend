<template>
  <v-app>
    <v-content>
      <top-bar title="title" v-if="signedIn" />
      <router-view />
      <bottom-nav v-if="signedIn" />
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "App",
    data() {
      return {
        title: "Title",
      };
    },
    components: {
      TopBar: () => import("@/components/TopBar.vue"),
      BottomNav: () => import("@/components/BottomNav.vue"),
    },
    computed: {
      ...mapGetters(["signedIn"]),
    },
  };
</script>

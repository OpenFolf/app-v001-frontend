<template>
  <div class="about">
    <!-- <amplify-connect :query="listTodosQuery">
      <template slot-scope="{ loading, data, errors }">
        <div v-if="loading">
          Loading...
        </div>
        <div v-if="errors.length > 0">Errors</div>
        <div v-else-if="data">
          {{ data }}
        </div>
      </template>
    </amplify-connect> -->
    <p>Courses are: {{ courses }}</p>
    <button class="btn btn-primary" @click="getCourseList">getCourses</button>
    <button class="btn btn-primary" @click="subscribeCourses">start course subscription</button>
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Add Course..." />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
  //  import { components } from "aws-amplify-vue";
  //  import { listTodos } from "../graphql/queries";
  import { mapActions } from "vuex";

  export default {
    // components: {
    //   ...components,
    // },
    computed: {
      //   listTodosQuery() {
      //     return this.$Amplify.graphqlOperation(listTodos);
      //   },
      courses() {
        return this.$store.getters.getCourses;
      },
    },
    methods: {
      ...mapActions(["getCourseList", "subscribeCourses", "addCourse"]),
      onSubmit(e) {
        e.preventDefault();
        this.addCourse(this.title);
      },
    },
    data() {
      return {
        title: "",
      };
    },
  };
</script>

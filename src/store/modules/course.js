import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as graphQLmutations from "../../graphql/mutations";

const state = {
  courses: [],
};

const getters = {
  getCourses: (state) => {
    return state.courses;
  },
};

const mutations = {
  updateCourseList: (state, payload) => {
    state.courses = payload;
  },
  newCourse: (state, payload) => {
    state.courses.unshift(payload);
  },
};

const actions = {
  async getCourseList(context) {
    const payload = await API.graphql(graphqlOperation(queries.listCourses));
    context.commit("updateCourseList", payload);
  },

  async addCourse(context, payload) {
    const courseDetails = {
      name: payload,
      description: "Eitthvad bull",
    };

    const newCourse = await API.graphql(
      graphqlOperation(graphQLmutations.createCourse, { input: courseDetails }),
    );

    context.commit("newCourse", newCourse.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

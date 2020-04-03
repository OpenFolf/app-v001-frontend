import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as graphQLmutations from "../../graphql/mutations";

const state = {
  todos: [],
};

const getters = {
  getTodos: (state) => {
    return state.todos;
  },
};

const mutations = {
  updateTodos: (state, payload) => {
    state.todos = payload;
  },
  newTodo: (state, payload) => {
    state.todos.unshift(payload);
  },
};

const actions = {
  async getTodosList(context) {
    const payload = await API.graphql(graphqlOperation(queries.listTodos));
    context.commit("updateTodos", payload);
  },
  async addTodo(context, payload) {
    const todoDetails = {
      name: payload,
      description: "Eitthvad bull",
    };

    const newTodo = await API.graphql(
      graphqlOperation(graphQLmutations.createTodo, { input: todoDetails }),
    );

    context.commit("newTodo", newTodo.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

// Query test
// query getTodos {
//     getTodo (id: "c7efc4b0-4ef3-4489-bcf3-199b95d569d6") {
//       id
//       name
//     }
//   }
  
//   mutation addTodo {
//     createTodo (input: {
//       name: "Test-1"
//     }) {
//           id
//       name
//     }
//   }
  
  
//   mutation addField {
//     createCourse (input: {
//           name: "Fossvogsvöllur"
//           courselength: 0
//           yearestablished: 2014
//           parinfo: 0
//           teetype: "Mixed"
//           baskettype: "DISCatcher"
//           description: "A fairly easy 9 hole course set in a tranquil public park straddling a tiny brook and a collection of ponds dividing the city of Reykjavík and the town of Kópavogur. Featuring moderate elevation changes (notably on hole 3) there are various water hazards and an assortment of wooded OB areas. Although containing only 9 baskets, the experienced player rarely shoots the custom 9 hole layout, opting rather for a modified 18 hole one as featured in the weekly Tuesday league. The course is popular with players of every skill level and plays host to the local Tuesday league from May through September."
//           streetaddress: "Árland 2"
//           postalcode: "108"
//           location: "64.118179,-21.888047"
//     }) {
//       id
//       name
//     }
//   }
  
//   query getAllCourses {
//     listCourses {
//       items {
//         id
//         name
//               courselength
//               yearestablished
//               parinfo
//               teetype
//               baskettype
//               description
//               streetaddress
//               postalcode
//               location
//       }
//     }
//   }
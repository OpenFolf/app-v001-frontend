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

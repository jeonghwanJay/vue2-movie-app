import Vue from "vue";
import Vuex from "vuex";
import { fetchData } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: "",
  },
  getters: {},
  mutations: {
    setMovie(state, data) {
      state.movie = data;
    },
    // 		setUsername(state, username) {
    // 	state.username = username
    // },
  },
  actions: {
    async fetchDataList({ commit }, movieOptions) {
      const { data } = await fetchData(movieOptions);
      commit("setMovie", data);
      return data;
    },
    // async fetchMovieList(context) {},
  },
  modules: {},
});

// actions: {
// 		async LOGIN({ commit }, userData) {
// 			const { data } = await loginUser(userData)
// 			commit("setToken", data.token)
// 			commit("setUsername", data.user.username)
// 			saveAuthToCookie(data.token)
// 			saveUserToCookie(data.user.username)
// 			return data
// 		},

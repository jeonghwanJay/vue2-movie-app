import Vue from "vue";
import Vuex from "vuex";
import { fetchImg } from "../api/index";

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
      const response = await fetchImg(movieOptions);
      console.log(response);
      commit("setMovie", response);
      return response;
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

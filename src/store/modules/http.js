import Auth from "../../services/http-integration";

export default {
  state: {
    loggedin: false,
    user: false,
    tokens: {
      access: null,
    }
  },
  mutations: {
    setUser(state, user) {
      localStorage.setItem("authMetadata", JSON.stringify(user));
      state.user = user;
    },
    // eslint-disable-next-line no-unused-vars
    clearUser(state, user) {
      state.user = false;
    },
    setAccessToken(state, token) {
      localStorage.setItem("accessToken", token);
      state.tokens.access = token;
    },
    clearAccessToken(state) {
      localStorage.removeItem("accessToken");
      state.tokens.access = false;
    },
    setLoggedIn(state, status) {
      state.loggedin = status;
    }
  },
  actions: {
   async authenticate({ commit }, data) {
      try {
        let response = await Auth.authenticate(data);
          commit("setLoggedIn", true);
          commit("setUser", response.data.user_details);
          commit("setAccessToken", response.data.token);
          return response
      }catch (error) {
        throw new Error(error.response.data.error);
      }
    },
   async register_user({ commit }, data) {
      try {
        let response = await Auth.store_userData(data);
        commit("setLoggedIn", true);
        commit("setUser", response.data.user_details);
        commit("setAccessToken", response.data.token);
        return response
      }catch (error) {
        throw new Error(error.response.data.error);
      }
    },

    async getUserdata({ commit }, data) {
      try {
        let response = await Auth.getMe(data);
        commit("setLoggedIn", true);
        commit("setUser", response.success);
        return response
      }catch (error) {
        throw new Error(error.response.data.error);
      }
    },
  },
  getters: {
    user: state => localStorage.getItem("authMetadata") !== null ? JSON.parse(localStorage.getItem("authMetadata")) : state.user,
    loggedin: state => state.loggedin,
    accesstoken: state => state.tokens.access,
    auth: state => state,
  }
};

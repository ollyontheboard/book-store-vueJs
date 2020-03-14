import intergration_layer from "../../services/http-integration";

export default {
  state: {
    loggedin: false,
    user: false,
    tokens: {
      access: null,
    },
    products: false,
    product_details:false
  },
  mutations: {
    "setUser"(state, user) {
      localStorage.setItem("authMetadata", JSON.stringify(user));
      state.user = user;
    },
    // eslint-disable-next-line no-unused-vars
    "clearUser"(state, user) {
      state.user = false;
    },
    "setAccessToken"(state, token) {
      localStorage.setItem("accessToken", token);
      state.tokens.access = token;
    },
    "clearAccessToken"(state) {
      localStorage.removeItem("accessToken");
      state.tokens.access = false;
    },
    "setLoggedIn"(state, status) {
      state.loggedin = status;
    },

    "setAllProducts"(state, data) {
      if (navigator.onLine) {
        state.products = data;
        localStorage.setItem('products_cat1', JSON.stringify(data))
      }else {
        state.products = localStorage.getItem('products_cat1')
      }
    },
    "setProducts"(state, data) {
      if (navigator.onLine) {
        state.product_details = data;
        localStorage.setItem("product", JSON.stringify(data));
      }else {
        state.product_details = localStorage.getItem('product')
      }
    }
  },
  actions: {
   async authenticate({ commit }, data) {
      try {
        let response = await intergration_layer.authenticate(data);
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
        let response = await intergration_layer.store_userData(data);
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
        let response = await intergration_layer.getMe(data);
        commit("setLoggedIn", true);
        commit("setUser", response.success);
        return response
      }catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async getallProducts({ commit }, data) {
      try {
        let response = await intergration_layer.getProducts(data);
        commit("setAllProducts", response.data.products);
        return response
      }catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async getallProduct({ commit }, data) {
      try {
        let response = await intergration_layer.getProduct(data);
        commit("setProducts", response.data.product);
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
    allProducts: state => state.products,
    product: state => state.product_details,
    auth: state => state,
  }
};

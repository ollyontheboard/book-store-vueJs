import axios from "axios";

// const baseUrl = "http://0.0.0.0:3333/api/v1/";
axios.interceptors.request.use(
    config => {
        // config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // // config.headers.common['Access-Control-Allow-Origin'] = '*';
        config.headers.authorization = 'Bearer'+ ' ' + localStorage.getItem("accessToken");
        return config;
    },
    error => Promise.reject(error)
);
export default {
    authenticate(data) {
        return axios
            .post(process.env.VUE_APP_APIURL + "api/v1/login", data)
            .then(response => response.data)
            .catch(error => Promise.reject(error.response));
    },
    store_userData(data) {
        return axios
            .post(process.env.VUE_APP_APIURL + "api/v1/register", data)
            .then(response => response.data)
            .catch(error => Promise.reject(error.response));
    },

    getMe(data) {
        return axios
            .post(process.env.VUE_APP_APIURL + "api/v1/getUser", data)
            .then(response => response.data)
            .catch(error => Promise.reject(error.response));
    },


    getProducts(data) {
        return axios
            .get(process.env.VUE_APP_APIURL + "api/v1/products", data)
            .then(response => response.data)
            .catch(error => Promise.reject(error.response));
    },
};

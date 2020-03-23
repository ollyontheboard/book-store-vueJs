import intergration_layer from "../../services/http-integration";
import Vue from 'vue'
import iziToast from 'izitoast';

export default {
    state: {
        loggedin: false,
        user: false,
        tokens: {
            access: null,
        },
        products: false,
        product_details: false,
        cartItems: [],
        checkoutData: [
            {data:false}
        ],
        orders:{}
    },
    mutations: {
        "setUser"(state, user) {
            localStorage.removeItem("authMetadata");
            state.user = false;
            localStorage.setItem("authMetadata", JSON.stringify(user));
            state.user = user;
        },
        // eslint-disable-next-line no-unused-vars
        "setOrders"(state, data) {
            let orderData = {
                orders: [],
                order_details: []
            };
            let getData = JSON.parse(localStorage.getItem("orderData"));
            if (getData === null) {
                // eslint-disable-next-line no-unused-vars
                Object.keys(data).forEach((key, index) => {
                    console.log(key);
                    if (key === 'orders') {
                        orderData.orders.push(data[key][0])
                    }
                    if (key === 'order_details') {
                        orderData.order_details.push(data[key][0])
                    }
                });
                localStorage.setItem("orderData", JSON.stringify(orderData));
            }else {
                // eslint-disable-next-line no-unused-vars
                Object.keys(data).forEach((key, index) => {
                    if (key === 'orders') {
                        orderData.orders.push(data[key][0])
                    }
                    if (key === 'order_details') {
                        orderData.order_details.push(data[key][0])
                    }
                });
                // eslint-disable-next-line no-unused-vars
                Object.keys(getData).forEach((key, index) => {
                    if (key === 'orders') {
                        orderData.orders.push(data[key][0])
                    }
                    if (key === 'order_details') {
                        orderData.order_details.push(data[key][0])
                    }
                });
                localStorage.setItem("orderData", JSON.stringify(orderData));
            }
        },
        // eslint-disable-next-line no-unused-vars
        "setUserAuth"(state, user) {
            state.user = JSON.parse(localStorage.getItem("authMetadata"));
        },
        // eslint-disable-next-line no-unused-vars
        "clearUser"(state, user) {
            state.user = false;
            state.loggedin = false;
            localStorage.removeItem("authMetadata");
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
        "setCheckoutData"(state) {
            state.checkoutData = state.cartItems;
            localStorage.setItem("checkoutData", JSON.stringify(state.cartItems));
            state.cartItems = [];
        },
        "mountCheckoutData"(state) {
            state.checkoutData = JSON.parse(localStorage.getItem("checkoutData"));
        },
        "unsetCheckoutData"(state) {
            state.checkoutData = [
                {data:false}
            ];
            localStorage.removeItem("checkoutData")
        },
        "setAllProducts"(state, data) {
            if (navigator.onLine) {
                state.products = data;
                localStorage.setItem('products_cat1', JSON.stringify(data))
            } else {
                state.products = localStorage.getItem('products_cat1')
            }
        },
        "addtoCart"(state, itemToAdd) {
            // eslint-disable-next-line no-unused-vars
            let found = false;
            itemToAdd.qty = 1;
            // Add the item or increase qty
            let itemInCart = state.cartItems.filter(item => item.id === itemToAdd.id);
            let isItemInCart = itemInCart.length > 0;

            if (isItemInCart === false) {
                state.cartItems.push(Vue.util.extend({}, itemToAdd));
            } else {
                itemInCart[0].qty += itemToAdd.qty;
            }
            itemToAdd.qty = 1;
        },
        "removefromCart"(state, index) {
            // eslint-disable-next-line no-unused-vars
            state.cartItems.splice(index, 1)
        },
        "setProducts"(state, data) {
            if (navigator.onLine) {
                state.product_details = data;
                localStorage.setItem("product", JSON.stringify(data));
            } else {
                state.product_details = localStorage.getItem('product')
            }
        }
    },
    actions: {
        async authInit({commit}, data) {
            try {
                commit("setUserAuth", data);
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async authenticate({commit}, data) {
            try {
                let response = await intergration_layer.authenticate(data);
                commit("setLoggedIn", true);
                commit("setUser", response.data.user_details);
                commit("setAccessToken", response.data.token);
                return response
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async register_user({commit}, data) {
            try {
                let response = await intergration_layer.store_userData(data);
                commit("setLoggedIn", true);
                commit("setUser", response.data.user_details);
                commit("setAccessToken", response.data.token);
                return response
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },

        async getUserdata({commit}, data) {
            try {
                let response = await intergration_layer.getMe(data);
                commit("setLoggedIn", true);
                commit("setUser", response.success);
                return response
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async getallProducts({commit}, data) {
            try {
                if (navigator.onLine) {
                    let response = await intergration_layer.getProducts(data);
                    commit("setAllProducts", response.data.products);
                    return response
                } else {
                    commit("setAllProducts", '');
                }
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async getallProduct({commit}, data) {
            try {
                if (navigator.onLine) {
                    let response = await intergration_layer.getProduct(data);
                    commit("setProducts", response.data.product);
                    return response
                } else {
                    commit("setAllProducts", '');
                }
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async creatOrder({commit}, data) {
            try {
                let response = await intergration_layer.checkOut(data);
                commit("unsetCheckoutData");

                return response
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        },
        async ManualData({commit}, DemoJson) {
            commit('setAllProducts', DemoJson.data.products);
        },
        async logOut({commit}, data) {
            commit('clearUser', data);
            commit('clearAccessToken', data);
        },
        async addToCart({commit}, data) {
            commit('addtoCart', data);
            iziToast.success({
                title: 'Hey',
                message: "Product Added to cart successfully",
                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                // eslint-disable-next-line no-unused-vars
            });
        },
        async sliceCart({commit}, data) {
            commit('removefromCart', data)
        },
        async checkoutData({commit}, data) {
            commit('setCheckoutData', data)
        },
        async mountCheckoutData({commit}, data) {
            commit('mountCheckoutData', data)
        },
        async mutateOrders({commit}, data) {
            commit('setOrders', data.data)
        }

    },
    getters: {
        user: state => state.user,
        loggedin: state => state.loggedin,
        accesstoken: state => state.tokens.access,
        allProducts: state => state.products,
        product: state => state.product_details,
        auth: state => state,
        cart: state => state.cartItems,
        checkoutData: state => state.checkoutData
    }
};

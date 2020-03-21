<template>
    <div class="top_header">
        <div class="site-wrapper" id="top">

            <div class="site-header header-3  d-none d-lg-block">
                <authenticated-nav></authenticated-nav>

                <div class="header-middle pt--10 pb--10">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-3">
                                <router-link to="/">
                                    <img src="../assets/image/logo.png" alt="">
                                </router-link>
                            </div>
                            <div class="col-lg-5">
                                <div class="header-search-block">
                                    <input type="text" placeholder="Search entire store here">
                                    <button>Search</button>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-navigation flex-lg-right">
                                    <div class="cart-widget">
                                        <div class="login-block" v-show="getAuthenticated === false">
                                            <router-link to="/auth/login" class="font-weight-bold">Login</router-link>
                                            <br>
                                            <span>or</span>
                                            <router-link to="/auth/login">Register</router-link>
                                        </div>
                                        <div class="cart-block">
                                            <div class="cart-total">
                                            <span class="text-number">
                                                {{getCart.length}}
                                            </span>
                                                <span class="text-item">
                                                Shopping Cart
                                            </span>
                                                <span class="price">
                                                ₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
                                                <i class="fas fa-chevron-down"></i>
                                            </span>
                                            </div>
                                            <div class="cart-dropdown-block">
                                                <div class=" single-cart-block " v-for="item in getCart" :key="item.id">
                                                    <div class="cart-product">
                                                        <router-link class="../assets/image"
                                                                     :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }">
                                                            <img :src='url+item.image'
                                                                 style="height: 50px; width: 50px;" alt="">
                                                        </router-link>
                                                        <div class="content">
                                                            <h3>
                                                                <router-link class="title"
                                                                             :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }">
                                                                    {{item.name}}
                                                                </router-link>
                                                            </h3>
                                                            <p class="price"><span class="qty">{{item.qty}}×</span>
                                                                ₦{{item.price}}</p>
                                                            <button @click="removeItem(item)" class="cross-btn"><i class="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=" single-cart-block ">
                                                    <div class="btn-block">
                                                        <router-link class="btn"
                                                                     :to="{ name: 'view-cart'}">
                                                            View Cart <i
                                                                class="fas fa-chevron-right"></i>
                                                        </router-link>
                                                        <a href="#" class="btn btn--primary">Check Out <i
                                                                class="fas fa-chevron-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- @include('menu.htm') -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <navi-gator></navi-gator>
            </div>

            <mobile_nav></mobile_nav>

        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    const mobile_nav = () => import('./header-components/mobile-header-nav');
    const authenticatedNav = () => import('./header-components/authenticated_nav');
    const naviGator = () => import('./header-components/navigator');

    export default {
        name: 'Home',
        data() {
            return {
                url: process.env.VUE_APP_APIURL + 'uploads/',
            }
        },
        components: {
            mobile_nav,
            authenticatedNav,
            naviGator
        },
        computed: {
            ...mapGetters({
                getAuthenticated: "user",
                getCart: "cart"
            }),

            /**
             * @return {number}
             */
            Total() {
                let total = 0;
                this.getCart.forEach(item => {
                    total += (item.price * item.qty);
                });
                return total;
            }

        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            getCart: function (newValue, oldValue) {
                return newValue
            }
        },
        methods:{
            ...mapActions(['sliceCart']),

            removeItem(index) {
               this.sliceCart(index);
            }
        },
        mounted() {
        }
    }
</script>

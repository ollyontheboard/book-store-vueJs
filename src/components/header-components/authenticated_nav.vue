<template>
    <div class="authenticated_nav">
        <div class="container" v-show="this.getAuthenticated !== false">
            <div class="row">
                <div class="col-lg-4">
                    <ul class="header-top-list">
                        <li class="dropdown-trigger currency-dropdown"><a href="#">£ GBP </a><i
                                class="fas fa-chevron-down dropdown-arrow"></i>
                            <ul class="dropdown-box">
                                <li><a href="#">€ Euro</a></li>
                                <li><a href="#">£ Pound Sterling</a></li>
                                <li><a href="#">$ US Dollar</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-trigger language-dropdown"><a href="#"><span class="flag-img"><img
                                src="../../assets/image/icon/eng-flag.png" alt=""></span>en-gb </a><i
                                class="fas fa-chevron-down dropdown-arrow"></i>
                            <ul class="dropdown-box">
                                <li> <a href="#"> <span class="flag-img"><img src="../../assets/image/icon/eng-flag.png"
                                                                              alt=""></span>English</a></li>
                                <li> <a href="#"> <span class="flag-img"><img src="../../assets/image/icon/germany-flag.png"
                                                                              alt=""></span>Germany</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-8 flex-lg-right">
                    <ul class="header-top-list">
                        <li><a href="#"><i class="icons-left fas fa-random"></i>My Compare</a>
                        </li>
                        <li class="dropdown-trigger language-dropdown"><a href="#"><i
                                class="icons-left fas fa-heart"></i>
                            wishlist (0)</a>
                        </li>
                        <li class="dropdown-trigger language-dropdown"><a href="#"><i
                                class="icons-left fas fa-user"></i>
                            My Account</a><i class="fas fa-chevron-down dropdown-arrow"></i>
                            <ul class="dropdown-box">

                                <li> <router-link to="/authenticated/dashboard">My Account</router-link></li>
                                <li> <router-link to="/authenticated/dashboard">Order History</router-link></li>
                                <li> <router-link to="/authenticated/dashboard">Transactions</router-link></li>
                                <li> <router-link to="/authenticated/dashboard">Transactions</router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/contact"><i class="icons-left fas fa-phone"></i> Contact</router-link>
                        </li>
                        <li>
                            <router-link to="/checkout"><i class="icons-left fas fa-share"></i> Checkout</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "authenticated_nav",

        computed: {
            ...mapGetters({
                getAuthenticated: "user"
            })
        }
    }
</script>

<style scoped>

</style>

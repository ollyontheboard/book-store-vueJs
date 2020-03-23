<template>
    <div class="header-nav">
        <div class="site-mobile-menu">
            <header class="mobile-header d-block d-lg-none pt--10 pb-md--10">
                <div class="container">
                    <div class="row align-items-sm-end align-items-center">
                        <div class="col-md-4 col-7">
                            <router-link to="/">
                                <h3>Accentuate</h3>
                            </router-link>
                        </div>
                        <div class="col-md-3 col-5  order-md-3 text-right">
                            <div class="mobile-header-btns header-top-widget">
                                <ul class="header-links">
                                    <li class="sin-link">
                                        <router-link class="cart-link link-icon"
                                        :to="{ name: 'view-cart'}">
                                            <i class="ion-bag"></i>
                                        </router-link>
                                    </li>
                                    <li class="sin-link">
                                        <a href="javascript:" class="link-icon hamburgur-icon off-canvas-btn"><i
                                                class="ion-navicon"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!--Off Canvas Navigation Start-->
            <aside class="off-canvas-wrapper">
                <div class="btn-close-off-canvas">
                    <i class="ion-android-close"></i>
                </div>
                <div class="off-canvas-inner">
                    <!-- search box start -->
                    <div class="search-box offcanvas">
                        <form>
                            <input type="text" placeholder="Search Here">
                            <button class="search-btn"><i class="ion-ios-search-strong"></i></button>
                        </form>
                    </div>
                    <!-- search box end -->
                    <!-- mobile menu start -->
                    <div class="mobile-navigation">
                        <!-- mobile menu navigation start -->
                        <nav class="off-canvas-nav">
                            <ul class="mobile-menu main-mobile-menu">
                                <li class="menu-item">
                                    <router-link to="/" >Home</router-link><i></i>
                                </li>
                                <!-- Shop -->
                                <li class="menu-item">
                                    <a href="javascript:void(0)">About <i
                                            class="fas fa-chevron"></i></a>
                                </li>
                                <!-- Pages -->
                                <li class="menu-item">
                                    <a href="javascript:void(0)">Blog <i
                                            class="fas fa-chevron"></i></a>
                                </li>
                                <!-- Blog -->
                                <li class="menu-item">
                                    <router-link to="/faq">Faq<i
                                            class="fas fa-chevron"></i></router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="/contact">Contact</router-link>
                                </li>
                            </ul>
                        </nav>
                        <!-- mobile menu navigation end -->
                    </div>
                    <!-- mobile menu end -->
                    <nav class="off-canvas-nav">
                        <ul class="mobile-menu menu-block-2">
                            <li class="menu-item-has-children">
                                <a href="#">Lang - Eng<i class="fas fa-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li>Eng</li>
                                    <li>Ban</li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children" v-show="getAuthenticated !== false">
                                <a href="#">My Account <i class="fas fa-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li> <router-link to="/authenticated/dashboard">My Account</router-link></li>
                                    <li> <router-link to="/authenticated/dashboard">Order History</router-link></li>
                                    <li> <router-link to="/authenticated/dashboard">Transactions</router-link></li>
                                    <li> <router-link to="/authenticated/dashboard">Transactions</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div class="off-canvas-bottom">
                        <div class="contact-list mb--10">
                            <a href="#" class="sin-contact"><i class="fas fa-mobile-alt"></i>(12345) 78790220</a>
                            <a href="#" class="sin-contact"><i class="fas fa-envelope"></i>examle@handart.com</a>
                        </div>
                        <div class="off-canvas-social">
                            <a href="#" class="single-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="single-icon"><i class="fas fa-rss"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-youtube"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="single-icon"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </aside>
            <!--Off Canvas Navigation End-->
        </div>


        <div class="sticky-init fixed-header common-sticky">
            <div class="container d-none d-lg-block">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <router-link to="/">
                            <img src="../../assets/image/logo.png" alt="">
                        </router-link>
                    </div>
                    <div class="col-lg-8">
                        <div class="main-navigation flex-lg-right">
                            <ul class="main-menu menu-right li-last-0">
                                <li class="menu-item">
                                    <router-link to="/" >Home</router-link><i></i>
                                </li>
                                <!-- Shop -->
                                <li class="menu-item">
                                    <a href="javascript:void(0)">About <i
                                            class="fas fa-chevron"></i></a>
                                </li>
                                <!-- Pages -->
                                <li class="menu-item">
                                    <a href="javascript:void(0)">Blog <i
                                            class="fas fa-chevron"></i></a>
                                </li>
                                <!-- Blog -->
                                <li class="menu-item">
                                    <router-link to="/faq">Faq<i
                                            class="fas fa-chevron"></i></router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="/contact">Contact</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--=================================
        Hero Area
    ===================================== -->
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "header-nav",
        computed: {
            ...mapGetters({
                getAuthenticated: "user"
            })
        }
    }
</script>

<style scoped>

</style>

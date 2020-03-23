<template>
    <div class="authenticated_nav">
        <div class="container" v-show="this.getAuthenticated !== false">
            <div class="row">
                <div class="col-lg-4">
                    <ul class="header-top-list">
                        <li class="dropdown-trigger language-dropdown"><a href="#"><span class="flag-img"><img
                                src="../../assets/image/icon/eng-flag.png" alt=""></span>en-ng </a><i
                                class="fas fa-chevron-down dropdown-arrow"></i>
                            <ul class="dropdown-box">
                                <li><a href="#"> <span class="flag-img"><img src="../../assets/image/icon/eng-flag.png"
                                                                             alt=""></span>English</a></li>
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

                                <li>
                                    <router-link to="/authenticated/dashboard">My Account</router-link>
                                </li>
                                <li>
                                    <router-link to="/authenticated/dashboard">Order History</router-link>
                                </li>
                                <li>
                                    <router-link to="/authenticated/dashboard">Transactions</router-link>
                                </li>
                                <li>
                                    <router-link to="/authenticated/dashboard">Transactions</router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/contact"><i class="icons-left fas fa-phone"></i> Contact</router-link>
                        </li>
                        <li>
                            <a href="javascript:" v-show="this.$route.name !== 'checkout'" @click="checkout()"><i class="icons-left fas fa-share"></i> Checkout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "authenticated_nav",

        computed: {
            ...mapGetters({
                getAuthenticated: "user"
            })
        },
        methods:{
            ...mapActions(['checkoutData']),

            async checkout(data){
                await this.checkoutData(data);
                this.$router.push('/checkout');
            }
        }
    }
</script>

<style scoped>

</style>

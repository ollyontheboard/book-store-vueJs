<template>
    <div class="login">
        <div class="site-wrapper" id="top">
            <top-header></top-header>
            <section class="breadcrumb-section">
                <h2 class="sr-only">Site Breadcrumb</h2>
                <div class="container">
                    <div class="breadcrumb-contents">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active">Login</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <!--=============================================
        =            Login Register page content         =
        =============================================-->
            <main class="page-section inner-page-sec-padding-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                            <!-- Login Form s-->
                            <form @submit.prevent="onSubmit('register')">
                                <div class="login-form">
                                    <h4 class="login-title">New Customer</h4>
                                    <p><span class="font-weight-bold">I am a new customer</span></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mb--15">
                                            <label for="email">Full Name</label>
                                            <input class="mb-0 form-control" id="name"
                                                   placeholder="Enter your full name"
                                                   required type="text"
                                                   v-model="userData.full_name">
                                        </div>
                                        <div class="col-12 mb--20">
                                            <label for="email">Email</label>
                                            <input class="mb-0 form-control" id="email"
                                                   placeholder="Enter Your Email Address Here.." required
                                                   type="email"
                                                   v-model="userData.email">
                                        </div>
                                        <div class="col-lg-6 mb--20">
                                            <label for="password">Password</label>
                                            <input class="mb-0 form-control" id="password"
                                                   placeholder="Enter your password" required
                                                   type="password" v-model="userData.password">
                                        </div>
                                        <div class="col-lg-6 mb--20">
                                            <label for="password">Repeat Password</label>
                                            <input class="mb-0 form-control" id="repeat-password"
                                                   placeholder="Repeat your password" required type="password"
                                                   v-model="userData.c_password">
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-outlined" type="submit">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form @submit.prevent="onSubmit('login')">
                                <div class="login-form">
                                    <h4 class="login-title">Returning Customer</h4>
                                    <p><span class="font-weight-bold">I am a returning customer</span></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mb--15">
                                            <label for="email">Enter your email address here...</label>
                                            <input class="mb-0 form-control" id="email1"
                                                   placeholder="Enter you email address here..."
                                                   required type="email"
                                                   v-model="AuthData.email">
                                        </div>
                                        <div class="col-12 mb--20">
                                            <label for="password">Password</label>
                                            <input class="mb-0 form-control" id="login-password"
                                                   placeholder="Enter your password"
                                                   required type="password"
                                                   v-model="AuthData.password">
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-outlined" type="submit">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script lang="js">
    const pageFooter = () => import('@/components/footer.vue');
    const topHeader = () => import('@/components/top-header.vue');
    import {mapActions} from "vuex";


    export default {
        name: "auth",
        components: {pageFooter, topHeader},
        data() {
            return {
                loading: true,
                userData: {
                    email: '',
                    password: '',
                    c_password: '',
                    full_name: ''
                },
                AuthData: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            ...mapActions(['authenticate']),
            ...mapActions(['register_user']),
            ...mapActions(['getUserdata']),
            onSubmit(comingFromm) {
                if (comingFromm === 'login') {
                    this.authenticate(this.AuthData).then(async (response) => {
                        this.$iziToast.success({
                            title: 'Hey',
                            message: response.message,
                            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                            // eslint-disable-next-line no-unused-vars
                        });
                        this.$router.push('/authenticated/dashboard');
                        // eslint-disable-next-line no-unused-vars
                    }).catch(error => {
                        this.$iziToast.error({
                            title: 'Hey',
                            message: 'Unauthorized invalid email or password',
                            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                            // eslint-disable-next-line no-unused-vars
                        })
                    })

                } else if (comingFromm === 'register') {
                    this.register_user(this.userData).then(async (response) => {
                        this.$iziToast.success({
                            title: 'Hey',
                            message: response.message,
                            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                            // eslint-disable-next-line no-unused-vars
                        });
                        this.$router.push('/authenticated/dashboard');
                    })
                        // eslint-disable-next-line no-unused-vars
                        .catch(error => {
                            this.$iziToast.error({
                                title: 'Hey',
                                message: "Something went wrong Mail already exist",
                                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                                // eslint-disable-next-line no-unused-vars
                            });
                        })
                }
            }
        },
        mounted() {
            // console.log(this.getUserdata());
        }
    }
</script>

<!--<style lang="css" scoped>-->
<!--    @import "../../assets/css/main.css";-->
<!--    @import "../../assets/css/plugins.css";-->
<!--</style>-->


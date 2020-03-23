<template>
    <div class="account-dashboard">
        <top-header></top-header>

        <section class="breadcrumb-section">
            <h2 class="sr-only">Site Breadcrumb</h2>
            <div class="container">
                <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item active">My Account</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <div class="page-section inner-page-sec-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <!-- My Account Tab Menu Start -->
                            <div class="col-lg-3 col-12">
                                <div class="myaccount-tab-menu nav" role="tablist">
                                    <a href="#dashboad" class="active" data-toggle="tab"><i
                                            class="fas fa-tachometer-alt"></i>
                                        Dashboard</a>
                                    <a href="#orders" data-toggle="tab"><i class="fa fa-cart-arrow-down"></i> Orders</a>
                                    <a href="#payment-method" data-toggle="tab"><i class="fa fa-credit-card"></i>
                                        Payment
                                        Method</a>
<!--                                    <a href="#address-edit" data-toggle="tab"><i class="fa fa-map-marker"></i>-->
<!--                                        address</a>-->
<!--                                    <a href="#account-info" data-toggle="tab"><i class="fa fa-user"></i> Account-->
<!--                                        Details</a>-->
                                    <a href="#" @click="logOutToken()"><i class="fas fa-sign-out-alt"></i> Logout</a>
                                </div>
                            </div>
                            <!-- My Account Tab Menu End -->
                            <!-- My Account Tab Content Start -->
                            <div class="col-lg-9 col-12 mt--30 mt-lg--0">
                                <div class="tab-content" id="myaccountContent">
                                    <!-- Single Tab Content Start -->
                                    <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                        <div class="myaccount-content">
                                            <h3>Dashboard</h3>
                                            <div class="welcome mb-20">
                                                <p>Hello, <strong>{{getAuthenticated.full_name}}</strong> (If Not <strong>{{getAuthenticated.full_name}}
                                                    !</strong><a href="#" @click="logOutToken()" class="logout">
                                                    Logout</a>)</p>
                                            </div>
                                            <p class="mb-0">From your account dashboard. you can easily check &amp; view
                                                your
                                                recent orders, manage your shipping address and edit your
                                                password and account details.</p>
                                        </div>
                                    </div>
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
                                    <div class="tab-pane fade" id="orders" role="tabpanel">
                                        <div class="myaccount-content">
                                            <h3>Orders</h3>
                                            <div class="myaccount-table table-responsive text-center">
                                                <table class="table table-bordered">
                                                    <thead class="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Name</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(item, index) in orderData.orders" :key="index">
                                                        <td>{{("" + Math.random()).substring(2, 8) }}</td>
                                                        <td>{{item.name}}</td>
                                                        <td>{{formatDate(item.created_at)}}</td>
                                                        <td>Successful</td>
                                                        <td>₦{{(item.price * item.qty).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</td>
                                                        <td><router-link
                                                                :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }">
                                                            View
                                                        </router-link> </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
                                    <div class="tab-pane fade" id="payment-method" role="tabpanel">
                                        <div class="myaccount-content">
                                            <h3>Payment Method</h3>
                                            <p class="saved-message">You Can't Saved Your Payment Method yet.</p>
                                        </div>
                                    </div>
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->
<!--                                    <div class="tab-pane fade" id="address-edit" role="tabpanel">-->
<!--                                        <div class="myaccount-content">-->
<!--                                            <h3>Billing Address</h3>-->
<!--                                            <address>-->
<!--                                                <p><strong>Alex Tuntuni</strong></p>-->
<!--                                                <p>1355 Market St, Suite 900 <br>-->
<!--                                                    San Francisco, CA 94103</p>-->
<!--                                                <p>Mobile: (123) 456-7890</p>-->
<!--                                            </address>-->
<!--                                            <a href="#" class="btn btn&#45;&#45;primary"><i class="fa fa-edit"></i>Edit-->
<!--                                                Address</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                    <!-- Single Tab Content End -->
                                    <!-- Single Tab Content Start -->


                                </div>
                            </div>
                            <!-- My Account Tab Content End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <page-footer></page-footer>
    </div>
</template>

<script lang="js">
    import {mapActions, mapGetters} from "vuex";
    import store from "../../store/store";
    import moment from "moment";

    const pageFooter = () => import('@/components/footer.vue');
    const topHeader = () => import('@/components/top-header.vue');

    export default {
        name: "account-board",
        data() {
            return {
                orderData: JSON.parse(localStorage.getItem("orderData"))
            }
        },
        components: {pageFooter, topHeader},
        computed: {
            ...mapGetters({
                getAuthenticated: "user"
            })
        },
        methods:{
            ...mapActions(['logOut']),
           async logOutToken(){
                // eslint-disable-next-line no-unused-vars
              await this.logOut();
                  await  this.$router.push('/');
            },
            formatDate (value){
                return moment(String(value)).format('dddd, MMMM Do YYYY')
            }
        },
        created() {
            const accessToken = localStorage.getItem("accessToken");
            const authMetadata = localStorage.getItem("authMetadata");
            if (accessToken) {
                store.dispatch('authInit', authMetadata)
                    .then();
            }
        }
    }
</script>

<style scoped>

</style>

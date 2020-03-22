<template>
    <div class="view-cart">
        <top-header></top-header>

        <section class="breadcrumb-section">
            <h2 class="sr-only">Site Breadcrumb</h2>
            <div class="container">
                <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Cart</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <!-- Cart Page Start -->
        <main class="cart-page-main-block inner-page-sec-padding-bottom">
            <div class="cart_area cart-area-padding  ">
                <div class="container">
                    <div class="page-section-title">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <form action="#" class="">
                                <!-- Cart Table -->
                                <div class="cart-table table-responsive mb--40">
                                    <table class="table">
                                        <!-- Head Row -->
                                        <thead>
                                        <tr>
                                            <th class="pro-remove"></th>
                                            <th class="pro-thumbnail">Image</th>
                                            <th class="pro-title">Product</th>
                                            <th class="pro-price">Price</th>
                                            <th class="pro-quantity">Quantity</th>
                                            <th class="pro-subtotal">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <!-- Product Row -->
                                        <tr v-for="item in getCart" :key="item.id">
                                            <td class="pro-remove"><a href="javascript:void(0);" @click="removeItem(item)"><i class="far fa-trash-alt"></i></a>
                                            </td>
                                            <td class="pro-thumbnail">
                                                <router-link class="../assets/image"
                                                                                         :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }">
                                                <img :src='item.image'
                                                     style="height: 50px; width: 50px;" alt="product">
                                            </router-link></td>
                                            <td class="pro-title"><a href="#">{{item.name}}</a></td>
                                            <td class="pro-price"><span>₦{{item.price}}</span></td>
                                            <td class="pro-quantity">
                                                <div class="pro-qty">
                                                    <div class="count-input-block">
                                                        <input type="number" disabled class="form-control text-center"
                                                               v-model="item.qty">
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="pro-subtotal"><span>₦{{(item.price * item.qty).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-section-2">
                <div class="container">
                    <div class="row">
                        <!-- Cart Summary -->
                        <div class="col-lg-6 col-12 d-flex">
                            <div class="cart-summary">
                                <div class="cart-summary-wrap">
                                    <h4><span>Cart Summary</span></h4>
                                    <p>Sub Total <span class="text-primary">₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></p>
                                    <p>Shipping Cost <span class="text-primary">₦{{(0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></p>
                                    <h2>Grand Total <span class="text-primary">₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></h2>
                                </div>
                                <div class="cart-summary-button">
                                    <router-link to="/checkout" class="checkout-btn c-btn btn--primary">Check Out</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </main>

        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script lang="js">
    import {mapActions, mapGetters} from "vuex";
    const pageFooter = () => import('@/components/footer.vue');
    const topHeader = () => import('@/components/top-header.vue');
    export default {
        name: "view-cart",
        data() {
            return {
                url: process.env.VUE_APP_APIURL + 'uploads/',
            }
        },
        components: {
            pageFooter,
            topHeader,
        },
        computed: {
            ...mapGetters({
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
            setTimeout(function() {
                // Get the head tag
                var head_ID = document.getElementsByTagName("head")[0];
                // Create script element
                var script_element = document.createElement('script');
                // Set the script type to JavaScript
                script_element.type = 'text/javascript';
                // External JS file
                script_element.src = 'js/custom.js';
                head_ID.appendChild(script_element);
            }, 300);
        }
    }
</script>

<style scoped>

</style>

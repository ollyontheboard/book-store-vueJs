<template>
    <div class="checkout-view">
        <top-header></top-header>
        <section class="breadcrumb-section">
            <h2 class="sr-only">Site Breadcrumb</h2>
            <div class="container">
                <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item active">Checkout</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <main id="content" class="page-section inner-page-sec-padding-bottom space-db--20">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Checkout Form s-->
                        <div class="checkout-form">
                            <form @submit.prevent="placeOrder()">
                            <div class="row row-40">
                                <div class="col-12">
                                    <h1 class="quick-title">Checkout</h1>
                                    <!-- Slide Down Trigger  -->
                                    <!-- Slide Down Trigger  -->
                                    <div class="checkout-quick-box">
                                        <p><i class="far fa-sticky-note"></i>Checking out Orders? <a href="javascript:"
                                                                                               class="slide-trigger"
                                                                                               data-target="#quick-cupon">
                                            You need to be logged in to continue</a></p>
                                    </div>
                                    <!-- Slide Down Blox ==> Cupon Box -->
                                </div>
                                <div class="col-lg-7 mb--20">
                                    <!-- Billing Address -->
                                    <div id="billing-form" class="mb-40">
                                        <h4 class="checkout-title">Billing Address</h4>
                                        <div class="row">
                                            <div class="col-12 col-12 mb--20">
                                                <label>Full Name*</label>
                                                <input type="text" disabled v-model="getAuthenticated.full_name" required
                                                       placeholder="First Name">
                                            </div>
                                            <!--                                            <div class="col-12 mb&#45;&#45;20">-->
                                            <!--                                                <label>Company Name</label>-->
                                            <!--                                                <input type="text" placeholder="Company Name">-->
                                            <!--                                            </div>-->
                                            <div class="col-12 col-12 mb--20">
                                                <label>Country*</label>
                                                <select disabled class="nice-select">
                                                    <option>Nigeria</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 col-12 mb--20">
                                                <label>Email Address*</label>
                                                <input type="email" disabled v-model="getAuthenticated.email" required
                                                       placeholder="Email Address">
                                            </div>
                                            <div class="col-md-6 col-12 mb--20">
                                                <label>Phone no*</label>
                                                <input type="text" v-model="orderData.phone" placeholder="Phone number" required>
                                            </div>
                                            <div class="col-12 mb--20">
                                                <label>Address*</label>
                                                <input type="text" v-model="orderData.address" placeholder="Address line 1" required>
                                            </div>
                                            <div class="col-md-6 col-12 mb--20">
                                                <label>Town/City*</label>
                                                <input type="text" v-model="orderData.city" placeholder="Town/City" required>
                                            </div>
                                            <div class="col-md-6 col-12 mb--20">
                                                <label>State*</label>
                                                <input type="text" v-model="orderData.state" placeholder="State" required>
                                            </div>
                                            <div class="col-md-6 col-12 mb--20">
                                                <label>Postal Code*</label>
                                                <input type="text" v-model="orderData.postalCode" placeholder="Postal Code" required>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Shipping Address -->
                                    <div class="order-note-block mt--30">
                                        <label for="order-note">Order notes</label>
                                        <textarea id="order-note" v-model="orderData.orderNote" cols="30" rows="10" class="order-note"
                                                  placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="row">
                                        <!-- Cart Total -->
                                        <div class="col-12">
                                            <div class="checkout-cart-total">
                                                <h2 class="checkout-title">YOUR ORDER</h2>
                                                <h4>Product <span>Total</span></h4>
                                                <ul>
                                                    <li v-for="item in getCheckoutData" :key="item.id">
                                                        <span class="left">{{item.name}} X {{item.qty}}</span> <span
                                                            class="right">₦{{(item.price * item.qty).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></li>
                                                </ul>
                                                <p>Sub Total <span>₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></p>
                                                <p>Shipping Fee <span>₦{{(0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></p>
                                                <h4>Grand Total <span>₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></h4>
                                                <div class="method-notice mt--25">
                                                    <article>
                                                        <h3 class="d-none sr-only">blog-article</h3>
                                                        Sorry, it seems that there are no available payment methods for
                                                        your state. Please contact us if you
                                                        require
                                                        assistance
                                                        or wish to make alternate arrangements.
                                                    </article>
                                                </div>
                                                <div class="term-block">
                                                    <input type="checkbox" required id="accept_terms2">
                                                    <label for="accept_terms2">I’ve read and accept the terms &
                                                        conditions</label>
                                                </div>
                                                <button type="submit" class="place-order w-100">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
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
    // import {mapActions, mapGetters} from "vuex";
    import {mapGetters,mapActions} from "vuex";

    const pageFooter = () => import('@/components/footer.vue');
    const topHeader = () => import('@/components/top-header.vue');
    export default {
        name: "checkout",
        data() {
            return {
                orderData: {
                    checkoutProduct: {}
                }
            }
        },
        components: {
            pageFooter,
            topHeader,
        },
        computed: {
            ...mapGetters({
                getAuthenticated: "user",
                getCheckoutData: "checkoutData"
            }),
            /**
             * @return {number}
             */
            Total() {
                let total = 0;
                this.getCheckoutData.forEach(item => {
                    total += (item.price * item.qty);
                });
                return total;
            }

        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            getCheckoutData: function (newValue, oldValue) {
                return newValue
            }
        },
        methods: {
            ...mapActions(['creatOrder']),
            ...mapActions(['mutateOrders']),
            async placeOrder() {
                if (this.getAuthenticated === false) {
                    this.$iziToast.error({
                        title: 'Hey',
                        message: 'Kindly login to proceed with checkout',
                        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                        // eslint-disable-next-line no-unused-vars
                    })
                } else {
                    if(this.getCheckoutData.length > 0) {
                        this.orderData.checkoutProduct = this.getCheckoutData;
                        // eslint-disable-next-line no-unused-vars
                        await this.creatOrder(this.orderData).then(async (response) => {
                            await this.$iziToast.success({
                                title: 'Hey',
                                message: "Order Placed Successfully",
                                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                            });
                            this.mutateOrders(response);
                            await this.$router.push({
                                name: 'checkout-complete',
                                params: {orderData: response},
                                prop: {orderData: response}
                            });

                            // eslint-disable-next-line no-unused-vars
                        }).catch(error => {
                            this.$iziToast.error({
                                title: 'Hey',
                                message: "Checkout unsuccessfull server error",
                                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                                // eslint-disable-next-line no-unused-vars
                            });
                        });
                    }else {
                        this.$iziToast.error({
                            title: 'Hey',
                            message: 'one product must at least be selected',
                            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                            // eslint-disable-next-line no-unused-vars
                        })
                    }

                }
            },
            mounted() {
                setTimeout(function () {
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
                localStorage.setItem("orderData", '[]');
                if (this.getAuthenticated === false) {
                    this.orderData = {};
                    this.orderData.checkoutProduct = this.getCheckoutData
                }
            },
        }
    }
</script>

<style scoped>

</style>

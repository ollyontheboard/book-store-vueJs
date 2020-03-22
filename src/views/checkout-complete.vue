<template>
    <div class="checkout-complete">
        <top-header></top-header>
        <section class="breadcrumb-section">
            <h2 class="sr-only">Site Breadcrumb</h2>
            <div class="container">
                <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item active">Order Complete</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

        <!-- order complete Page Start -->
        <section class="order-complete inner-page-sec-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="order-complete-message text-center">
                            <h1>Thank you !</h1>
                            <p>Your order has been received.</p>
                        </div>
                        <ul class="order-details-list">
                            <li>Order Number: <strong>{{orderData.data.order_details[0].id}}</strong></li>
                            <li>Date: <strong>{{this.formatDate(orderData.data.order_details[0].date.date)}}</strong></li>
                            <li>Total: <strong>₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</strong></li>
                            <li>Payment Method: <strong>Cash on Delivery</strong></li>
                        </ul>
                        <p>Pay with cash upon delivery.</p>
                        <h3 class="order-table-title">Order Details</h3>
                        <div class="table-responsive">
                            <table class="table order-details-table">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in orderData.data.orders" :key="item.id">
                                    <td><router-link
                                            :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }">
                                        {{item.name}}
                                    </router-link> <strong>× {{item.qty}}</strong></td>
                                    <td><span>₦{{(item.price * item.qty).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Subtotal:</th>
                                    <td><span>₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></td>
                                </tr>
                                <tr>
                                    <th>Payment Method:</th>
                                    <td>Cash on Delivery</td>
                                </tr>
                                <tr>
                                    <th>Total:</th>
                                    <td><span>₦{{(Total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- order complete Page End -->
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script lang="js">
    import moment from "moment";

    const pageFooter = () => import('@/components/footer.vue');
    const topHeader = () => import('@/components/top-header.vue');
    export default {
        name: "checkout-complete",
        data() {
            return {
            }
        },
        props: ['orderData'],
        components: {
            pageFooter,
            topHeader,
        },
        computed: {
            /**
             * @return {number}
             */
            Total() {
                let total = 0;
                this.orderData.data.orders.forEach(item => {
                    total += (item.price * item.qty);
                });
                return total;
            },

        },
        methods: {
            // ...mapActions(['creatOrder']),
            //
            formatDate (value){
                return moment(String(value)).format('dddd, MMMM Do YYYY')
            }
        },
        created() {
            if (this.orderData === undefined){
                this.$router.push('/checkout');
            }
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

        }
    }
</script>

<style scoped>

</style>

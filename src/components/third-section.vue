<template>
    <div class="section-two">
        <section class="section-margin">
            <div class="container">
                <div class="section-title section-title--bordered">
                    <h2>Kids BOOKS</h2>
                </div>
                <div class="product-slider sb-slick-slider slider-border-single-row" data-slick-setting='{
                        "autoplay": true,
                        "autoplaySpeed": 8000,
                        "slidesToShow": 5,
                        "dots":true
                    }' data-slick-responsive='[
                        {"breakpoint":1200, "settings": {"slidesToShow": 4} },
                        {"breakpoint":992, "settings": {"slidesToShow": 3} },
                        {"breakpoint":768, "settings": {"slidesToShow": 2} },
                        {"breakpoint":480, "settings": {"slidesToShow": 1} },
                        {"breakpoint":320, "settings": {"slidesToShow": 1} }
                    ]'>
                    <div class="single-slide" v-for="item in productsGetter" :key="item.id">
                        <div class="product-card">
                            <div class="product-header">
                                General
                                <h3>
                                    <router-link
                                            :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }">
                                        {{item.name}}
                                    </router-link>
                                </h3>
                            </div>
                            <div class="product-card--body">
                                <div class="card-image">
                                    <img :src='item.image' alt="">
                                    <div class="hover-contents">
                                        <router-link
                                                :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }"
                                                class="hover-image">
                                            <img :src='item.image' alt="">
                                        </router-link>
                                        <div class="hover-btns">
                                            <a href="javascript:void(0);" @click="addItem(item)" class="single-btn">
                                                <i class="fas fa-shopping-basket"></i>
                                            </a>
                                            <!--                                            <a href="wishlist.html" class="single-btn">-->
                                            <!--                                                <i class="fas fa-heart"></i>-->
                                            <!--                                            </a>-->
                                            <!--                                            <a href="compare.html" class="single-btn">-->
                                            <!--                                                <i class="fas fa-random"></i>-->
                                            <!--                                            </a>-->
                                            <!--                                            <a href="#" data-toggle="modal" data-target="#quickModal"-->
                                            <!--                                               class="single-btn">-->
                                            <!--                                                <i class="fas fa-eye"></i>-->
                                            <!--                                            </a>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="price-block">
                                    <span class="price">₦{{item.price}}</span>
                                    <del class="price-old">₦{{item.price}}</del>
                                    <span class="price-discount">20%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "section-two",
        data: function () {
            return {
                url: process.env.VUE_APP_APIURL + 'uploads/',
                // products: JSON.parse(localStorage.getItem("products_cat1"))
            };
        },
        computed: {
            ...mapGetters({
                productsGetter: "allProducts"
            })
        },
        methods:{
            ...mapActions(['addToCart']),
            addItem(item){
                this.addToCart(item)
            },
        },
    }
</script>

<style scoped>

</style>

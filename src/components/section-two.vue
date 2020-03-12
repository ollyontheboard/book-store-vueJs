<template>
    <div class="section-two">
        <section class="section-margin">
            <div class="container">
                <div class="section-title section-title--bordered">
                    <h2>GENERAL BOOKS</h2>
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
                    <div class="single-slide" v-for="item in products" :key="item.id">
                        <div class="product-card">
                            <div class="product-header">
                                <a href="#" class="author">
                                    General
                                </a>
                                <h3><a href="product-details.hRevolutionizetml">{{item.name}}</a></h3>
                            </div>
                            <div class="product-card--body">
                                <div class="card-image">
                                    <img :src='url+item.image' alt="">
                                    <div class="hover-contents">
                                        <a href="product-details.html" class="hover-image">
                                            <img src="../assets/image/products/product-1.jpg" alt="">
                                        </a>
                                        <div class="hover-btns">
                                            <a href="cart.html" class="single-btn">
                                                <i class="fas fa-shopping-basket"></i>
                                            </a>
                                            <a href="wishlist.html" class="single-btn">
                                                <i class="fas fa-heart"></i>
                                            </a>
                                            <a href="compare.html" class="single-btn">
                                                <i class="fas fa-random"></i>
                                            </a>
                                            <a href="#" data-toggle="modal" data-target="#quickModal"
                                               class="single-btn">
                                                <i class="fas fa-eye"></i>
                                            </a>
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
    import {mapGetters} from "vuex";

    export default {
        name: "section-two",
        data: function () {
            return {
                url: process.env.VUE_APP_APIURL+'uploads/'
            };
        },
        computed: {
            ...mapGetters({
                products: "allProducts"
            })
        }
    }
</script>

<style scoped>

</style>

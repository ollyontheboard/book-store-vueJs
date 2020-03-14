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
                                    <img :src='url+item.image' alt="">
                                    <div class="hover-contents">
                                        <router-link
                                                :to="{ name: 'product_details', params: { id: item.id }, prop:{id: item.id} }"
                                                class="hover-image">
                                            <img :src='url+item.image' alt="">
                                        </router-link>
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

<!--                    <div class="modal fade modal-quick-view" id="quickModal" tabindex="-1" role="dialog"-->
<!--                         aria-labelledby="quickModal" aria-hidden="true">-->
<!--                        <div class="modal-dialog" role="document">-->
<!--                            <div class="modal-content">-->
<!--                                <button type="button" class="close modal-close-btn ml-auto" data-dismiss="modal" aria-label="Close">-->
<!--                                    <span aria-hidden="true">&times;</span>-->
<!--                                </button>-->
<!--                                <div class="product-details-modal">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-lg-5">-->
<!--                                            &lt;!&ndash; Product Details Slider Big Image&ndash;&gt;-->
<!--                                            <div class="product-details-slider sb-slick-slider arrow-type-two" data-slick-setting='{-->
<!--              "slidesToShow": 1,-->
<!--              "arrows": false,-->
<!--              "fade": true,-->
<!--              "draggable": false,-->
<!--              "swipe": false,-->
<!--              "asNavFor": ".product-slider-nav"-->
<!--              }'>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-1.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-2.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-3.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-4.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-5.jpg" alt="">-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            &lt;!&ndash; Product Details Slider Nav &ndash;&gt;-->
<!--                                            <div class="mt&#45;&#45;30 product-slider-nav sb-slick-slider arrow-type-two"-->
<!--                                                 data-slick-setting='{-->
<!--            "infinite":true,-->
<!--              "autoplay": true,-->
<!--              "autoplaySpeed": 8000,-->
<!--              "slidesToShow": 4,-->
<!--              "arrows": true,-->
<!--              "prevArrow":{"buttonClass": "slick-prev","iconClass":"fa fa-chevron-left"},-->
<!--              "nextArrow":{"buttonClass": "slick-next","iconClass":"fa fa-chevron-right"},-->
<!--              "asNavFor": ".product-details-slider",-->
<!--              "focusOnSelect": true-->
<!--              }'>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-1.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-2.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-3.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-4.jpg" alt="">-->
<!--                                                </div>-->
<!--                                                <div class="single-slide">-->
<!--                                                    <img src="../assets/image/products/product-details-5.jpg" alt="">-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-lg-7 mt&#45;&#45;30 mt-lg&#45;&#45;30">-->
<!--                                            <div class="product-details-info pl-lg&#45;&#45;30 ">-->
<!--                                                <p class="tag-block">Tags: <a href="#">Movado</a>, <a href="#">Omega</a></p>-->
<!--                                                <h3 class="product-title">Beats EP Wired On-Ear Headphone-Black</h3>-->
<!--                                                <ul class="list-unstyled">-->
<!--                                                    <li>Ex Tax: <span class="list-value"> £60.24</span></li>-->
<!--                                                    <li>Brands: <a href="#" class="list-value font-weight-bold"> Canon</a></li>-->
<!--                                                    <li>Product Code: <span class="list-value"> model1</span></li>-->
<!--                                                    <li>Reward Points: <span class="list-value"> 200</span></li>-->
<!--                                                    <li>Availability: <span class="list-value"> In Stock</span></li>-->
<!--                                                </ul>-->
<!--                                                <div class="price-block">-->
<!--                                                    <span class="price-new">£73.79</span>-->
<!--                                                    <del class="price-old">£91.86</del>-->
<!--                                                </div>-->
<!--                                                <div class="rating-widget">-->
<!--                                                    <div class="rating-block">-->
<!--                                                        <span class="fas fa-star star_on"></span>-->
<!--                                                        <span class="fas fa-star star_on"></span>-->
<!--                                                        <span class="fas fa-star star_on"></span>-->
<!--                                                        <span class="fas fa-star star_on"></span>-->
<!--                                                        <span class="fas fa-star "></span>-->
<!--                                                    </div>-->
<!--                                                    <div class="review-widget">-->
<!--                                                        <a href="#">(1 Reviews)</a> <span>|</span>-->
<!--                                                        <a href="#">Write a review</a>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <article class="product-details-article">-->
<!--                                                    <h4 class="sr-only">Product Summery</h4>-->
<!--                                                    <p>Long printed dress with thin adjustable straps. V-neckline and wiring under-->
<!--                                                        the Dust with ruffles at the bottom-->
<!--                                                        of the-->
<!--                                                        dress.</p>-->
<!--                                                </article>-->
<!--                                                <div class="add-to-cart-row">-->
<!--                                                    <div class="count-input-block">-->
<!--                                                        <span class="widget-label">Qty</span>-->
<!--                                                        <input type="number" class="form-control text-center" value="1">-->
<!--                                                    </div>-->
<!--                                                    <div class="add-cart-btn">-->
<!--                                                        <a href="#" class="btn btn-outlined&#45;&#45;primary"><span-->
<!--                                                                class="plus-icon">+</span>Add to Cart</a>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="compare-wishlist-row">-->
<!--                                                    <a href="#" class="add-link"><i class="fas fa-heart"></i>Add to Wish List</a>-->
<!--                                                    <a href="#" class="add-link"><i class="fas fa-random"></i>Add to Compare</a>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="modal-footer">-->
<!--                                    <div class="widget-social-share">-->
<!--                                        <span class="widget-label">Share:</span>-->
<!--                                        <div class="modal-social-share">-->
<!--                                            <a href="#" class="single-icon"><i class="fab fa-facebook-f"></i></a>-->
<!--                                            <a href="#" class="single-icon"><i class="fab fa-twitter"></i></a>-->
<!--                                            <a href="#" class="single-icon"><i class="fab fa-youtube"></i></a>-->
<!--                                            <a href="#" class="single-icon"><i class="fab fa-google-plus-g"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
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
                url: process.env.VUE_APP_APIURL + 'uploads/',
                // products: JSON.parse(localStorage.getItem("products_cat1"))
            };
        },
        computed: {
            ...mapGetters({
                productsGetter: "allProducts"
            })
        }
    }
</script>

<style scoped>

</style>

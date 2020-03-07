<template>
    <div class="home-cat-gallery">
        <section class="hero-area hero-slider-3">
            <div class="sb-slick-slider"  data-slick-setting='{
                                                        "autoplay": true,
                                                        "autoplaySpeed": 8000,
                                                        "slidesToShow": 1,
                                                        "dots":true
                                                        }'>
                <div v-for="type in getGallery"  v-bind:key="type.id">
                    <div class="single-slide bg-image bg-overlay--dark"  v-if="type.justify === true" :data-bg="type.data_bg">
                         <div class="container">
                        <div class="home-content text-center">
                            <div class="row justify-content-end">
                                <div class="col-lg-6 pl--30">
                                    <h1>{{type.bg_h1}}</h1>
                                    <h2 v-html="type.bg_h2"></h2>
                                    <a :href="type.bg_link" class="btn btn--yellow">
                                        {{type.bg_link_title}}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="single-slide bg-image  bg-overlay--dark" v-if="type.justify !== true" data-bg="image/bg-images/home-3-slider-2.jpg">
                        <div class="container">
                            <div class="home-content pl--30">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h1>{{type.bg_h1}}</h1>
                                        <h2 v-html="type.bg_h2"></h2>
                                        <a :href="type.bg_link" class="btn btn--yellow">
                                            {{type.bg_link_title}}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script lang="js">
    import Gallery from "../assets/Data/product";
    export default {
        name: "home-category-gallery",
        computed: {
            getGallery() {
                return Gallery.product_gallery;
            }
        },

        mounted() {
        }
    };
</script>

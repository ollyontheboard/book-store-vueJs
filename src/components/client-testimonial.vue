<template>
    <div class="client-testimonial">
        <section class="section-margin">
            <div class="container">
                <div class="section-title section-title--bordered mb-lg--60">
                    <h2>CLIENT TESTIMONIALS</h2>
                </div>
                <div class="sb-slick-slider testimonial-slider" data-slick-setting='{
                "autoplay": true,
                "autoplaySpeed": 8000,
                "slidesToShow":3,
                "dots":true
            }' data-slick-responsive='[
                {"breakpoint":1200, "settings": {"slidesToShow": 2} },
                {"breakpoint":992, "settings": {"slidesToShow": 1} },
                {"breakpoint":768, "settings": {"slidesToShow": 1} },
                {"breakpoint":490, "settings": {"slidesToShow": 1} }
            ]'>
                    <div class="single-slide">
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="../assets/image/others/client-1.png" alt="">
                            </div>
                            <div class="testimonial-body">
                                <article>
                                    <h2 class="sr-only">Testimonial Article</h2>
                                    <p>version This is Photoshops of Lorem Ipsum. Proin gravida nibh vel velit.Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. In molestie augue magna. Pell..</p>
                                    <span class="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="single-slide">
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="../assets/image/others/client-2.png" alt="">
                            </div>
                            <div class="testimonial-body">
                                <article>
                                    <h2 class="sr-only">Testimonial Article</h2>
                                    <p>In molestie augue magna.This is Photoshops version of Lorem Ipsum. Proin gravida
                                        nibh vel velit.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pell..</p>
                                    <span class="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="single-slide">
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="../assets/image/others/client-3.png" alt="">
                            </div>
                            <div class="testimonial-body">
                                <article>
                                    <h2 class="sr-only">Testimonial Article</h2>
                                    <p>Lorem Ipsum This is Photoshops version of . Proin gravida nibh vel velit.Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit. In molestie augue magna. Pell..</p>
                                    <span class="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="single-slide">
                        <div class="testimonial-card">
                            <div class="testimonial-image">
                                <img src="../assets/image/others/client-4.png" alt="">
                            </div>
                            <div class="testimonial-body">
                                <article>
                                    <h2 class="sr-only">Testimonial Article</h2>
                                    <p>elit. In molestie This is Photoshops version of Lorem Ipsum. Proin gravida nibh
                                        vel velit.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing augue magna. Pell..</p>
                                    <span class="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Modal -->
    </div>
</template>

<script>
    export default {
        name: "client-testimonial"
    }
</script>

<style scoped>

</style>

<template>
  <div class="home">
      <top-header></top-header>
        <home-gallery></home-gallery>
            <home-category></home-category>
            <second-category></second-category>
            <third-section></third-section>

            <feature-section></feature-section>
                <promotion-section></promotion-section>

            <client-testimonial></client-testimonial>
            <brand-slider></brand-slider>



    <page-footer></page-footer>
  </div>
</template>

<script lang="js">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

const topHeader = () => import('@/components/top-header.vue');
const homeGallery = () => import('@/components/home-category-gallery.vue');
const pageFooter = () => import('@/components/footer.vue');
const homeCategory = () => import('@/components/home-category.vue');
const secondCategory = () => import('@/components/section-two.vue');
const thirdSection = () => import('@/components/third-section.vue');
const featureSection = () => import('@/components/features-section.vue');
const promotionSection = () => import('@/components/promotion-section.vue');
const clientTestimonial = () => import('@/components/client-testimonial');
const brandSlider = () => import('@/components/brand-slider');

export default {
  name: 'Home',
  components: {
      pageFooter,
      topHeader,
      homeGallery,
      homeCategory,
      secondCategory,
      thirdSection,
      featureSection,
      promotionSection,
      clientTestimonial,
      brandSlider
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
        }, 200);
    }
}
</script>
<!--<style lang="css">-->
<!--    @import "../assets/css/main.css";-->
<!--    /*@import "assets/css/plugins.css";*/-->
<!--</style>-->

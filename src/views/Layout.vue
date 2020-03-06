<template>
  <div class="home">
      <top-header></top-header>
        <home-gallery></home-gallery>
            <home-category></home-category>
            <second-category></second-category>
            <third-section></third-section>

            <feature-section></feature-section>
                <promotion-section></promotion-section>
            <two-column-section></two-column-section>
            <client-testimonial></client-testimonial>
            <brand-slider></brand-slider>



    <page-footer></page-footer>
  </div>
</template>

<script>
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
const twoColumnSection = () => import('@/components/two-colunm-section');
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
      twoColumnSection,
      clientTestimonial,
      brandSlider
  }
}
</script>

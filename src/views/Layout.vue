<template>
  <div class="home">
      <top-header></top-header>
        <home-gallery></home-gallery>
            <home-category></home-category>
            <second-category></second-category>
              <br>
            <third-section></third-section>

            <feature-section></feature-section>
                <promotion-section></promotion-section>

            <client-testimonial></client-testimonial>
            <brand-slider></brand-slider>



    <page-footer></page-footer>
<!--      <p v-if="isOnline">This part will be visible only if user is online</p>-->
<!--      <p v-if="isOffline">This part will be visible only if user is offline</p>-->
  </div>
</template>

<script lang="js">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {mapActions} from "vuex";

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
    methods:{
        ...mapActions(['getallProducts']),
    },
    computed: {
        networkStatus () {
            return this.isOnline ? 'My network is fine' : 'I am offline'
        }
    },
    beforeMount () {
		this.getallProducts();
	},
	mounted() {
		// eslint-disable-next-line no-undef
		$('head').append($('<script />').attr('src', 'js/custom.js'))
    }
}
</script>
<!--<style lang="css">-->
<!--    @import "../assets/css/main.css";-->
<!--    /*@import "assets/css/plugins.css";*/-->
<!--</style>-->

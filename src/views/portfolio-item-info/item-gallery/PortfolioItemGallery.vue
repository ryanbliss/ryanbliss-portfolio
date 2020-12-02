<template>
  <div class="portfolio-item-gallery">
    <ImageCarousel :imagePaths="item.galleryImagePaths" />
  </div>
</template>

<script>
import ImageCarousel from '@/components/carousel/ImageCarousel.vue';

export default {
  name: 'PortfolioItemGallery',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    ImageCarousel,
  },
};
</script>

<style lang="scss" scoped>
.portfolio-item-gallery {
  color: $white;
  background-color: $hero;
  padding-top: 52px;
  padding-bottom: 52px;
}
</style>

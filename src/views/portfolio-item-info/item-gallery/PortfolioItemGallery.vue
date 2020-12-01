<template>
  <div class="portfolio-item-gallery">
    TODO: Image Gallery
  </div>
</template>

<script>
export default {
  name: 'PortfolioItemGallery',
  props: {
    item: {
      type: Object,
      required: true,
    },
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

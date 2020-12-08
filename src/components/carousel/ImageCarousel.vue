<template>
  <div class="image-carousel">
    <b-carousel-list style="shadow: none !important"
      v-model="values"
      :data="items"
      :arrow="arrow"
      :arrow-hover="arrowHover"
      :items-to-show="perList"
      :items-to-list="increment"
      :repeat="repeat"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    imagePaths: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      arrow: true,
      arrowHover: true,
      values: 0,
      perList: 2,
      increment: 1,
      repeat: true,
    };
  },
  computed: {
    items() {
      return this.imagePaths
        .map((imagePath, index) => ({
          title: `Slide ${index + 1}`,
          image: imagePath,
        }));
    },
  },
};
</script>

<style lang="scss">
.image-carousel {
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }
  /*
    Buefy has a janky style that can't be configured
    using props, so I override the has-shadow class.
  */
  .has-shadow {
    box-shadow: none !important;
  }
  .carousel-slide {
    @include mobile {
      padding-right: 12px;
      padding-left: 12px;
    }
    padding-right: 72px;
    padding-left: 72px;
  }
}
</style>

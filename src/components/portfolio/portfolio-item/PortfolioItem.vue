<template>
  <div class="portfolio-item flex wrap">
    <div class="image">
      <img :src="item.imagePath">
    </div>
    <div class="preview">
      <div class="preview-title flex">
        <div class="text-container">
          <div class="accent" />
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
      <div class="description paragraph-content">
        {{ item.description }}
      </div>
      <AnimatedButton :text="item.buttonText"
        style="margin-left: -4px;"
        @select="onPressLearnMore"
      />
    </div>
  </div>
</template>

<script>
import AnimatedButton from '@/components/button/animated-button/AnimatedButton.vue';

export default {
  name: 'PortfolioItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onPressLearnMore() {
      this.$router.push(`/portfolio/${this.item.id}`);
    },
  },
  components: {
    AnimatedButton,
  },
};
</script>

<style lang="scss" scoped>
.portfolio-item {
  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }
  margin-bottom: 56px;
  &:last-of-type {
    margin-bottom: 0px;
  }

  .image {
    max-width: 536px;
    min-width: 356px;
  }
  .preview {
    width: 374px;
    margin-left: 54px;
    margin-top: 36px;
    align-self: flex-end;
    padding-bottom: 12px;
    .preview-title {
      height: 40px;
      position: relative;
      z-index: 0;
      margin-bottom: 8px;
      .text-container {
        position: absolute;
        font-weight: 900;
        font-size: 40px;
        line-height: 40px;
        color: $brand-primary;
        .accent {
          position: absolute;
          left: -8px;
          bottom: 12px;
          right: 14px;
          top: -4px;
          background-color: $brand-secondary;
        }
        .text {
          position: relative;
        }
      }
    }
    .description {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: $black;
      margin-bottom: 24px;
    }
  }
}
</style>

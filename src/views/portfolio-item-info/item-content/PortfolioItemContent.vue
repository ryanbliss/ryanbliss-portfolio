<template>
  <div class="portfolio-item-content flex vertical center-cross">
    <div class="portfolio-inner-content">
      <IconLinkButton v-if="item.website"
        :iconPath="require('@/assets/icons/content/business.svg')"
        :link="item.website"
        buttonText="View Website"
        theme="on-light"
      />
      <div class="feature-image">
        <img :src="item.imagePath"
          width=556
        >
      </div>
      <RichTextEditor
        :initialRichText="item.html"
        :editable="isAdminEditable"
      />
    </div>
  </div>
</template>

<script>
import IconLinkButton from '@/components/button/icon-link-button/IconLinkButton.vue';
import RichTextEditor from '@/components/rich-text-editor/RichTextEditor.vue';

export default {
  name: 'PortfolioItemContent',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isAdminEditable() {
      if (!this.$store.state.route.path) return false;
      /*
        This may seem like a hack, but because the rich text isn't stored
        in a database or edited via an API, this really only exists for
        my convenience.
      */
      return this.$store.state.route.path.includes('admin');
    },
  },
  components: {
    IconLinkButton,
    RichTextEditor,
  },
};
</script>

<style lang="scss" scoped>
.portfolio-item-content {
  padding-top: 32px;
  .portfolio-inner-content {
    @include mobile {
      // TODO:
    }
    @include laptop {
      // TODO:
    }
    width: 556px;

    .feature-image {
      width: 556px;
    }
  }
}
</style>

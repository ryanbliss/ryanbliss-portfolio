<template>
  <div>
    <SecondaryHero
      title="Portfolio"
    />
    <div class="page-section no-top">
      <div class="flex wrap">
        <TagList
          title="Languages & Frameworks"
          type="CODE"
        />
        <TagList
          title="UX Tools"
          type="UX"
        />
      </div>
      <div class="flex">
        <PortfolioList
          :title="title"
          :tagNameFilter="tagName"
        />
      </div>
    </div>
    <PrimaryFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SecondaryHero from '@/components/hero/SecondaryHero.vue';
import TagList from '@/components/tags/tag-list/TagList.vue';
import PortfolioList from '@/components/portfolio/portfolio-list/PortfolioList.vue';
import PrimaryFooter from '@/components/footer/PrimaryFooter.vue';

export default {
  name: 'Portfolio',
  computed: {
    ...mapGetters({
      tagForName: 'tags/tagForName',
    }),
    tagName() {
      return this.$store.state.route.tagName || null;
    },
    tag() {
      if (!this.tagName) return null;
      return this.tagForName(this.tagName);
    },
    title() {
      if (!this.tagName) return 'All Projects';
      return `${this.tag.name} Projects`;
    },
  },
  components: {
    SecondaryHero,
    PortfolioList,
    TagList,
    PrimaryFooter,
  },
};
</script>

<style lang="scss" scoped>
.page-section {
  &.no-top {
    /*
      We are overriding default styling for this global class
      to compensate for the top padding on the TagList headers
    */
    margin-top: 0px !important;
  }
}
</style>

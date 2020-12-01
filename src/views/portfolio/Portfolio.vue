<template>
  <div>
    <SecondaryHero
      title="Portfolio"
    />
    <div class="page-section">
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
          :title="`${tag.name} Projects`"
          :tagNameFilter="tag.name"
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

</style>

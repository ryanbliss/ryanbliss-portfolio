<template>
  <div>
    <div v-if="portfolioItem">
      <SecondaryHero
        :title="portfolioItem.name"
      />
      <PortfolioItemContent
        :item="portfolioItem"
      />
      <PortfolioItemGallery
        :item="portfolioItem"
      />
      <PortfolioItemSummary
        :item="portfolioItem"
      />

      <PrimaryFooter />
    </div>
    <div v-else>
      Uh oh! This page does not exist.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SecondaryHero from '@/components/hero/SecondaryHero.vue';
import PrimaryFooter from '@/components/footer/PrimaryFooter.vue';
import PortfolioItemContent from './item-content/PortfolioItemContent.vue';
import PortfolioItemGallery from './item-gallery/PortfolioItemGallery.vue';
import PortfolioItemSummary from './item-summary/PortfolioItemSummary.vue';

export default {
  name: 'PortfolioItemInfo',
  computed: {
    ...mapGetters({
      portfolioItemForId: 'portfolio/portfolioItemForId',
    }),
    itemId() {
      return this.$store.state.route.portfolioItemId;
    },
    portfolioItem() {
      if (!this.itemId) {
        return null;
      }
      return this.portfolioItemForId(this.itemId);
    },
  },
  components: {
    SecondaryHero,
    PortfolioItemContent,
    PortfolioItemGallery,
    PortfolioItemSummary,
    PrimaryFooter,
  },
};
</script>

<style lang="scss" scoped>

</style>

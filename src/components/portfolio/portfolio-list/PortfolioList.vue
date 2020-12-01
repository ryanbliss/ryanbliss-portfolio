<template>
  <div class="portfolio-list">
    <ListHeader :title="title" />
    <div class="list-items">
      <PortfolioItem v-for="item in portfolioItems" :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListHeader from '@/components/sections/headers/ListHeader.vue';
import PortfolioItem from '../portfolio-item/PortfolioItem.vue';

export default {
  name: 'PortfolioList',
  props: {
    title: {
      type: String,
      required: true,
    },
    tagNameFilter: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      portfolioItemsForTagName: 'portfolio/portfolioItemsForTagName',
    }),
    portfolioItems() {
      if (this.tagNameFilter) {
        return this.portfolioItemsForTagName(this.tagNameFilter);
      }
      return this.$store.state.portfolio.items;
    },
  },
  components: {
    ListHeader,
    PortfolioItem,
  },
};
</script>

<style lang="scss" scoped>
.portfolio-list {
  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }

  .list-items {
    padding-left: 32px;
  }
}
</style>

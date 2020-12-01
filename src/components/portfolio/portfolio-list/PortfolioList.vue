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
    /*
      This is an optional prop that narrows down
      the items that can be displayed. For example,
      this is used when displaying all but the current
      item in PortfolioItemSummary.vue.
    */
    doNotIncludeItemIds: {
      type: Array,
      required: false,
      default: () => null,
    },
  },
  computed: {
    ...mapGetters({
      portfolioItemsForTagName: 'portfolio/portfolioItemsForTagName',
    }),
    portfolioItems() {
      const items = this.tagNameFilter
        ? this.portfolioItemsForTagName(this.tagNameFilter)
        : this.$store.state.portfolio.items;

      if (this.doNotIncludeItemIds != null) {
        return items
          .filter((item) => !this.doNotIncludeItemIds.includes(item.id));
      }
      return items;
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

<template>
  <div class="portfolio-list">
    <ListHeader :title="title" />
    <div class="list-items">
      Hello
    </div>
  </div>
</template>

<script>
import ListHeader from '@/components/sections/headers/ListHeader.vue';

export default {
  name: 'PortfolioList',
  props: {
    title: {
      type: String,
      required: true,
    },
    tagFilters: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ListHeader,
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

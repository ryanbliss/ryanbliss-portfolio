<template>
  <div class="page-section">
    <div class="flex wrap">
      <TagList
        title="Languages & Frameworks"
        type="CODE"
        :availableTagNames="item.tagNames"
      />
      <TagList
        title="UX Tools"
        type="UX"
        :availableTagNames="item.tagNames"
      />
    </div>
    <div class="flex">
      <PortfolioList
        title="Other Work"
        :doNotIncludeItemIds="[item.id]"
      />
    </div>
  </div>
</template>

<script>
import TagList from '@/components/tags/tag-list/TagList.vue';
import PortfolioList from '@/components/portfolio/portfolio-list/PortfolioList.vue';

export default {
  name: 'PortfolioItemSummary',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    TagList,
    PortfolioList,
  },
};
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="page-section flex vertical">
    <div>
      <div class="title">
        {{ header.title }}
      </div>
      <div class="intro-text paragraph-content">
        {{ header.body }}
      </div>
    </div>
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
        title="Recent Work"
      />
    </div>
  </div>
</template>

<script>
import TagList from '@/components/tags/tag-list/TagList.vue';
import PortfolioList from '@/components/portfolio/portfolio-list/PortfolioList.vue';

export default {
  name: 'AboutMe',
  data() {
    return {
      header: {
        title: 'About Me.',
        body: 'Having built, designed, and managed over a dozen mobile / web applications, Ryan knows what it takes to build modern applications driven by user feedback.',
      },
    };
  },
  components: {
    TagList,
    PortfolioList,
  },
};
</script>

<style lang="scss" scoped>
</style>

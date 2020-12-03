<template>
  <div class="page-section flex vertical">
    <div>
      <div class="title">
        {{ header.title }}
      </div>
      <div class="intro-text paragraph-content">
        {{ header.body1 }}
      </div>
      <div class="intro-text paragraph-content">
        {{ header.body2 }}
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
        body1: "Having built, designed, and managed over a dozen mobile / web applications, I know what it takes to build modern applications driven by user feedback. Coming from a product management and entrepreneurship background, I'm not your average product developer — I have deep experience with each stage of the product development lifecycle.",
        body2: "I am currently living in Salt Lake City, UT, working as a freelance app designer and developer for startups in the Utah Valley. If you need someone with a proven record of designing, building, and shipping quality apps, let's talk!",
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

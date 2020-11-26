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
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
</style>

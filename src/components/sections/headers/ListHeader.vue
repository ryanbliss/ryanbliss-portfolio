<template>
  <div class="list-header flex">
    <div class="accent" />
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-header {
  margin-top: 48px;
  .accent {
    width: 8px;
    height: 28px;
    background-color: $brand-primary;
  }
  .title {
    margin-top: 14px;
    margin-left: 24px;
    margin-bottom: 24px;
    color: $brand-primary;
    font-weight: 900;
    font-size: 32px;
    line-height: 42px;
  }
}
</style>

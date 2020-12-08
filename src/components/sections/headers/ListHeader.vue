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
  @include mobile {
    margin-top: 24px;
  }
  margin-top: 36px;
  .accent {
    @include mobile {
      display: none;
    }
    width: 8px;
    height: 28px;
    background-color: $brand-primary;
  }
  .title {
    @include mobile {
      margin-left: 0px;
    }
    margin-top: 14px;
    margin-left: 24px;
    margin-bottom: 16px;
    color: $brand-primary;
    font-weight: 900;
    font-size: 28px;
    line-height: 36px;
  }
}
</style>

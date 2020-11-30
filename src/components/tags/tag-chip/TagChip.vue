<template>
  <div class="tag-chip paragraph-content noselect">
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'TagChip',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-chip {
  border: 1px solid $gray3;
  border-radius: 20px;
  color: $black;
  cursor: pointer;
  margin-bottom: 12px;
  margin-right: 12px;
  &:last-of-type {
    margin-right: 0px;
  }
  &:hover {
    border: 1px solid $brand-primary;
    color: $brand-primary;
  }

  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }
  padding: 5px 16px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  height: 35px;
}
</style>

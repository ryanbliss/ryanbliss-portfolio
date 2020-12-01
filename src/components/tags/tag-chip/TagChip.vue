<template>
  <a :class="className"
    @click="search"
  >
    <div>{{ name }}</div>
  </a>
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
  computed: {
    routeTagName() {
      return this.$store.state.route.tagName || null;
    },
    isSelected() {
      return this.routeTagName === this.name;
    },
    className() {
      if (this.isSelected) {
        return 'tag-chip paragraph-content selected noselect';
      }
      return 'tag-chip paragraph-content noselect';
    },
  },
  methods: {
    search() {
      this.$router.push({
        path: '/portfolio',
        query: { tagname: this.name },
      });
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
  &.selected {
    border: 1px solid transparent;
    color: $white;
    background-color: $brand-primary;
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

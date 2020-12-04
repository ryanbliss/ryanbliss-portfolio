<template>
  <a :class="className"
    @click="search"
  >
    <div class="tag-text">
      {{ name }}
    </div>
    <div class="tag-count">
      {{ portfolioItemCount }}
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TagChip',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      portfolioItemCountForTagName: 'portfolio/portfolioItemCountForTagName',
    }),
    routeTagName() {
      return this.$store.state.route.tagName || null;
    },
    isSelected() {
      return this.routeTagName === this.name;
    },
    className() {
      if (this.isSelected) {
        return 'tag-chip paragraph-content selected noselect flex center-cross';
      }
      return 'tag-chip paragraph-content noselect flex center-cross';
    },
    portfolioItemCount() {
      return this.portfolioItemCountForTagName(this.name);
    },
  },
  methods: {
    search() {
      if (this.isSelected) {
        // We remove the tagname query param
        this.$router.push({
          path: '/portfolio',
        });
      } else {
        // We navigate to the portfolio page with selected tagname query param
        this.$router.push({
          path: '/portfolio',
          query: { tagname: this.name },
        });
      }
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
  margin-bottom: 8px;
  margin-right: 8px;
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
    .tag-text {
      color: $white;
    }
    .tag-count {
      color: $white;
    }
  }

  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }
  padding: 0px 12px;
  .tag-text {
    font-size: 16px;
    font-weight: 600;
  }
  .tag-count {
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
    margin-top: 1px;
    color: $gray1;
  }
  height: 30px;
}
</style>

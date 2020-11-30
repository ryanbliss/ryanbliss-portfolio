<template>
  <div class="tag-list">
    <div class="list-header flex">
      <div class="accent" />
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="tag-chips flex wrap">
      <TagChip v-for="tag in tags" :key="tag.name" :name="tag.name" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TagChip from '../tag-chip/TagChip.vue';

export default {
  name: 'TagList',
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['UX', 'CODE'].includes(value);
      },
    },
  },
  computed: {
    ...mapGetters({
      tagsForType: 'tags/tagsForType',
    }),
    tags() {
      return this.tagsForType(this.type);
    },
  },
  components: {
    TagChip,
  },
};
</script>

<style lang="scss" scoped>
.tag-list {
  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }

  max-width: 486px;
  margin-right: 48px;
  margin-top: 48px;
  &:last-of-type {
    margin-right: 0px;
  }

  .list-header {
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

  .tag-chips {
    padding-left: 32px;
  }
}
</style>

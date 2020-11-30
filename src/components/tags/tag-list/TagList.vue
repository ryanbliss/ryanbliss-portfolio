<template>
  <div class="tag-list">
    <ListHeader :title="title" />
    <div class="tag-chips flex wrap">
      <TagChip v-for="tag in tags" :key="tag.name" :name="tag.name" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListHeader from '@/components/sections/headers/ListHeader.vue';
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
    ListHeader,
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
  &:last-of-type {
    margin-right: 0px;
  }

  .tag-chips {
    padding-left: 32px;
  }
}
</style>

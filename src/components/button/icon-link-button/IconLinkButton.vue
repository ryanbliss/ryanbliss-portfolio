<template>
  <a :class="themedClassName"
    :href="link"
    target="_blank"
  >
    <div class="icon">
      <img :src="iconPath">
    </div>
    <div class="button-text">
      {{ buttonText }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'IconLinkButton',
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'on-dark',
      validator(value) {
        return ['on-dark', 'on-light'].includes(value);
      },
    },
  },
  computed: {
    themedClassName() {
      return `icon-link-button-container ${this.theme} flex center-cross`;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-link-button-container {
  @include mobile {
    margin-bottom: 12px;
  }
  margin-bottom: 1.38vw;
  cursor: pointer;
  .icon {
    @include mobile {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
    width: 1.66vw;
    height: 1.66vw;
    margin-right: 12px;
  }
  .button-text {
    @include mobile {
      margin-top: 2px;
      font-size: 18px;
    }
    font-weight: 700;
    font-size: 1.25vw;
    color: $white;
  }
  &:hover {
    .button-text {
      text-decoration-line: underline;
    }
  }

  &.on-dark {
    .button-text {
      color: $white;
    }
  }
  &.on-light {
    .icon {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
    .button-text {
      margin-top: 2px;
      font-size: 18px;
      color: $brand-primary;
    }
  }
}
</style>

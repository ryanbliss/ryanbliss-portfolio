<template>
  <a class="icon-link-button-container flex center-cross"
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
  },
};
</script>

<style lang="scss" scoped>
.icon-link-button-container {
  margin-bottom: 1.38vw;
  cursor: pointer;
  .icon {
    width: 1.66vw;
    height: 1.66vw;
    margin-right: 12px;
  }
  .button-text {
    font-weight: 700;
    font-size: 1.25vw;
    color: $white;
  }
  &:hover {
    .button-text {
      text-decoration-line: underline;
    }
  }
}
</style>

<template>
  <div class="animated-button-container paragraph-content">
    <div class="animated-button-background" />
    <a class="animated-button">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'AnimatedButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.animated-button-container {
  position: relative;
  display: inline-block;
  height: 50px;
  padding-right: 20px;

  .animated-button-background {
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: 0%;
    z-index: auto;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #f2f4f8;
    -webkit-transition: width 100ms ease-in-out;
    transition: width 100ms ease-in-out;
    &.inverse {
      background-color: hsla(0, 0%, 100%, 0.3);
    }
    &.inverse-hard {
      background-color: #fff;
    }
  }

  &:hover {
    .animated-button-background {
      width: 100%;
    }
  }

  .animated-button {
    position: relative;
    height: 50px;
    padding: 0px 34px 0px 20px;
    background-color: transparent;
    background-image: url('../../../assets/icons/arrows/arrow-right.svg');
    background-position: 95% 50%;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    -webkit-transition: background-position 100ms ease-in-out;
    transition: background-position 100ms ease-in-out;
    color: #070f1a;
    font-size: 16px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: 2px;
    &:hover {
      background-position: 100% 50%;
      text-decoration: none;
    }
    &:active {
      opacity: 0.7;
    }

    &.inverse {
      background-image: url("https://uploads-ssl.webflow.com/5d5f543214f5cdeb24c6201e/5d5f543214f5cdb071c62068_icons8-chevron-right-filled-100%20(2).png");
      color: #fff;
    }
  }
}
</style>

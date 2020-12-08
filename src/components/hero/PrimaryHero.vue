<template>
  <div class="primary-hero flex vertical"
    :style="{
      backgroundImage: 'url(' + backgroundUrl + ')' ,
      backgroundSize:'cover'
    }"
  >
    <div class="flex">
      <a class="logo-mark"
        @click="$router.push('/')"
      >
        <div class="first-word">
          {{ logo.first }}
        </div>
        <div class="last-word">
          {{ logo.last }}
        </div>
      </a>
    </div>

    <div class="spacer"/>

    <div class="flex">
      <div class="hero-content">
        <div class="title">
          {{ content.title }}
        </div>
        <div class="paragraph-content">
          {{ content.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrimaryHero',
  data() {
    return {
      // eslint-disable-next-line global-require
      backgroundUrl: require('@/assets/images/backgrounds/hero-bg.png'),
      logo: {
        first: 'ryan',
        last: 'bliss',
      },
      content: {
        title: 'UX + Code.',
        body: "If you're looking for someone with deep experience coding + designing applications, conducting user research, and making data-informed decisions, then you're looking for Ryan Bliss.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.primary-hero {
  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }
  width: 100%;
  height: 48.26vw;
  background-color: $hero;

  .hero-content {
    @include mobile {
      margin-left: 24px;
      margin-right: 24px;
      margin-bottom: 20px;
    }
    margin-left: 8.88vw;
    margin-bottom: 4.3vw;
    font-style: normal;
    text-align: left;
    .title {
      @include mobile {
        font-size: 44px;
        margin-bottom: 16px;
      }
      color: $brand-secondary;
      font-weight: 900;
      font-size: 6.944vw;
    }
    .paragraph-content {
      @include mobile {
        font-size: 12px;
        margin-left: 4px;
        width: 100%;
        display: none;
      }
      margin-left: 0.83vw;
      color: $white;
      font-weight: 700;
      font-size: 1.25vw;
      width: 32.2vw;
    }
  }
}
</style>

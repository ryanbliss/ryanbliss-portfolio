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
      backgroundUrl: require('@/assets/images/backgrounds/hero-bg-2.png'),
      logo: {
        first: 'ryan',
        last: 'bliss',
      },
      content: {
        title: 'UX + Code.',
        body: 'If you are looking for someone with deep experience coding + designing applications, conducting user research, and making data-informed decisions, you’re looking for Ryan Bliss.',
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

  .logo-mark {
    padding-top: 1.38vw;
    padding-left: 2.5vw;
    font-style: normal;
    text-align: left;
    cursor: pointer;
    .first-word {
      color: $white;
      font-weight: bold;
      font-size: 1.667vw;
    }
    .last-word {
      color: $brand-secondary;
      font-weight: 900;
      font-size: 3.88vw;
      margin-top: -0.97vw;
    }
  }

  .hero-content {
    margin-left: 8.88vw;
    margin-bottom: 4.3vw;
    font-style: normal;
    text-align: left;
    .title {
      color: $brand-secondary;
      font-weight: 900;
      font-size: 6.944vw;
    }
    .paragraph-content {
      margin-left: 0.83vw;
      color: $white;
      font-weight: 700;
      font-size: 1.25vw;
      width: 32.2vw;
    }
  }
}
</style>

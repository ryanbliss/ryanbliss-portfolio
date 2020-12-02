<template>
  <div class="secondary-hero flex vertical"
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
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondaryHero',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      backgroundUrl: require('@/assets/images/backgrounds/hero-secondary-bg.png'),
      logo: {
        first: 'ryan',
        last: 'bliss',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.secondary-hero {
  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }
  width: 100%;
  height: 22.5vw;
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
    margin-bottom: 1.38vw;
    font-style: normal;
    text-align: left;
    .title {
      color: $brand-secondary;
      font-weight: 900;
      font-size: 6.944vw;
    }
  }
}
</style>

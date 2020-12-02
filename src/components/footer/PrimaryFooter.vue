<template>
  <div class="primary-footer flex vertical"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/backgrounds/footer-bg.png') + ')' ,
      backgroundSize:'cover'
    }"
  >
    <div class="footer-title">
      {{ title }}
    </div>
    <div class="footer-links flex vertical">
      <IconLinkButton v-for="link in links" :key="link.text"
        :iconPath="link.iconPath"
        :link="link.link"
        :buttonText="link.text"
      />
    </div>
    <div class="spacer"/>
    <div class="footer-copyright paragraph-content">
      {{ copyrightText }}
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import IconLinkButton from '@/components/button/icon-link-button/IconLinkButton.vue';

export default {
  name: 'PrimaryFooter',
  data() {
    return {
      title: "Let's Talk!",
      links: [
        {
          link: 'mailto:smile@ryanbliss.me',
          text: 'smile@ryanbliss.me',
          iconPath: require('@/assets/icons/links/email.svg'),
        },
        {
          link: 'tel:4255058866',
          text: '(425)-505-8866',
          iconPath: require('@/assets/icons/links/phone.svg'),
        },
        {
          link: 'https://calendly.com/studiobliss/30min',
          text: 'Schedule Free Consultation',
          iconPath: require('@/assets/icons/links/video.svg'),
        },
        {
          link: 'https://github.com/ryanbliss',
          text: 'View on GitHub',
          iconPath: require('@/assets/icons/links/github.svg'),
        },
        {
          link: 'https://www.linkedin.com/in/ryanbliss/',
          text: 'View on LinkedIn',
          iconPath: require('@/assets/icons/links/linkedin.svg'),
        },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    copyrightText() {
      return `© ${this.currentYear} Ryan Bliss • Developed Using Vue.js.`;
    },
  },
  components: {
    IconLinkButton,
  },
};
</script>

<style lang="scss" scoped>
.primary-footer {
  @include mobile {
    // TODO:
  }
  @include laptop {
    // TODO:
  }
  width: 100%;
  height: 38.68vw;
  text-align: left;
  padding-top: 3.8vw;
  padding-left: 8.88vw;
  padding-right: 8.88vw;
  padding-bottom: 2.2vw;
  background-color: $hero;

  .footer-title {
    color: $brand-secondary;
    font-weight: 900;
    font-size: 5vw;
    margin-bottom: 1.16vw;
  }
  .footer-links {
    padding-left: 1.1vw;
  }
  .footer-copyright {
    font-size: 1.25vw;
    font-weight: 700;
    color: $gray3;
  }
}
</style>

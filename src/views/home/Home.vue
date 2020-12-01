<template>
  <div class="home">
    <PrimaryHero/>
    <AboutMe/>
    <PrimaryFooter/>
  </div>
</template>

<script>
import PrimaryHero from '@/components/hero/PrimaryHero.vue';
import AboutMe from '@/views/home/sections/About.vue';
import PrimaryFooter from '@/components/footer/PrimaryFooter.vue';

export default {
  name: 'Home',
  components: {
    PrimaryHero,
    AboutMe,
    PrimaryFooter,
  },
};
</script>

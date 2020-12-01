<template>
  <div class="home">
    <PrimaryHero/>
    <AboutMe/>
  </div>
</template>

<script>
import PrimaryHero from '@/components/hero/PrimaryHero.vue';
import AboutMe from '@/views/home/sections/About.vue';

export default {
  name: 'Home',
  components: {
    PrimaryHero,
    AboutMe,
  },
};
</script>

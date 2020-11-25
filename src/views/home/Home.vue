<template>
  <div class="home">
    <PrimaryHero/>
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryHero from '@/components/hero/PrimaryHero.vue';

export default {
  name: 'Home',
  components: {
    PrimaryHero,
  },
};
</script>

<template>
  <div id="app">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <main>
      <div>
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  watch: {
    $route() {
      this.updateRouteData();
    },
  },
  created() {
    this.updateRouteData();
  },
  computed: {
    path() {
      return this.$store.state.route.path;
    },
  },
  methods: {
    ...mapMutations('route', ['setPath', 'setParams', 'setQuery']),
    updateRouteData() {
      this.setPath(this.$router.currentRoute.path);
      this.setParams(this.$router.currentRoute.params);
      this.setQuery(this.$router.currentRoute.query);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/styles/app-layout.scss";
@import "./assets/styles/page-elements.scss";
@import "./assets/styles/buefy-config.scss";

#app {
  font-family: 'Red Hat Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>

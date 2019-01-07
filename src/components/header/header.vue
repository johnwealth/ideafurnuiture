<template>
      <div>
        <div class="page-loader">
            <div class="loader">Loading...</div>
        </div>
        <!-- End Page Loader -->
              <app-nav></app-nav>
        <!-- Page Wrap -->
        <div class="page" id="top">
                    <!-- End Main Menu -->
        </div>
  </div>
</template>

<script>
  import Nav from './nav.vue';
  export default {

    components: {
        'app-nav': Nav
      },
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
 
</style>
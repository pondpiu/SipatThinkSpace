<!-- src/App.vue -->
<template>
  <div>
    <header>
      <app-nav></app-nav>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNav from './components/AppNav';

export default {
  components: {
    AppNav
  },

  created () {
    this.$store.dispatch('fetchBooking')
  }
}
</script>

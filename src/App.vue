<template>
  <div class="main-container">
    <Navbar />
      <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>
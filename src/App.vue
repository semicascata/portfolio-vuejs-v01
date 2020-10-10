<template>
  <div class="main-container">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/layout/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

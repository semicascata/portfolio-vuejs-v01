<template>
  <div class="home-container">
    <div class="parallaxContainer">
      <div class="parallaxEffect">
        <Navbar />
        <div class="head-container">
          <!-- <div class="twContainer">
            <div class="twEffect">
              <h4 class="twText title-name">Raul O. Duarte.</h4>
            </div>
          </div> -->

          <p class="title-effect">
            <span>
              Raul O. Duarte
            </span>
            &mdash; IT Technician/Web Developer Jr &mdash;
          </p>
        </div>

        <div class="cards-container">
          <BrCards />
        </div>
      </div>
    </div>

    <div class="post-parallax-content">
      <div class="carousel-container">
        <h1><i class="fas fa-terminal"></i> Projects:</h1>
        <Carousel />
      </div>
    </div>

    <!-- modals -->
    <BrDescModal />
  </div>
</template>

<script>
import Navbar from "../../components/layout/Navbar";
import BrCards from "./partials/BrCards";
import Carousel from "./partials/Carousel";

export default {
  name: "Home",
  components: {
    BrCards,
    Carousel,
    Navbar,
  },
};
</script>

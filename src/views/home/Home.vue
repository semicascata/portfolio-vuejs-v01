<template>
  <div class="home-container">
    <div class="parallaxContainer">
      <div class="parallaxEffect">
        <div class="head-container">
          <h2 class="title-name">Raul O. Duarte</h2>
          <h4 class="subtitle">
            IT Technician/NOC Analyst Jr/Web Developer Jr
          </h4>
        </div>

        <div class="cards-container">
          <BrCards />

          <!-- modal trigger -->
          <!-- <div class="modal-btn">
            <button
              type="button"
              class="btn btn-light"
              data-toggle="modal"
              data-target="#fullDescription"
            >
              Descrição Completa
            </button>
          </div> -->
        </div>
      </div>
    </div>

    <div class="post-parallax-content">
      <div class="carousel-container">
        <h3>Projects Preview:</h3>
        <Carousel />
      </div>
    </div>

    <!-- modals -->
    <BrDescModal />
  </div>
</template>

<script>
import BrDescModal from "./partials/BrDescModal";
import BrCards from "./partials/BrCards";
import Carousel from "./partials/Carousel";

export default {
  name: "Home",
  components: {
    BrDescModal,
    BrCards,
    Carousel,
  },
};
</script>

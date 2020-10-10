<template>
  <div class="home-container">
    <div class="parallaxContainer">
      <div class="parallaxEffect">
        <div class="head-container">
          <!-- <h2 class="title-name">Raul O. Duarte</h2> -->
          <div class="twContainer">
            <div class="twEffect">
              <h4 class="twText title-name">Raul O. Duarte.</h4>
            </div>
          </div>
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
        <h1><i class="fas fa-project-diagram"></i> Projects:</h1>
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

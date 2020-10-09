<template>
  <div id="carouselControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block" src="../../../assets/images/arietis1.png" />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../../../assets/images/arietis2.png" />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../../../assets/images/bp1.png" />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../../../assets/images/bp2.png" />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../../../assets/images/gitf1.png" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

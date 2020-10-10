<template>
  <div id="carouselControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="jumbotron">
          <h1 class="display-4">
            Bill's Planner
          </h1>
          <p class="lead">
            Reactjs, Redux, Axios, Bootstrap, Sass. <br />
            Hosted on Netlify
          </p>
          <hr class="my-4" />
          <p>
            Frontend - Plan bills per date, pay, add cash, consult, etc.
          </p>
          <p class="lead">
            <a
              href="https://github.com/semicascata/bills-planner-reactjs-v2"
              class="btn btn-lg btn-outline-dark"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://bills-planner-988549.netlify.app/"
              class="btn btn-lg btn-outline-dark"
            >
              <i class="fas fa-globe"></i> Site</a
            >
          </p>
          <span class="badge badge-pill badge-warning" style="font-size: 20px;">
            In Progress
          </span>
        </div>
      </div>
      <div class="carousel-item">
        <div class="jumbotron">
          <h1 class="display-4">
            Bill's Planner
          </h1>
          <p class="lead">
            Nestjs, Mongoose, JWT, Argon2. <br />
            Hosted on Heroku
          </p>
          <hr class="my-4" />
          <p>
            Backend - Plan bills per date, pay, add cash, consult, etc.
          </p>
          <p class="lead">
            <a
              href="https://github.com/semicascata/bills-planner-nestjs"
              class="btn btn-lg btn-outline-dark"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://bills-planner-nestjs.herokuapp.com/bp/v1/"
              class="btn btn-lg btn-outline-dark"
            >
              <i class="fas fa-globe"></i> Endpoint</a
            >
          </p>
          <span class="badge badge-pill badge-warning" style="font-size: 20px;">
            In Progress
          </span>
        </div>
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

<template>
  <div class="home-container">
    <h1 class="title-name">Raul O. Duarte</h1>
    <h3 class="subtitle">IT Technician/Web Developer Jr</h3>
    
    <div class="parallaxContainer">
      <div class="parallaxEffect">
    </div>

    <div class="post-parallax-content">
      <div>
        <h3>Resumo:</h3>
        <p>
          Títulos: Técnico em TI, Analista Jr NOC, Desenvolvedor Web Jr;
        </p>
        <p>
          Formação: Técnico em TI, Tecnólogo em Análise e Desenvolvimento de Sistemas(cursando, 2019-2021);
        </p>
        <p>
          Tempo de experiência: 3 anos;
        </p>
        <p>
          Infra/Redes: Linux, Windows/WinServer, técnologias Cisco, manutenção em desktops e notebooks, solda de componentes;
        </p>
        <p>
          Desenvolvimento Backend: Expressjs, Nestjs;
        </p>
        <p>
          Desenvolvimento Frontend: Reactjs, Vuejs;
        </p>
        <p>
          Banco de Dados: MongoDB, Postgres, OracleDB, TypeORM.
        </p>
        <div class="modal-btn">
          <button type="button" class="btn btn-light" data-toggle="modal" data-target="#fullDescription">
            Descrição Completa
          </button>
        </div>
      </div>
      

      </div>
    </div>
    <!-- modals -->
    <BrDescModal />
  </div>
</template>

<script>
import BrDescModal from './partials/BrDescModal';

export default {
  name: 'Home',
  components: {
    BrDescModal,
  }
}
</script>

<style>

</style>
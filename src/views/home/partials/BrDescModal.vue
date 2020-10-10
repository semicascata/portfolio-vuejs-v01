<template>
  <div
    class="modal fade"
    id="fullDescription"
    aria-labelledby="fullDescription"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="fullDescription">Descrição Completa:</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- <p>
            Olá! Meu nome é Raul, possuo 3 anos de experiência com TI,
            trabalhando desde Técnico N2/N1 a Analista Jr de Monitoramento NOC.
            Sou natural de São Paulo(Osasco), e atualmente morando em Curitiba.
          </p>
          <p>
            No âmbito de Infra/Redes possuo conhecimento intermediário em
            Linux(Debian, Arch, CentOS, básico em automações com ShellScript),
            Windows/WinServer(A.D., Hyper-V e básico em PowerShell), tecnologias
            Cisco(configuração de roteadores e switchs), manutenção em Desktop e
            notebooks e até solda de componentes em circuitos.
          </p>
          <p>
            Em programação e desenvolvimento de sistemas, minha linguagem mãe é
            o JavaScript, possuo conhecimento tanto em Backend como Frontend.
            Projetando e criando Webservices, APIs e interfaces de usuário. Meus
            pontos fortes são usando os seguintes frameworks, em Backend:
            Expressjs e Nestjs(TypeScript). E no Front: Reactjs(Redux/Context) e
            Vuejs(Vuex).
          </p>
          <p>
            Perfil de trabalho seguro, atuando satisfatoriamente tanto
            solo(remoto) como em equipe, gosto de ajudar quando solicitado e não
            vejo problemas em também pedir ajuda quando necessário. Dedicado,
            foco em estudos de novas tecnologias e soluções, procurando sempre
            me atualizar e aprender todo dia. Disciplina com metas e horários.
          </p> -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BrDescModal",
};
</script>

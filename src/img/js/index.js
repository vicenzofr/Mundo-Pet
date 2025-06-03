document.addEventListener("DOMContentLoaded", function () {
  const newAgendBtn = document.getElementById("new-agend");
  const formAgend = document.getElementsByClassName("form")[0];
  const otherSection = document.getElementsByClassName("agendamento")[0];
  const submitBtn = document.getElementById("submit"); // ID do botão de envio

  if (newAgendBtn) {
    newAgendBtn.addEventListener("click", () => {
      formAgend.style.display = "block";
      if (otherSection) {
        otherSection.style.display = "none";
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Impede envio real do formulário, caso seja <form>
      insert();
    });
  }

  function insert() {
    const nameTutor = document.getElementById("name-tutor");
    const namePet = document.getElementById("name-pet");
    const number = document.getElementById("cellphone");
    const descriServ = document.getElementById("descri-serv");
    const date = document.getElementById("data");
    const hora = document.getElementById("hora");
    const horaValor = parseInt(hora.value.split(":")[0]);

    console.log("nome do dono:", nameTutor.value);
    console.log("nome do pet:", namePet.value);
    console.log("Número:", number.value);
    console.log("Descrição:", descriServ.value);
    console.log("Data:", date.value);
    console.log("Horas:", hora.value);

    if (horaValor >= 9 && horaValor < 12) {
      console.log("Bom dia");
    } else if (horaValor >= 13 && horaValor < 18) {
      console.log("Boa tarde");
    } else {
      console.log("Boa noite");
    }

    // Aqui você poderia criar elementos e adicionar à lista de agendamentos

    // Alterna visibilidade novamente
    otherSection.style.display = "block";
    if (formAgend) {
      formAgend.style.display = "none";
    }
  }
});

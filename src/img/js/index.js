import "../css/index.css";
import "../css/form.css";
import { scheduleNew } from "../server/schedules-new";

document.addEventListener("DOMContentLoaded", function () {
  const newAgendBtn = document.getElementById("new-agend");
  const formAgend = document.getElementsByClassName("form")[0];
  const otherSection = document.getElementsByClassName("agendamento")[0];
  const submitBtn = document.getElementById("submit");

  if (newAgendBtn) {
    newAgendBtn.addEventListener("click", () => {
      formAgend.style.display = "block";
      if (otherSection) {
        otherSection.style.display = "none";
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await insert();
    });
  }

  async function insert() {
    const nameTutor = document.getElementById("name-tutor");
    const namePet = document.getElementById("name-pet");
    const number = document.getElementById("cellphone");
    const descriServ = document.getElementById("descri-serv");
    const date = document.getElementById("data");
    const hora = document.getElementById("hora");

    const nome = nameTutor.value.trim();
    const pet = namePet.value.trim();
    const telefone = number.value.trim();
    const descricao = descriServ.value.trim();
    const data = date.value;
    const horaValor = hora.value;

    if (!nome || !pet || !telefone || !descricao || !data || !horaValor) {
      return alert("Preencha todos os campos.");
    }

    const agendamento = {
      id: Date.now(),
      name: nome,
      pet,
      telefone,
      descricao,
      data,
      hora: horaValor,  
    };

    try {
      await scheduleNew(agendamento);
      alert("Agendamento enviado com sucesso!");

      // Limpa os campos
      nameTutor.value = "";
      namePet.value = "";
      number.value = "";
      descriServ.value = "";
      date.value = "";
      hora.value = "";
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar agendamento.");
    }
  }
});

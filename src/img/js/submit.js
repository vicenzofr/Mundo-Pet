import { scheduleNew } from "./schedule-post";
import { scheduleShow } from "./schedule-show";

const form = document.getElementById("meu-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const agendamento = {
    hora: form.hora.value,
    pet: form.pet.value,
    name: form.name.value,
    descricao: form.descricao.value,
  };

  try {
    await scheduleNew(agendamento); // envia para o backend

    // Atualiza os dados na tela (você pode precisar buscar do backend de novo, se necessário)
    const response = await fetch("http://localhost:3000/schedules"); // ajuste se necessário
    const data = await response.json();
    scheduleShow({ dailySchedules: data });

    // Troca a tela para a principal
    document.getElementsByClassName("form").style.display = "none";
    document.getElementsByClassName("centralizar").style.display = "block";

    // Limpa o formulário, se quiser
    form.reset();
  } catch (error) {
    console.error("Erro ao salvar agendamento:", error);
  }
});

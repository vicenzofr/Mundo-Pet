import "../css/index.css";
import "../css/form.css";
import dayjs from "dayjs";

const periodMorning = document.querySelector(".season-morning");
const periodAfternoon = document.querySelector(".season-after");
const periodNight = document.querySelector(".season-night");

export function scheduleShow({ dailySchedules }) {
  // Limpa os agendamentos antigos (exceto o título)
  periodMorning.querySelectorAll(".atividade").forEach(el => el.remove());
  periodAfternoon.querySelectorAll(".atividade").forEach(el => el.remove());
  periodNight.querySelectorAll(".atividade").forEach(el => el.remove());

  dailySchedules.forEach((schedule) => {
    const horaInt = parseInt(schedule.hora.split(":")[0]);

    const item = document.createElement("div");
    item.classList.add("atividade");

    const hour = document.createElement("h2");
    hour.classList.add("hour");
    hour.textContent = dayjs(`2000-01-01T${schedule.hora}`).format("HH:mm");

    const nameDog = document.createElement("h2");
    nameDog.classList.add("name-dog");
    nameDog.textContent = schedule.pet;

    const division = document.createElement("p");
    division.classList.add("division");
    division.textContent = "/";

    const nameHuman = document.createElement("p");
    nameHuman.classList.add("name-human");
    nameHuman.textContent = schedule.name;

    const objective = document.createElement("p");
    objective.classList.add("objective");
    objective.textContent = schedule.descricao;

    const remove = document.createElement("button");
    remove.classList.add("remove-item");
    remove.textContent = "Remover agendamento";

    item.appendChild(hour);
    item.appendChild(nameDog);
    item.appendChild(division);
    item.appendChild(nameHuman);
    item.appendChild(objective);
    item.appendChild(remove);

    if (horaInt >= 9 && horaInt < 12) {
      periodMorning.appendChild(item);
    } else if (horaInt >= 13 && horaInt < 18) {
      periodAfternoon.appendChild(item);
    } else {
      periodNight.appendChild(item);
    }
  });
}

import "../css/index.css";
import "../css/form.css";
import { scheduleNew } from "../server/schedules-new";
import dayjs from "dayjs";

const periodMorning = document.getElementById("season-morning")
const periodAfternoon = document.getElementById("season-after")
const periodNight = document.getElementById("season-night")

export async function scheduleDay(){
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach((schedule) => {
        const item = document.createElement("div")
        const hour = document.createElement("h2")
        const nameDog = document.createElement("h2")
        const desc = document.createElement("p")
        const nameHuman = document.createElement("p")
        const objective = document.createElement("p")
        const remove = document.createElement("button")


        time.textContent = dayjs(schedule.hour).format("HH:mm")
        nameDog.textContent = namePet
    })
}

import { scheduleShow } from "./show";
import { getAll } from "../server/schedules-get"; 

export async function schedulesDay() {
  const dailySchedules = await getAll(); 
  scheduleShow({ dailySchedules });
}

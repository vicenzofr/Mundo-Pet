import { apiConfig } from "./api-config";

export async function scheduleNew(agendamento) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agendamento),
    });
  } catch (error) {
    console.error("Erro ao enviar agendamento:", error);
    throw error;
  }
}

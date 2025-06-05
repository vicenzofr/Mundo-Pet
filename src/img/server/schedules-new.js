import { apiConfig } from "./api-config";


export async function scheduleNew({ id, name, pet, telefone, descricao, hora, data }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, name, pet, telefone, descricao, hora, data })
    });

    alert("Agendamento realizado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente mais tarde");
  }
}

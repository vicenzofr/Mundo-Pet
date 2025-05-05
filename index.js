function log() {
    const formAgend = document.getElementsByClassName("form")[0];
    const otherSection = document.getElementsByClassName("agendamento")[0]; // ou qualquer outra seção que esteja visível

    // Mostrar o formulário
    formAgend.style.display = "block";

    // Esconder a outra seção, se existir
    if (otherSection) {
        otherSection.style.display = "none";
    }
}


// ADICIONANDO NO FORM

function insert(){
    const nameTutor = document.getElementById ("name-tutor")
    const namePet = document.getElementById("name-pet")
    const number = document.getElementById ("cellphone")
    const descriServ = document.getElementById ("descri-serv")
    
    
    console.log("nome do dono :", nameTutor.value)
    console.log("nome do pet :", namePet.value)
    console.log("Numero:", number.value)
    console.log("Descricao", descriServ.value)



    const formAgend = document.getElementsByClassName("form")[0];
    const otherSection = document.getElementsByClassName("agendamento")[0];

    otherSection.style.display = "block";

    // Esconder a outra seção, se existir
    if (formAgend) {
        formAgend.style.display = "none";
    }
}

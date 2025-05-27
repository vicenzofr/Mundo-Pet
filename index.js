

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
    const date = document.getElementById("data")
    const horaValor = parseInt(hora.value.split(":")[0]);

    console.log("nome do dono :", nameTutor.value)
    console.log("nome do pet :", namePet.value)
    console.log("Numero :", number.value)
    console.log("Descricao :", descriServ.value)
    console.log("Data :", date.value)
    console.log("Horas :", hora.value)

    
    // CRIAR UM ITEM NA LISTA 

    const hour = document.getElementsByClassName("hour")
    const nameDog = document.getElementsByClassName("name-dog")
    const nameHuman = document.getElementsByClassName("name-human")
    const objective = document.getElementsByClassName("objective")
    

    //HORARIO

    if (horaValor >= 9 && horaValor < 12) {
        console.log("Bom dia");    //apenas para testar o horario
    } else if (horaValor >= 13 && horaValor < 18) {
        console.log("Boa tarde");    //apenas para testar o horario
    } else {
        console.log("Boa noite");    //apenas para testar o horario
    }
    

//  QUANDO CLICA NO INPUT DE SUBMIT 
    const formAgend = document.getElementsByClassName("form")[0];
    const otherSection = document.getElementsByClassName("agendamento")[0];

    otherSection.style.display = "block";

    // Esconder a outra seção, se existir
    if (formAgend) {
        formAgend.style.display = "none";
    }
}



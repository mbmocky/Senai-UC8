
console.log("Insira a data do evento:")

//Valida data do evento

let dataDeHoje = new Date (); 
const dataDoEvento = (2021, 10, 10);

if (dataDoEvento >= dataDeHoje) {
    console.log("Data Inferior a data atual");
} else {
    console.log("Cadastro Permitido");
}

//Validação de Idade

let idadeDoParticipante = 40

if (idadeDoParticipante <= 18) {
    console.log("Idade não Permitida!")
} else {
    console.log("Idade Permitida")
}


let listaDeParticipantes = ["Moises", "Noé", "Paulo", "Mirian"]

if (listaDeParticipantes.length < 100) {
    console.log("Cadastro Finalizado!")
} else { 
    console.log("Cadastro não Permitido: Limite excedido")
}
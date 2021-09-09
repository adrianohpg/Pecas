var repositoriopecas = ["Filtro de Ar", "Rolamento de roda", "Molas", "Vela"];

if( repositoriopecas.lenght <= 10 ) {
    console.log("No Carrinho ainda cabe mais!")
}
else{
    console.log("O Carrinho esta Cheio!")
};

var peso = 50;

// Script para Pesar as Peças! //////////////////////

/* if (peso < 100) {
    console.log("A Peça é muito pessado para o carro!")
}
else {
    console.log("A Peça possui o peso adequado!")
}

*/

////////////////////////////////////////////////////

var peca = "Suspensão a Ar"

if (peca.length > 3) {
    console.log("Nome de peça está adequado para o cadastro.");

}
else if (peca.length == 0) {
    console.log("O nome da peça não pode ser vazio.");

}
else {
    console.log("O nome da peça deve ter mais que três caracteres.");
}

switch (peca.length){
    case 0:
        console.log ("O nome da peça não pode estar vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log ("O nome deve ter mais de 3 caracteres, digite um nome válido")
        break;

    case 4:
        console.log ("O nome possui 4 caracteres")    
        break;

    default:
        console.log ("Peça válida para cadastro!")
       break;
}

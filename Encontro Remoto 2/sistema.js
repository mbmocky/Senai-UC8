let numeroDeAlunos = 10;

for (let contador = 1; contador <= numeroDeAlunos; contador ++) {
    //console.log(contador);

    if(contador === 0){
        console.log("O numero atual é zero");
    }else if (contador % 2 == 0){
        console.log("O número " + contador + " é par")
    }else{
        console.log("O número " + contador + " é impar")
    }
}

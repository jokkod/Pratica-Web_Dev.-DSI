function verificarIdade(){
    var idade= document.getElementById("idade").value;
    var resultado= document.getElementById("resultado");
    console.log(resultado);
    if(idade>=18){
        resultado.innerHTML= "Você é maior de idade!";
    }else{
        resultado.innerHTML= "Você é menor de idade!";
    }
}
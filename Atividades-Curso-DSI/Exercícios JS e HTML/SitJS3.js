function Converter(){
    var temp= document.getElementById("celsius").value;
    var convert= document.getElementById("saída");

    var conversao= temp * 1.8 + 32;
    convert.innerHTML= "A conversão é: "+ conversao;

}
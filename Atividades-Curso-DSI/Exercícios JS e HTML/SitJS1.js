function calcular(){
    const nota1= parseFloat(document.getElementById("n1").value);
    const nota2= parseFloat(document.getElementById("n2").value);
    const nota3= parseFloat(document.getElementById("n3").value);
    const media= (nota1 + nota2 + nota3)/3;

    if(media>=7){
        document.getElementById("Situação").innerHTML="Sistema: Aprovado";
    }else{
        document.getElementById("Situação").innerHTML="Sistema: Reprovado";
    }
}
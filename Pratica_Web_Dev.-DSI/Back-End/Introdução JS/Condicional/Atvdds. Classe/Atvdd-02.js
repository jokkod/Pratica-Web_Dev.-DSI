let sabor = prompt(`
    Para escolher seu suco, informe a letra relacionada ao sabor desejado:
    L = Laranja
    M = Morango
    A = Acerola
    U = Uva
    `)

if(sabor == 'L' || sabor == 'l'){
    alert("Você escolheu o suco de Laranja");
}else if(sabor == 'M' || sabor == 'm'){
    alert("Você escolheu o suco de Morango");
}else if(sabor == 'A' || sabor == 'a'){
    alert("Você escolheu o suco de Acerola");
}else if(sabor == 'U' || sabor == 'u'){
    alert("Você escolheu o suco de Uva");
}else{
    alert("Sabor indisponível! Escolha um dos sabores disponíveis.");
}

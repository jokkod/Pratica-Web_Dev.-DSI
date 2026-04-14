/* No console: let nacionalidade;
nacionalidade = 'Brasileira';

if(nacionalidade == 'Brasileira') {
    console.log("Nos forneça o seu RG");
}else{
    console.log("Nos forneça o seu Passaporte");
} */

/* No arquivo HTML: */ 
let nacionalidade = prompt(` 
    Você tem nacionalidade brasileira?
    Informe 'sim' ou 'não'
    `
)

if(nacionalidade == 'sim'|| nacionalidade == 'Sim' || nacionalidade == 'SIM') {
    let rg = parseInt(prompt('Nos informe o seu RG'));
    alert(`
        RG informado: ${rg};
        `)
}
if(nacionalidade == 'nao' || nacionalidade == 'não'|| nacionalidade == 'Não' || nacionalidade == 'NÃO') {
    let passaporte = prompt('Nos informe o seu Passaporte');
    alert(`
        Passaporte informado: ${passaporte};
        `)
}
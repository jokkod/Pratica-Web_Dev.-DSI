
/* Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */
let nomepersonA = prompt(`
    Simulador de Combate
    Digite um nome para o personagem atacante:
    `);
let poderpersonA = parseInt(prompt(`
    Digite o nível de poder de ataque do personagem atacante:
    `));
let nomepersonB = prompt(`
    Fase de Combate
    Digite o nome do personagem defensor:
    `);
let vidapersonB = parseInt(prompt(`
    Defina os pontos de vida do personagem defensor:
    `))
let escudopersonB = prompt(`
    Decida se o personagem defensor possui escudo ou não, digitando:
    'sim' ou 'não'
    `)

if (poderpersonA > vidapersonB && (escudopersonB == 'Não' || escudopersonB == 'NÃO' || escudopersonB == 'não' || escudopersonB == 'nao' || escudopersonB == 'NAO')) {
    let danocausado1 = (poderpersonA - vidapersonB);
    let pontosvida1 = (vidapersonB - danocausado1);
    prompt(`
        Resultado do Combate:
        Personagem atacante: ${nomepersonA} com ${poderpersonA} de poder pessoal
        Causou ${danocausado1} pontos de dano;
        Personagem defensor: ${nomepersonB} possui agora ${pontosvida1} pontos de vida.

        `)
} else if (poderpersonA > vidapersonB && (escudopersonB == 'Sim' || escudopersonB == 'SIM' || escudopersonB == 'sim')) {
    let danocausado2 = (poderpersonA - vidapersonB) / 2;
    let pontosvida2 = (vidapersonB - danocausado2);
    prompt(`
        Resultado do Combate:
        Personagem atacante: ${nomepersonA} com ${poderpersonA} de poder pessoal
        Causou ${danocausado2} pontos de dano;
        Personagem defensor: ${nomepersonB} possui agora ${pontosvida2} pontos de vida.
        `)
} else {
    let danocausado3 = 0;
    let pontosvida3 = vidapersonB;
    alert(`
        Resultado do Combate:
        Personagem atacante: ${nomepersonA} com ${poderpersonA} de poder pessoal
        Causou ${danocausado3} pontos de dano;
        Personagem defensor: ${nomepersonB} ainda possui ${pontosvida3} pontos de vida.
        `)
}





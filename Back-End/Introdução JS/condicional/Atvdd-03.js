let nomepersonA= prompt(`
    Simulador de Combate
    Digite um nome para o personagem atacante:
    `);

let poderpersonA= parseInt(prompt(`
    Digite o nível de poder de ataque do personagem atacante:
    `));

alert(`
    O personagem atacante se chama: ${nomepersonA}
    O personagem atacante nível de poder de ataque possui nível de poder de ataque de: ${poderpersonA}
    `)

let nomepersonB= prompt(`
    Fase de Combate
    Digite o nome do personagem defensor:
    `);

let vidapersonB= parseInt(prompt(`
    Defina os pontos de vida do personagem defensor:
    `))

let escudopersonB= prompt(`
    Decida se o personagem defensor possui escudo ou não, digitando:
    'sim' ou 'não'
    `)
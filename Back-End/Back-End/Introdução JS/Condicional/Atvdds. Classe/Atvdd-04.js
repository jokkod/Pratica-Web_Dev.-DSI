let escolhaPerson = +prompt(`
    Menu de Personagens
        1 - Dyrroth
        2 - Aurora
        3 - Tigreal
        4 - Valir
        5 - Hayabusa
        6 - Alice
        Escolha o personagem inserindo seu respectivo número:
    `)

    switch(escolhaPerson){
        case 1:
            alert(`Dyrroth é o rei do abismo!`)
            break;
        case 2:
            alert(`Aurora é a poderosa rainha do gelo!`)
            break;
        case 3:
            alert(`Tigreal é o principal guardião do reino celestial!`)
            break;
        case 4:
            alert(`Valir é o imbatível mestre do fogo!`)
            break;
        case 5:
            alert(`Hayabusa é o ágil ninja dominador das sombras!`)
            break;
        case 6:
            alert(`Alice é a virtuosa rainha do abismo!`)
            break;
        default:
            alert(`Opção inválida. Escolha um dos hérois disponíveis!`)
            break;
    }
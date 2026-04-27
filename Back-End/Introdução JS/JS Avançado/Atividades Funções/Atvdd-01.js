function calcTriang() {
  alert(`
        --- Inicializando Cálculo de Área de Triângulo ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);
  let base1 = Number(
    prompt(`
        Digite um valor para a medida da base:
        `),
  );
  let altura1 = Number(
    prompt(`
        Digite um valor para a medida da altura:
        `),
  );

  let calc1 = (base1 * altura1) / 2;
  alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc1.toFixed(2)}
        `);
}

function calcRet() {
  alert(`
        --- Inicializando Cálculo de Área de Retângulo ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);
  let base2 = Number(
    prompt(`
        Digite um valor para a medida da base:
        `),
  );
  let altura2 = Number(
    prompt(`
        Digite um valor para a medida da altura:
        `),
  );

  let calc2 = base2 * altura2;

  alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc2}
        `);
}

function calcQuadr() {
  alert(`
        --- Inicializando Cálculo de Área de Quadrado ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);
  let lado = Number(
    prompt(`
        Digite um valor para a medida do lado:
        `),
  );

  let calc3 = lado * lado;

  alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc3}
        `);
}

function calcTrap() {
  alert(`
        --- Inicializando Cálculo de Área de Trapézio ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);

  let baseM = Number(
    prompt(`
        Digite um valor para a medida da base maior:
        `),
  );
  let basem = Number(
    prompt(`
        Digite um valor para a medida da base menor:
        `),
  );
  let altura3 = Number(
    prompt(`
        Digite um valor para a medida da altura:
        `),
  );

  let calc4 = ((baseM + basem) * altura3) / 2;

  alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc4.toFixed(2)}
    `);
}

function calcCirc() {
    alert(`
        --- Inicializando Cálculo de Área de Círculo ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);
    
    let pi = 3.14;
    let raio = Number(prompt(`
        Digite um valor para a medida da raio do círculo:
        * Lembrando que o Raio é METADE do diâmetro.
        `));

    let calc5 = pi *(raio * raio);

    alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc5}
        `);
}
do{

let escolhaopcao = Number(prompt(`
        Escolha uma das opções que deseja realizar:
        1- Cálculo da Área do Triângulo
        2- Cálculo da Área do Retângulo
        3- Cálculo da Área do Quadrado
        4- Cálculo da Área do Trapézio
        5- Cálculo da Área do Círculo
        6- Sair das Opções
        `));

switch(escolhaopcao){
    case 1:
        calcTriang()
    case 2:
        calcRet() 
    case 3:
        calcQuadr()
    case 4:
        calcTrap()
    case 5:
        calcCirc()
    case 6:
        alert(`
            Saindo...
            `);
        break;
}
}while(escolhaopção !== 6)

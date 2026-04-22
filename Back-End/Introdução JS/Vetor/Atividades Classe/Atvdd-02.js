let modelosCarros = ["Uno", "HB20", "Argo", "Fit", "Onix"];

alert(`
    Carros Removidos:
    ${modelosCarros[0]}
    ${modelosCarros[1]}
    `)

modelosCarros.splice(0, 2);

alert(`
    Carros:\n
    ${modelosCarros[0]}
    ${modelosCarros[1]}
    ${modelosCarros[2]}
    `)

let novosCarros = modelosCarros
for (let i = 1; i <= 3; i++) {
    novosCarros.push(prompt(`
        Digite nome do ${i}º novo carro:
        `));
};


alert(`
    Carros:\n
    ${novosCarros[0]}
    ${modelosCarros[1]}
    ${modelosCarros[2]}
    ${modelosCarros[3]}
    ${modelosCarros[4]}
    ${modelosCarros[5]}
    `)
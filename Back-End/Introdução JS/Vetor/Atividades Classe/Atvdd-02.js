let modelosCarros = ["Uno", "HB20", "Argo", "Fit", "Onix"];
let passo = 1;
let qtddRetirada = 0;

while(true){
        if(passo == 1){
            let entrada = prompt(`--- Catálogo de Carros ---\n
                Estoque Atual:`+ modelosCarros.join("\n") + 
                `\n\nPasso 1- Digite quantos itens que deseja retirar:`
            );
            qtddRetirada = parseInt(entrada);
            if (isNaN(qtddRetirada) || qtddRetirada <= 0 || qtddRetirada > modelosCarros.length) {
            alert(`--- ERRO:\nDigite um número válido (entre 1 e " + estoque.length + ").`);
            continue;
            }
            passo = 2;
        }

        if (passo == 2) {
            let erro = false;
            let modelosCarrosCp1 = ["Uno", "HB20", "Argo", "Fit", "Onix"];

            for(i == 1; i <= qtddRetirada; i= i + 1){
            let ItmRetirar = prompt(`Passo 2- Digite o nome do` + i + `º item a ser retirado:`);
            let atualizacao = modelosCarros.indexOf(ItmRetirar);

            if(atualizacao !== -1) {
                modelosCarros.splice(atualizacao, 1);
                alert(`Item(ns):` + ItmRetirar + `removido(s).`);
            } else {
                alert("--- ERRO: Item '" + ItmRetirar + "' não encontrado!");
                modelosCarros = ["Uno", "HB20", "Argo", "Fit", "Onix"];
                erro = true;
                break;
            }
        }

        if (erro) {
            passo = 1;
            continue;
        }
        passo = 3;
    }
    /* Fazer próx if(passo == 3){} com for incluso contando até 3 e outros if de validação: 
    1º para verificar erro; e fora dele método push; e 2º para fazer retorno ao passo 1; 
    e break while fora do if com alerts finais fora do while. */
}




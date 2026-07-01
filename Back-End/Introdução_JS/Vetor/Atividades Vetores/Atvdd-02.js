let modelosCarros = ["Uno", "HB20", "Argo", "Fit", "Onix"];
let passo = 1;
let qtddRetirada = 0;

while (true) {
    if (passo == 1) {
        let entrada = prompt(`--- Catálogo de Carros ---\nEstoque Atual:\n` + modelosCarros.join("\n") +
            `\n\nPasso 1- Digite quantos itens deseja retirar:`
        );
        qtddRetirada = parseInt(entrada);
        if (isNaN(qtddRetirada) || qtddRetirada <= 0 || qtddRetirada > modelosCarros.length) {
            alert(`--- ERRO:\nDigite um número válido (entre 1 e ${modelosCarros.length}).`);
            continue;
        }
        passo = 2;
    }
    /* Erro: no 1º if que impede seguimento do sistema -> RESOLVIDO
    Resolução: 
    */

    if (passo == 2) {
        let erro = false;

        for (let i = 1; i <= qtddRetirada; i++) {
            let ItmRetirar = prompt(`Passo 2- Digite o nome do ` + i + `º item a ser retirado:`);
            let atualizacao = modelosCarros.indexOf(ItmRetirar);

            if (atualizacao !== -1) {
                modelosCarros.splice(atualizacao, 1);
                alert(`Item(ns): ${ItmRetirar} removido(s).`);
                /* Erro: Código está encerrando aqui e não está prosseguindo próx passo. -> RESOLVIDO 
                Resolução: 
                */
            } else {
                alert(`--- ERRO: Item não encontrado!`);
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
    if (passo == 3) {
        let falha = false;

        for (let j = 1; j <= 3; j++) {
            let modeloAdd = prompt(`Passo Final- Adicione o ${j}º de 3 carros de sua preferência:`);
            /* Erro: Prompt se repete incessantemente. -> RESOLVIDO*/
            let atualizacao2 = modelosCarros.indexOf(modeloAdd);

            if (modeloAdd === null || modeloAdd.trim() === "") {
                alert(`--- ERRO: Digite nomes válidos para adição ao catálogo.`);
                falha = true;
                break;
            }
            modelosCarros.push(modeloAdd.trim());

            if (falha) {
                passo = 1;
                continue;
            } else {
                passo = 4;
                alert(`PROCESSO FINALIZADO\n--- Catálogo Final ---\nCarros Disponíveis:\n${modelosCarros.join("\n")}`);
            }
        }
    }
}
/* Alerta Decorrente Cód Antigo: Não Usar While após While sem aninhá-los! Dá erro por *Efeito Espaguete.
*Bloqueio incessante de While pois houve "despedaçamento" do código em fios separados que se interrompem.
*/




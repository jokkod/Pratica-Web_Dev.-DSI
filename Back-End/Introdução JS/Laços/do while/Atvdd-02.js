/* Você foi contratado para desenvolver um sistema de emissão de boletos. O cliente deve informar qual o melhor dia
        para pagamento do boleto. Os dias disponíveis são 2, 5 ou 10. O sistema deve validar o dia informado pelo
        cliente e apresentar a mensagem boleto registrado caso o dia seja válido. Se o dia for inválido, o sistema deve
        solicitar um novo dia até que ele seja digitado corretamente. */
let nomeCliente;
let diaDisponiveis;

do {
        alert(`
        --- SISTEMA DE EMISSÃO DE BOLETOS ---\n
        Seja bem vindo ao sistema!
        Informe corretamente suas informações a seguir.
        `);
        
        nomeCliente = prompt(`
                Informe o nome do cliente:
                `);
        let diaDisponiveis = +prompt(`
                Informe melhor dia para pagamento entre os dias 2, 5 e 10:
                `);

        if (diaDisponiveis == 2 || diaDisponiveis == 5 || diaDisponiveis == 10) {
                alert(`
                       --- RESULTADO DA EMISSÃO ---\n
                       ${nomeCliente},
                        seu dia de emissão foi definido com sucesso!
                        Dia de Emissão definido para o dia ${diaDisponiveis}
                        `)
                break;
        } else {
                alert(`
                        --- FALHA NA EMISSÃO ---\n
                        Dia Inválido! Informe um dia válido para a emissão.
                        `);
        }
} while (diaDisponiveis != 2 && diaDisponiveis != 5 && diaDisponiveis != 10);
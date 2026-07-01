let temp

while (temp !== 5) {
    alert(`--- Temporizador da Esteira de Secagem ---\n
    Para Inicializar Esteira click "OK"
    `)
    for (temp = 1; temp <= 5; temp++) {
        alert(`Aquecendo... segundo ${temp}`);

        if (temp == 5) {
            alert(`Temperatura ideal atingida.`);
            alert(`RELATÓRIO FINAL DE FUNCIONAMENTO:\n
                Total de segundos ligados ${temp}`);
            continue;
            temp = 1;
        }
    }
}

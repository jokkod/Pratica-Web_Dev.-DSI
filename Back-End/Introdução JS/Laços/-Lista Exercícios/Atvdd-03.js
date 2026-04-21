alert(`--- Contador de Testes ---\n
    Para Inicializar Contador click "OK"
    `);
for (let cont = 1; cont <= 20; cont++) {
    alert(`Contador: ${cont}`);

    if (cont === 9) {
        alert(`
            Número Proibido Encontrado! Encerrando...
            `);
        break;
    }
}


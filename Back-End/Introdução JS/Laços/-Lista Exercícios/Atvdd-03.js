alert(`--- Inicializar contador ---`);
for (let cont = 0; cont <= 20; cont++) {
    alert(`Contador: ${cont}`);

    if (cont == 10) {
        alert(`
            Número Proibido Encontrado! Encerrando...
            `);
        break;
    }
}


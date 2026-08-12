import conect from "../config/database.js";

// Trazendo os dados do banco
async function findPensamentos() {
    try {
        const sql = `
        SELECT * FROM pensamentos
    `;
    const [dados] = await conect.query(sql);
    console.log(dados);
    
    } catch (error) {
        console.error(error);
    }
}

 findPensamentos();
 
 // registrando dados no banco
 async function createPensamentos(descricao, autoria) {
    try {
        const sql = `
            INSERT INTO pensamentos (descricao, autoria)
            VALUES (?, ?)
        `
        const [dados] = await conect.query(sql,[descricao, autoria]);
        return dados;
    } catch (error) {
        console.error(error);
    }
}

//Buscando Id
async function searchId(id) {
    try {
        const sql = `
        SELECT * FROM pensamentos WHERE id = ?
        `;
        const [dados] = await conect.query(sql, [id]);
        return dados[0];
    } catch (error) {
        console.error(error);
    }
}

// Atualizando registro
async function editRegister(id, descricao, autoria) {
    try {
        // Montar objeto que vai receber as variáveis de parametro
        // Fazer a condicional para escolher qual campo o user vai atualizar
        const dadosAtualizar = {};

        if (descricao !== undefined && descricao !== null && descricao !== "") {
            dadosAtualizar.descricao = descricao;
        }
        if (autoria !== undefined && autoria !== null && autoria !== "") {
            dadosAtualizar.autoria = autoria;
        }

        if (Object.keys(dadosAtualizar).length === 0) {
            throw new error("Nenhum campo fornecido para edição.");
        }

        const sql = `
        UPDATE pensamentos SET ? WHERE id = ?
    `;
        const [dados] = await conect.query(sql, [id, dadosAtualizar]);
        return dados;
    } catch (error) {
        console.error(error);
    }
}

async function deleteRegister(id) {
    try {
        const sql = `
        DELETE FROM pensamentos WHERE id = ?
        `;
        // Fazer o controller do delete e puxar a rota pelo id
        const [dados] = await conect.query(sql, [id]);
        return dados;
    } catch (error) {
        console.error(error);
    }
}

export default {findPensamentos, createPensamentos, searchId, editRegister, deleteRegister};
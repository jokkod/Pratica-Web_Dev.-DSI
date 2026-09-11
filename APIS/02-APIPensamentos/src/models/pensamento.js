import conect from "../config/database.js";


// Trazendo os dados do banco
async function findPensamentos() {

    try {
        const sql = `
        SELECT * FROM thought
    `;
    const [dados] = await conect.query(sql);
    console.log(dados);
    return dados;
    
    } catch (error) {
        console.error(error);
    }
}


 
 // registrando dados no banco
 async function createPensamentos(descricao, autoria) {
    try {
        const sql = `
            INSERT INTO thought (descricao, autoria)
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
        SELECT * FROM thought WHERE id = ?
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
        const objectDados = {};

        if (descricao !== undefined) {
            objectDados.descricao = descricao;
        }
        if (autoria !== undefined) {
            objectDados.autoria = autoria;
        }

        if (Object.keys(objectDados).length === 0) {
            throw new error("Nenhum campo fornecido para edição.");
        }

        const sql = `
        UPDATE thought SET ? WHERE id = ?
    `;
        const [dados] = await conect.query(sql, [objectDados, id]);
        return dados;
    } catch (error) {
        console.error(error);
    }
}

async function deleteRegister(id) {
    try {
        const sql = `
        DELETE FROM thought WHERE id = ?
        `;
        const [dados] = await conect.query(sql, [id]);
        return dados;
    } catch (error) {
        console.error(error);
    }
}

export default {findPensamentos, createPensamentos, searchId, editRegister, deleteRegister};
import conect from "../config/database.js";

async function listUsers() {
    try {
        const sql = `
        SELECT * FROM users;
    `;

        const [dados] = await conect.query(sql);
        return dados;
    } catch (error) {
        console.error(error)
        throw new error
    }
}

async function registerUsers(nome, email, senha) {
    try {
        const sql = `
            INSERT INTO users (nome, email, senha) VALUES (?, ?, ?);
        `;

        const [dados] = await conect.query(sql, [nome, email, senha]);
        return dados;
    } catch (error) {
        console.error(error)
        throw new error
    }

}

async function findUserEmail(email) {
    try {
        const sql = `
            SELECT * FROM users WHERE email = ?
        `;

        const [dados] = await conect.query(sql, [email])
        return dados[0]
    } catch (error) {
        console.error(error)
        throw new error
    }
}


export default {listUsers, registerUsers, findUserEmail}
import conect from "../config/database.js";

async function listUsers() {
    const sql = `
        SELECT * FROM USERS;
    `;

    const [dados] = await conect.query(sql);
    return dados;
}

export default {listUsers}
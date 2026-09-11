import modelUsers from '../models/user.js';
/* import bcrypt from 'bcrypt'; */
/* import jwt from 'jsonwebtoken' */
/* import dotenv from 'dotenv' */

class UserController {
    static async findUsers(req, res) {
        try {
            const result = await modelUsers.listUsers();
            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Erro de Servidor!'
            });
        }
    }

    // Necessita Complemento com fragmentos aula perdida

    static async userLogin(req, res) {
        try {
            //var escrita entre {} permite incluir dados à um parâmetro da função async
            const { email, senha } = req.body;

            // Validação campos obrigatórios
            if (!email || !senha) {
                let message = 'Todos os campos devem ser preenchidos obrigatoriamente.';
                res.status(400).json({ message });
            }

            const userExistence = await modelUsers.listUsersEmail(email);
            if (!userExistence) {
                let message = 'Email ou senha inválidos';
                return res.status(400).json({ message });
            }

            const passwordCompare = await bcypt.compare(
                senha,
                userExistence.senha
            )

            if (!passwordCompare) {
                let message = 'Email ou senha inválidos.';
                return res.status(400).json({ message });
            }

            /* const token = jwt.sign(
                {
                    id: userExistence.id,
                    senha: userExistence.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1h'
                },
            ); 
            
            return res.status(200).json({
                message: 'Login efetuado com sucesso.',
                token
            })*/
           
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Erro de Servidor!'
            });
        }
    }
}

export default UserController;
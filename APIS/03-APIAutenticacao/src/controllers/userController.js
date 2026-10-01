import modelUsers from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class UserController {
    static async findUsers(req, res) {
        try {
            const result = await modelUsers.listUsers();
            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            let message = 'Erro de servidor!';
            return res.status(500).json({ message });
        }
    }

    static async userRegister(req, res) {
        try {
            const { nome, email, senha } = req.body;
            //Verificação campos obrigatórios
            if (!nome || !email || !senha) {
                let message = 'Todos os campos são obrigatórios.'
                return res.status(400).json({ message })
            }
            //Verificando existência do email
            const userEmail = await modelUsers.findUserEmail(email);
            if (userEmail) {
                let message = 'Usuário já existe!'
                return res.status(400).json({ message })
            }
            //Criando hash para esconder a senha
            const hash = await bcrypt.hash(senha, 10);

            //Levando dados para o banco de dados
            await modelUsers.registerUsers(nome, email, hash);
            let message = 'Usuário cadastrado com sucesso!';
            return res.status(201).json({ message });

        } catch (error) {
            console.error(error);
            let message = 'Erro de servidor!';
            return res.status(500).json({ message });
        }
    }

    static async userLogin(req, res) {
        try {
            const { email, senha } = req.body;
            if (!email || !senha) {
                let message = 'Todos os campos são obrigatórios;'
                return res.status(400).json({ message })
            }
            const user = await modelUsers.findUserEmail(email);
            if (!user) {
                let message = 'Email ou senha inválidos.'
                return res.status(400).json({ message })
            }
            const passwordCompare = await bcrypt.compare(
                senha,
                user.senha
            );
            if (!passwordCompare) {
                let message = 'Email ou senha inválidos.'
                return res.status(400).json({ message })
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    role: user.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1h'
                }
            );
            return res.status(200).json({
                message: 'Login efetuado com sucesso.',
                token
            });
        } catch (error) {
            console.error(error);
            let message = 'Erro de servidor!';
            return res.status(500).json({ message });
        }
    }

    static userAuthenticator(req, res) {
        try {
            res.status(200).json({
                user: req.user
            });
        } catch (error) {
            console.error(error);
            let message = 'Erro de servidor!';
            return res.status(500).json({ message });
        }
    }

    static async findId(req, res) {
        try {
            const {id} = req.params;
            // Verificando se id é válido
            if(isNaN(id)) {
                let message = 'Id Inválido, não existe'
                return res.status(400).json({ message })
            }

            const idUser = await modelUsers.findById(id);
            // Verificando se id existe
            if(!idUser) {
                let message = 'Usuário não encontrado'
                return res.status(404).json({ message })
            }

            return res.status(200).json({ idUser })
        } catch (error) {
            console.error(error);
            let message = 'Erro de servidor!';
            return res.status(500).json({ message });
        }
    }

    static async imageUpdate(req, res) {
        try {
            const {id} = req.params;

            // Verificando se id é válido
            if (isNaN(id)) {
                let message = 'Id Inválido, não existe';
                return res.status(400).json({ message })
            }

            // Verificação se existe o arquivo
            if(!req.file) {
                let message = 'Arquivo não existe';
                return res.status(400).json({ message })
            }

            const { filename } = req.file;
            const imagem = `upload/${filename}`;
            await modelUsers.updateImage(id, imagem);
            return res.status(200).json({
                mensage: 'Imagem atualizada com sucesso',
                imagem
            })
        } catch (error) {
            console.error(error);
            let message = 'Erro de servidor!';
            return res.status(500).json({ message });
        }
    }
}


export default UserController;
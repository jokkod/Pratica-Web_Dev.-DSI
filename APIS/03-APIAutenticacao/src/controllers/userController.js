import modelUsers from '../models/user.js';

class UserController {
    static async findUsers(req,res){
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
}

export default UserController;
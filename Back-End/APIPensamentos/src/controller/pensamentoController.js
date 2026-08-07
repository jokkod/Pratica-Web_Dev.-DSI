import modelThought from '../models/pensamento.js';

class PensamentosController {
    // Criação de métodos estáticos (não necessitários de instanciação)
    static async listThought(req, res){
        try {
            const ThoughtList = await modelThought.findPensamentos();
            return res.status(200).json(ThoughtList);
        } catch (error) {
            console.error(error)
            let message = 'Erro interno no servidor'
            return res.status(500).json({message});
        }
    }

    static async CreateThought(req, res){
        try {
            const {descricao, autoria} = req.body;

            //Validação de campos obrigatórios
            if(!descricao || !autoria) {
                return res.status(400).json({
                    message: "Todos os campos são obrigatórios."
                })
            }

            const register = await modelThought.createPensamentos(descricao, autoria)
            return res.status(201).json({
                message: "Pensamento Criado com Sucesso!",
                id: register.insertId
            })
        } catch (error) {
            console.error(error);
            let message = 'Erro interno no servidor';
            return res.staus(500).json(message);
        }
    }

    static async findThought(req, res) {
        try {
            const {id} = req.params;
            // Verificando se o id é um número
            if(isNaN) {
                return res.status(400).json({
                    message: "Id precisa ser um número!"
                })
            }
            const findId = await modelThought.searchId(id);
            //Verificando se o id foi encontrado, ou seja, se ele existe
            if(typeof id === "undefined") {
                return res.status(404).json({
                    message: "Id não encontrado!"
                })
            }
            return res.status(200).json(findId);
        } catch (error) {
            console.error(error);
            let message = 'Erro interno no servidor.';
            return res.status(500).json({message});
        }
    }
}

export default PensamentosController;
// Função auxiliar de verificação
async function verificaRespostas(response) {
    if (!response.ok) {
        //throw new Error("Erro na requisição dos dados");
        throw new Error(`Erro http: ${response.status}`);

    }

    return response
}

const url_base = 'http://localhost:3000/pensamentos'

const app = {

    // Usando o método GET
    async requisitarApi() {
        try {
            const response = await fetch(`${url_base}`)
            await verificaRespostas(response)
            return response.json()
        } catch (error) {
            alert(`Erro ao listar pensamentos: ${error.message}`)
            console.log(error.name)
        }
    },

    // Usando método POST - criação de dados ou registros
    async criarRegistro(pensamento) {
        try {
            const response = await fetch(`${url_base}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });

            await verificaRespostas(response);
            return response.json();
        } catch (error) {
            alert(`Erro ao criar pensamento: ${error.message}`);
            console.log(error.name);
        }
    },

    // Usando método GET para localizar o ID que vai ser atualizado
    async buscarRegistro(id) {
        try {
            const response = await fetch(`${url_base}/${id}`);
            await verificaRespostas(response);
            return response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamento: ${error.message}`);
            console.log(error.name);
        }
    },

    // Usando método PUT ou PATCH
    async editarRegistro(pensamento) {
        try {
            const response = await fetch(`${url_base}/${pensamento.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(pensamento)
                }
            );
            await verificaRespostas(response);
            return response.json();
        } catch (error) {
            alert(`Erro ao atualizar pensamento: ${error.message}`)
            console.log(error.name);
        }
    },

    // Usando método DELETE
    async deleteRegistro() {
        try {
            const response = await fetch(`${url_base}`,
                {
                    method: "DELETE"
                }
            )

            await verificaRespostas(response)
            return response.json()
        } catch (error) {
            alert(`Erro ao excluir pensamento: ${error.message}`)
            console.log(error.name)
        }
    }
    
}

export default app;
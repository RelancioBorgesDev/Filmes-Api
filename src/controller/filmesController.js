import filmes from '../../fakeDataBase/filmes.js'

class FilmesController {
    static listarFilmes (req, res){
        let filmesListados = filmes.map((filmes,index) => {
            return filmes
        })
        
        res.json(filmesListados)
    }

    static async listarFilmePorId(req, res){
        const { id } = req.params
        let filmeEspecifico = await filmes.find(filme => filme.id == id)
       
        res.json(filmeEspecifico)
    }

    static async criarNovoFilme (req, res){
        const {id, nomeFilme} = req.body

        const novoFilme = {
            id,
            nomeFilme,
        }

        await filmes.push(novoFilme)
        res.status(201).json({message: "Filme criado com sucesso !"})
    }

    static async atualizarFilme(req, res){
        const {id} = req.params
        const {nomeFilme} = req.body
        
        const filmeIndex = filmes.findIndex(filme => filme.id == id)
        filmes[filmeIndex] = {
            ...filmes[filmeIndex],
            nomeFilme
        }

        res.status(200).json({message: "Filme atualizado com sucesso !"})

    }

    static async deletarFilme(req, res){
        const {id} = req.params

        const filmeIndex = filmes.findIndex(filme => filme.id == id)
        filmes.splice(filmeIndex, 1)

        res.status(200).json({message: "Filme deletado com sucesso !"})
    }
}

export default FilmesController
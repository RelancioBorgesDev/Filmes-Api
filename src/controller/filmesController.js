import filmes from '../../fakeDataBase/filmes.js'

class FilmesController {
    static listarFilmes (req, res){
        let filmesListados = filmes.map((filmes,index) => {
            return filmes
        })
        
        res.json(filmesListados)
    }

    static listarFilmePorId(req, res){
        let { id } = req.params
        let filmeEspecifico = filmes[id - 1]
        
        res.json(filmeEspecifico)
    }
}

export default FilmesController
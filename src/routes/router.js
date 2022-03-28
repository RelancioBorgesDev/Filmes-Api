import express from 'express';
import filmesController from '../controller/filmesController.js'

const router = express.Router();

router.route("/")
.get((req, res) => res.send("Filmes Root"))

router.route("/filmes")
.get(filmesController.listarFilmes)
.post(filmesController.criarNovoFilme)

router.route("/filmes/:id")
.get(filmesController.listarFilmePorId)
.put(filmesController.atualizarFilme)
.delete(filmesController.deletarFilme)

export default router
 
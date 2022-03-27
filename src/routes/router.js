import express from 'express';
import filmesController from '../controller/filmesController.js'

const router = express.Router();

console.log()
 
router.route("/").get((req, res) => res.send("Filmes Root"))
router.route("/filmes").get(filmesController.listarFilmes)
router.route("/filmes/:id").get(filmesController.listarFilmePorId)

export default router
 
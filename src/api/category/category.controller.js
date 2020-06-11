import express from "express";
import CategoryProvider from "./category.provider";
var router = express.Router();

router.post("/category",
  /* Guardar registro */
  async (req, res) => {
    try {
      let user = await CategoryProvider.Save(req.body)
      res.status(200).send(user)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.put('/category',
  /* Actualiza la data de un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await CategoryProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.delete('/category',
  /* Eliminar un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let data = await CategoryProvider.Delete(id)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)


router.get('/category/list',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await CategoryProvider.ListAll()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
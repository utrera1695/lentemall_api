import express from "express";
import crystalProvider from "./crystal.provider";
var router = express.Router();

router.post("/crystal",
  /* Guardar registro */
  async (req, res) => {
    try {
      let user = await crystalProvider.Save(req.body)
      res.status(200).send(user)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.put('/crystal',
  /* Actualiza la data de un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await crystalProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.get('/crystal/type',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await crystalProvider.GetByType()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/crystal/all',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await crystalProvider.GetAll()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.delete('/crystal',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await crystalProvider.Delete(req.query.id)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
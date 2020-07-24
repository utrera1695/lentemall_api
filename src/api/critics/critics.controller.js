import express from "express";
import criticsProvider from "./critics.provider";
var router = express.Router();

router.post("/critics",
  /* Guardar registro */
  async (req, res) => {
    try {
      let user = await criticsProvider.Save(req.body)
      res.status(200).send(user)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.put('/critics',
  /* Actualiza la data de un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await criticsProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.get('/critics/list',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await criticsProvider.ListAll()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.get('/critics/user',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await criticsProvider.GetByUser(req.query.user)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
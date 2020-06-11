import express from "express";
import OrderProvider from "./order.provider";
var router = express.Router();

router.post("/order",
  /* Guardar registro */
  async (req, res) => {
    try {
      let data = await OrderProvider.Save(req.body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.put('/order',
  /* Actualiza la data de un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await OrderProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.delete('/order',
  /* Eliminar un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let data = await OrderProvider.Delete(id)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)


router.get('/order/list',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await OrderProvider.ListAll()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/order/list/user',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let user = req.query.user
      let data = await OrderProvider.ListAll(user)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
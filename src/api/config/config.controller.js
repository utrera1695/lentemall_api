import express from "express";
import ConfigProvider from "./config.provider";
var router = express.Router();

router.put('/config',
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await ConfigProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.delete('/config',
  async (req, res) => {
    try {
      let id = req.query.id
      let data = await ConfigProvider.Delete(id)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)


router.get('/config',
  async (req, res) => {
    try {
      let data = await ConfigProvider.Get()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
import express from "express";
import BrandsProvider from "./brands.provider";
var router = express.Router();

router.post("/brands",
  async (req, res) => {
    try {
      let user = await BrandsProvider.Save(req.body)
      res.status(200).send(user)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.put('/brands',
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await BrandsProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.delete('/brands',
  async (req, res) => {
    try {
      let id = req.query.id
      let data = await BrandsProvider.Delete(id)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)


router.get('/brands/list',
  async (req, res) => {
    try {
      let data = await BrandsProvider.ListAll()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
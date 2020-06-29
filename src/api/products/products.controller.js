import express from "express";
import ProductProvider from "./products.provider";
var router = express.Router();

router.post("/product",
  /* Guardar registro */
  async (req, res) => {
    try {
      let product = await ProductProvider.Save(req.body)
      res.status(200).send(product)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.put('/product',
  /* Actualiza la data de un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let body = req.body
      let data = await ProductProvider.Update(id, body)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.put('/product/change_status',
  /* Eliminar un usuario */
  async (req, res) => {
    try {
      let id = req.query.id
      let status = req.body.status
      let data = await ProductProvider.Delete(id, status)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)

router.get('/product',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.Get(req.query.id)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/list',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListAll()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/list/category',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListByCategory(req.query.category)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/list/type',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListByType(req.query.type)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/list/brand',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListByBrand(req.query.brand, req.query.category)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/list/noavailable',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListNoAvailable()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/list/exhausted',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListExhausted()
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
router.get('/product/brands',
  /* Listar todos los desarrolladores */
  async (req, res) => {
    try {
      let data = await ProductProvider.ListBrandsInCategory(req.query.category)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
)
export default router;
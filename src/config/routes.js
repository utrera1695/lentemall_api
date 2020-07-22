import express from "express";
import UserController from '../api/user/user.controller'
import CategoryController from '../api/category/category.controller'
import ProductController from '../api/products/products.controller'
import OrderController from '../api/order/order.controller'
import CriticsController from "../api/critics/critics.controller";
var router = express.Router();

router.use('/api', UserController)
router.use('/api', CategoryController)
router.use('/api', ProductController)
router.use('/api', OrderController)
router.use('/api', CriticsController)
export default router;
import express from "express";
const router = express.Router();

import {
  getAllCartItemCtrl,
  AddToCartCtrl,
  deleteFromCartByIdCtrl,
} from "../controllers/cart.controller.js";
router.get("/", getAllCartItemCtrl);
router.post("/:userId", AddToCartCtrl);
router.delete("/:id", deleteFromCartByIdCtrl);
export default router;

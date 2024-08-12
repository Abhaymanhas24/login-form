import express from "express";
const router = express.Router();

import {
  getAllCartItemCtrl,
  AddToCartCtrl,
} from "../controllers/cart.controller.js";
router.get("/", getAllCartItemCtrl);
router.post("/", AddToCartCtrl);
router.delete("/:id", deleteFromCartByIdCtrl);
export default router;

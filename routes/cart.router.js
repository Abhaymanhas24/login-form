import express from "express";
const router = express.Router();

import {
  getAllCartItemCtrl,
  AddToCartCtrl,
  deleteFromCartByIdCtrl,
  tocheckuserid,
} from "../controllers/cart.controller.js";
router.get("/", getAllCartItemCtrl);
router.post("/:userId", AddToCartCtrl);
router.delete("/:id", deleteFromCartByIdCtrl);
router.get("/check/:userId", tocheckuserid);
export default router;

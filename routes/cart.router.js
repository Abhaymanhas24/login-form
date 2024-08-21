import express from "express";
const router = express.Router();
import { auth } from "../middleware/auth.middleware.js";
import {
  getAllCartItemCtrl,
  AddToCartCtrl,
  deleteFromCartByIdCtrl,
  tocheckuserid,
} from "../controllers/cart.controller.js";
router.get("/", auth, getAllCartItemCtrl);
router.post("/:userId", auth, AddToCartCtrl);
router.delete("/:id", auth, deleteFromCartByIdCtrl);
router.get("/check/:userId", tocheckuserid);
export default router;

import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import {
  AddProductCtrl,
  getAllProductCtrl,
  updateProductByIdctrl,
  deleteProductByIdCtrl,
} from "../controllers/product.controller.js";
const router = express.Router();
router.get("/", auth, getAllProductCtrl);
router.post("/", AddProductCtrl);
router.put("/:id", updateProductByIdctrl);
router.delete("/:id", deleteProductByIdCtrl);
export default router;

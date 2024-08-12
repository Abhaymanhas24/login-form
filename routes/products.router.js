import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  AddProductCtrl,
  getAllProductCtrl,
  updateProductByIdctrl,
} from "../controllers/product.controller.js";
const router = express.Router();
router.get("/", getAllProductCtrl);
router.post("/", AddProductCtrl);
router.put("/:id", updateProductByIdctrl);
export default router;

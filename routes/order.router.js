import express from "express";
const router = express.Router();
import {
  getAllOrderCtrl,
  AddToOrderCtrl,
} from "../controllers/order.controller.js";
router.get("/", getAllOrderCtrl);
router.post("/:Id", AddToOrderCtrl);
export default router;

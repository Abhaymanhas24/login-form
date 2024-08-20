import express from "express";
import { createUserctr, loginUserctr } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", createUserctr);
router.post("/login", loginUserctr);
export default router;

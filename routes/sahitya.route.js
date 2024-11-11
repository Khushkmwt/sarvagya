import { Router } from "express";
import { geetachapter } from "../controller/sahitya.controller.js";
const router = Router()
router.get("/geeta",geetachapter)
export default router
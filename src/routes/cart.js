import { Router } from "express";
import { addCart, list } from "../controllers/cart";

const router = Router()

router.get("/cart/:user_id", list);
router.post("/cart/:user_id", addCart);

export default router;
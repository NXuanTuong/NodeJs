import { Router } from "express";
import { create } from "../controllers/category";

const router = Router();

router.post("/category", create)

export default router;
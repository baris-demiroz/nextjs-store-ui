import { Router } from "express";
import { getAllProducts, getProduct } from "./product.controller";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id",getProduct);

export default router;
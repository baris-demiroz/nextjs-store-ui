import { Request, Response } from "express";
import { getProductById, getProducts } from "./product.service";

export const getAllProducts = (req: Request, res: Response) => {
  const products = getProducts();

  res.status(200).json(products);
};


export const getProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const product = getProductById(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
};
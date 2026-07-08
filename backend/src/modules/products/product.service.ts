import { findAllProducts, findProductById } from "./product.repository";
import { Product } from "./product.types";

export const getProducts = (): Product[] => {
  return findAllProducts();
};

export const getProductById = (id: number) => {
  return findProductById(id);
};
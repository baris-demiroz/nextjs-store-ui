import { api } from "./client";
import type { Product } from "@/src/types/product";

export const getProducts = () => {
  return api<Product[]>("/products");
};

export const getProduct = (id: number) => {
  return api<Product>(`/products/${id}`);
};
import express from "express";
import productRoutes from "./modules/products/product.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend çalışıyor 🚀",
  });
});

app.use("/products", productRoutes);

export default app;
import {
  addNewProduct,
  deleteProductById,
  getProductById,
  getProductsList,
  updateProductById,
} from "../../controllers/products";
import { Router } from "express";

const router = Router();

router.get("/products", getProductsList);
router.post("/addproduct", addNewProduct);
router.get("/product/:id", getProductById);
router.delete("/deleteproduct/:id", deleteProductById);
router.put("/updateproduct/:id", updateProductById);

export default router;

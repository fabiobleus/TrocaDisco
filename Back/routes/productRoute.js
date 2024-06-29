import { Router } from "express";
import * as productController     from  "../controller/productController.js";
import { auth } from "../middlewares/auth.js";

const productRouter = Router();

productRouter.post("/product",auth, productController.productCreate);
productRouter.put("/product/:id", auth, productController.productUpdate);
productRouter.delete("/product/:id", auth,  productController.productDelete);

productRouter.get("/product/:id", productController.productGet);
productRouter.get("/product/name/:productname", productController.productFindName);
productRouter.get("/product/category/:category", productController.productFindCategory);
productRouter.get("/product/category/:category/:id", productController.productFindCategory);
productRouter.get("/user/product", productController.productFindUser);
productRouter.get("/products", productController.productGetAll);

export default productRouter;
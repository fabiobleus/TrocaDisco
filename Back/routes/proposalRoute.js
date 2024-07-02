import { Router } from "express";
import * as proposalController     from  "../controller/proposalController.js";
import { auth } from "../middlewares/auth.js";

const proposalRouter = Router();

proposalRouter.post("/proposal", proposalController.createProposal);
proposalRouter.put("/proposal", proposalController.alterProposal);
// proposalRouter.delete("/product/:id", auth, productController.productDelete);

proposalRouter.get("/proposal/:id", proposalController.getAllProposal);
// proposalRouter.get("/product/name/:productname", productController.productFindName);
// proposalRouter.get("/product/user/:iduser", productController.productFindUser);
// proposalRouter.get("/products", productController.productGetAll);

export default proposalRouter;
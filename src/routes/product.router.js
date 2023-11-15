import { Router } from "express";
import {
     addProductFront,
     getAllProducts,
     //getProductsPaginate, 
     addProduct,
     getProductById,
     updateProduct,
     deleteProduct
} from "../controllers/products.controler.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";
import { isAuthenticated } from "../middlewares/authenticate.middleware.js";


const productRouter = Router();

//productRouter.get("/", getPaginatedProducts);
productRouter.get("/", getAllProducts);
productRouter.get("/new", addProductFront);
productRouter.post("/new",isAuthenticated, isAdmin, addProduct);
productRouter.get("/:pid", getProductById);
productRouter.put("/:pid",isAuthenticated, isAdmin, updateProduct);
productRouter.delete("/:pid",isAuthenticated, isAdmin, deleteProduct);


export default productRouter 
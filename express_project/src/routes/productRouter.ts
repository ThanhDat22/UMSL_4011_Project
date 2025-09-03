import { Router } from "express";
import { 
    getProductController,
    getProductsController,
    createProductController,
    deleteProductController,
    editProductController

} from '../controllers';

export const productRouter = Router();

productRouter.get('/', getProductsController);
productRouter.get('/:id', getProductController);
productRouter.post('/', createProductController);
productRouter.delete('/:id', deleteProductController);
productRouter.put('/:id', editProductController);

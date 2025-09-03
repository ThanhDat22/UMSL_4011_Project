import e, { NextFunction, Request, Response } from "express";
import { getProduct, getProducts, createProduct, deleteProduct, editProduct } from "../services";

export const getProductController = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;

    
    
    const result = await getProduct(id);

    if (!result) {
        res.status(404).send('Product not found');
        next();
        return;
    }

    res.send(result).status(200);
    next();
}

export const getProductsController = async (req: Request, res: Response, next: NextFunction) => {
    const result = await getProducts();
    res.send(result).status(200);   
}

export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
    const  product = req.body;

    const result = await createProduct(product);

    res.send({
        product: result,
        success: true,
        msg: ''
    });
}

export const deleteProductController = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    
    const result = await deleteProduct(id);

    if (result) {
        res.send('Successfully deleted product').status(200);
    } else {
        res.status(404).send('Product not found');
    }
}

export const editProductController = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const product = req.body;

    const result = await editProduct(id, product);

    if (result) {
        res.send('Successfully edited product').status(200);
    } else {
        res.status(404).send('Product not found');
    }
}
import { get } from 'http';
import { Product, ProductModel } from '../model';

export const getProducts = async (): Promise<Product[]> => {
  const result: Product[] = await ProductModel.find();
  return result;
}

export const getProduct = async (id: string): Promise<Product | null> => {
  const result: Product | null = await ProductModel.findById(id);
  return result;
}

type CreateProductProps = Product & {
  id: never;
}

export const createProduct = async (product: CreateProductProps) => {
  const newProduct = new ProductModel(product);
  const result = await newProduct.save();
  return result;
}

export const deleteProduct = async (id: string): Promise<boolean> => {
  await ProductModel.findByIdAndDelete(id);

  return true;
}


export const editProduct = async (id: string, product: CreateProductProps) => {
  await ProductModel.findByIdAndUpdate(id, product, { runValidators: true});

  const result = await getProduct(id);

  return result;
}
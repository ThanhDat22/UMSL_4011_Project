import { Schema, model } from 'mongoose';

export interface Product {
    id: number;
    name: string;
    price: number;
    wholesalePrice: number;
    quantity: number;
}

const SalesHistorySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    price: Number
});

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than or equal to 0'],
        max: [100000, 'Price must be less than or equal to 100000']
    },
    wholesalePrice: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than or equal to 0'],
        max: [100000, 'Price must be less than or equal to 100000']
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'That is impossible'],
        default: 0
    },
    updated: {
        type: Date,
        default: Date.now
    },
    salesHistory: [SalesHistorySchema]
});

export const ProductModel = model('Product', ProductSchema);

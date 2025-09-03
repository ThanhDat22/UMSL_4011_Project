import { Button, Paper, Switch } from "@mui/material";
import { useState } from "react";


interface ProductCardProps {
    "name": string,
    "price": number,
    "wholesalePrice": number,
    "quantity": number;
    onDelete: () => void;
}

export const ProductCard = ({ 
    name, 
    price, 
    wholesalePrice, 
    quantity,
    onDelete 
}: ProductCardProps) => { 
    const [deleteEnabled, setDeleteEnabled] = useState(false);
    return (
        <Paper style={{ padding: '10px', marginBottom: '5px' }}>

            <div>Product: {name}</div>
            <div>Price: ${price}</div>
            <div>Cost: ${wholesalePrice}</div>
            <div>Quantity: {quantity}</div>
            <Switch
                checked={deleteEnabled}
                onChange={(e) => setDeleteEnabled(e.target.checked)}
            />


            <Button 
                disabled={!deleteEnabled}
                variant='outlined' 
                color='error' 
                onClick={onDelete}>
                    Delete
            </Button>
        </Paper>
    )
}

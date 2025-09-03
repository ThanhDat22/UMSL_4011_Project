import { Paper, Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const NewProduct = () => {

    const navigate = useNavigate();


    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [wholesalePrice, setWholesalePrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)

    const saveEnabled = name !== "" && price > 0 && wholesalePrice > 0 && quantity >= 0;

    const handleSave = async () => {
        const url = "http://localhost:3000/product";
        await axios.post(url, {
            name,
            price,
            wholesalePrice,
            quantity
        });

        navigate("/");
    }

    return (
        <Paper style={{ padding: "10px"}} >
            <div>
                <TextField 
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> 
            </div>

            <div>
                <TextField 
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                /> 
            </div>

            <div>
                <TextField 
                    label="Wholesale Price"
                    type="number"
                    value={wholesalePrice}

                    onChange={(e) => setWholesalePrice(Number(e.target.value))}
                /> 
            </div>

            <div>
                <TextField 
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                /> 
            </div>

            <Button
                variant="outlined"
                disabled={!saveEnabled}
                onClick={handleSave}
            >Save
            </Button>
            
        </Paper>

        
    )
}
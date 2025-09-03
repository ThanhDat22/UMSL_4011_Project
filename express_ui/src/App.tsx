import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ProductCard } from './components'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

interface Product {
  _id: string,
  "name": string,
  "price": number,
  "wholesalePrice": number,
  "quantity": number;
}

function App() {

  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([])

  const getProducts = async () => {
    const url = 'https://localhost:3000/product';

    const result = await axios.get(url);
    setProducts(result.data);
  };

  const deleteProduct = async (id: string) => {
    const url = `https://localhost:3000/product/${id}`;

    await axios.delete(url);
    await getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <Button
          onClick={() => navigate('/create')}
        >Create New Product
        </Button>
      </div>
      {products.length === 0 
      ? 'No Products found' 
      : products.map((product) => {
        return (
          <ProductCard key={product._id} {...product} onDelete={async() => {
            await deleteProduct(product._id);
          }} />
        );
      })}
    </div>  
    );
}

export default App

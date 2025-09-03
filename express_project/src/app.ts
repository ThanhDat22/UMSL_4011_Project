import express, { Request, Response } from 'express';
import cors from 'cors';
// TODO import routes
import { productRouter } from './routes';

// TODO import middleware
import { removePoweredByHeader } from './middleware';

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Middleware
app.use(removePoweredByHeader); // Remove the X-Powered-By header

// Routes
app.use('/product', productRouter); // Use the product router for all /products routes

// Endpoints
app.get('/ping', (req: Request, res: Response) => {
    res.send('pong').status(200);
});

app.get('/ping2', (req: Request, res: Response) => {
    res.send('pong2').status(200);
});

export default app;
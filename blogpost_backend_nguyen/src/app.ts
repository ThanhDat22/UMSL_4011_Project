import express, { Request, Response } from 'express';
import cors from 'cors';

// TODO import routes
import { blogpostRouter } from './routes';

// TODO import middleware
import { removePoweredByHeader } from './middleware';


const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use(removePoweredByHeader);

// Routes
app.use('/blogpost', blogpostRouter);

// Endpoints

export default app;
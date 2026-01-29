import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { createItem, deleteItemById, getItemById, getItems, updateItem } from './controllers/itemController';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/items', getItems);

app.get('/items/:id', getItemById);

app.post('/items', createItem);

app.put('/items/:id', updateItem);

app.delete('/items/:id', deleteItemById);

app.use(errorHandler);

export default app;
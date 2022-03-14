import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use('/categories', categoriesRoutes); // use route from routes

app.listen(3333, () => console.log('server is running'));

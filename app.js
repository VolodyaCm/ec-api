// import 'module-alias/register.js';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Product from './models/product.js';
import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';
import categoriesRouter from './routes/categories.js';
import ordersRouter from './routes/orders.js';
import { authJWT } from './helpers/jwt.js';
import { errorHandler } from './helpers/errorHandler.js';

const { MONGO_URI, API_URL } = process.env;

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(authJWT());
app.use(errorHandler)

app.use(`${API_URL}/products`, productsRouter);
app.use(`${API_URL}/users`, usersRouter);
app.use(`${API_URL}/categories`, categoriesRouter);
app.use(`${API_URL}/orders`, ordersRouter);


mongoose.connect(MONGO_URI)
  .then(() => console.log('Database connection is succesfull'))
  .catch((err) => console.log(err))

app.listen(3000, () => console.log('Server is running on port 3000'));

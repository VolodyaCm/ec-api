import mongoose from 'mongoose';
import ProductModel from './product',

const { Schema, model } = mongoose;

const CategorySchema = Schema({
  id: String,
  product: ProductModel,
  quantity: Number
})

const Ctegory = model('category', CategorySchema);

export default Ctegory

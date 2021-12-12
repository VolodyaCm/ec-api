import mongoose from 'mongoose';
import ProductModel from './product',

const { Schema, model } = mongoose;

const OrderItemShema = Schema({
  id: String,
  product: ProductModel,
  quantity: Number
})

const OrderItem = model('order-item', OrderItemShema);

export default OrderItem

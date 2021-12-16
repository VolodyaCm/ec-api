import mongoose from 'mongoose';
import ProductModel from './product.js';

const { Schema, model } = mongoose;

const OrderItemShema = Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }
})

const OrderItem = model('OrderItem', OrderItemShema);

export default OrderItem

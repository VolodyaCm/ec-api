import mongoose from 'mongoose';
import UserModel from './user';
import OrderItemModel from './order-item';

const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  shippingAddress1: String,
  shippingAddress2: String,
  city: String,
  zip: String,
  country: String,
  phone: Number,
  status: String,
  totalPrice: Number,
  dateOrdered: Date,
  user: UserModel,
  orderItems: OrderItemModel,
})

const Order = model('order', OrderSchema);

export default Order;

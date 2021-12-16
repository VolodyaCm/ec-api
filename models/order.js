import mongoose from 'mongoose';
// import UserModel from './user';
import OrderItemModel from './orderItem.js';

const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  orderItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderItem',
    required: true,
  }],
  shippingAddress1: {
    type: String,
    required: true,
  },
  shippingAddress2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Pending',
  },
  totalPrice: {
    type: Number,
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

OrderSchema.virtual('id').get(function () {
  return this._id?.toHexString();
});

OrderSchema.set('toJSON', {
  virtuals: true,
})

const Order = model('order', OrderSchema);

export default Order;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = model('product', ProductSchema);

export default Product;

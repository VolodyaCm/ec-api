import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('product', ProductSchema);

export default Product;

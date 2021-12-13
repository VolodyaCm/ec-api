import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDescription: {
    type: String,
    required: true,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  images: [{
    type: String,
  }],
  brand: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Product = model('Product', ProductSchema);

ProductSchema.virtual('id').get(function () {
  return this._id?.toHexString();
});

ProductSchema.set('toJSON', {
  virtuals: true,
})

export default Product;

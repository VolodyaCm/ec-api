import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CategorySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
})

const Category = model('Category', CategorySchema);

export default Category;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: String,
  email: String,
  passwordHash: String,
  street: String,
  apartment: String,
  city: String,
  zip: String,
  country: String,
  phone: Number,
  isAdmin: Boolean,
});

const User = model('user', UserSchema);

export default User;

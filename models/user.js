import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    default: '',
  },
  apartment: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  zip: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
})

UserSchema.set('toJSON', {
  virtuals: true,
})

const User = model('User', UserSchema);

export default User;

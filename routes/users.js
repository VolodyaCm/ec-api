import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    const users = await User.find().select('-passwordHash');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
    })
  }
})

router.get(`/:id`, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-passwordHash');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      country: req.body.country,
      apartment: req.body.apartment,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
    });

    const record = await user.save()
    res.status(200).json(record);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
    })
  }
})

export default router;

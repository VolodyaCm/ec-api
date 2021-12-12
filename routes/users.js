import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
    })
  }
})

export default router;

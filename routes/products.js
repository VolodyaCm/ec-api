import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500)
  }
});

router.post('/', async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });

  try {
    const record = await product.save();
    res.status(201).json(record)
  } catch (error) {
    res.status(500).json({
      success: false,
    })
  }
})

export default router;

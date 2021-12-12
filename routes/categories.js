import express from 'express';
import CategoryModel from '../models/category.js';

const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      success: false,
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
    })
  }
})

router.post('/', async (req, res, next) => {
  const category = new CategoryModel({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  try {
    const record = await category.save();
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({
      success: false,
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updated = await CategoryModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    },  { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await CategoryModel.findByIdAndRemove(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
})

export default router;

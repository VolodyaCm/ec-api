import express from 'express';
import OrderModel from '../models/order.js';
import OrderItemModel from '../models/orderItem.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const order = await OrderModel.find()
      .populate('user', 'name')
      .sort({ dateOrdered: -1 });
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id)
      .populate('user', 'name')
      .populate({ path: 'orderItems', populate: 'product' });
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
})

router.post('/', async (req, res) => {
  try {
    let orderItemsIds = req.body.orderItems.map(async (item) => (
      (await new OrderItemModel({
        quantity: item.quantity,
        product: item.product,
      }).save())._id
    ));

    orderItemsIds = await Promise.all(orderItemsIds);

    let order = new OrderModel({
      orderItems: orderItemsIds,
      shippingAddress1: req.body.shippingAddress1,
      shippingAddress2: req.body.shippingAddress2,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      phone: req.body.phone,
      status: req.body.status,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
    });

    order = await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    }, { new: true });

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const order = await OrderModel.findByIdAndDelete(req.params.id);
    await Promise.all(order.orderItems.map(
      (item) => OrderItemModel.findByIdAndRemove(item)
    ));
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
})

export default router;

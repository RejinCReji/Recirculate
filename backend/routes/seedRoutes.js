import express from 'express';
import sampleData from '../sampleData.js';
import Product from '../models/productModels.js';
import User from '../models/usersModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(sampleData.products);
  await User.remove({});
  const createdUsers = await User.insertMany(sampleData.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;

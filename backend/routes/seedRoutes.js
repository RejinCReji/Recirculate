import express from 'express';
import sampleData from '../sampleData.js';
import Product from '../models/productModels.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(sampleData.products);
  res.send({ createdProducts });
});
export default seedRouter;

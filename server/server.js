import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  return res.sendFile('products.json', { root: '.' });
});

app.post('/api/checkout', (req, res) => {
  const order = req.body;
  console.log('Order received:', JSON.stringify(order, null, 2));
  return res.status(201).json({ message: 'Order placed successfully' });
});

export default app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

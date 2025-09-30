import request from "supertest";
import app from "./server.js";

describe('GET /api/products', () => {
  it('should return products.json', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /api/checkout', () => {
  it('should accept an order and respond with success', async () => {
    const order = {
      items: [
        { id: 1, name: 'Product A', quantity: 2 },
        { id: 2, name: 'Product B', quantity: 1 }
      ],
      total: 500
    };

    const res = await request(app)
      .post('/api/checkout')
      .send(order)
      .set('Content-Type', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ message: 'Order placed successfully' });
  });
});

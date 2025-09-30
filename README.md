# Simple Shopping Cart (MERN - Minimal)

This repository contains a minimal e-commerce sample built with a Node/Express backend and a React (Vite) frontend. It uses Tailwind CSS for styling and React Context for cart state.

Features
- GET /api/products returns a hardcoded product list
- POST /api/checkout accepts cart items and logs the order
- Frontend: product grid, cart modal, quantity controls, localStorage persistence, checkout flow


Quickstart

1) Start the backend

```bash
cd server
npm install
# default: PORT 5000
npm start
```

If port 5000 is in use, set a different port:

```bash
PORT=3000 npm start
```

2) Start the frontend

In a separate terminal:

```bash
cd client
npm install
# start Vite dev server (client runs on http://localhost:3000)
npm run dev
```

The Vite dev server proxies `/api` to the backend. You can control the proxy target using the environment variable `VITE_API_URL`. By default it will proxy to `http://localhost:3000` (this project was updated to prefer 3000 as the backend during local dev). To explicitly point the client at another backend port, run:

```bash
VITE_API_URL=http://localhost:3000 npm run dev
```

Or if your backend runs on port 5000:

```bash
VITE_API_URL=http://localhost:5000 npm run dev
```

Running tests (backend)

```bash
cd server
npm install
npm test
```

Notes & next steps
- No database is used — products are hardcoded.
- For production, serve the built client and set proper CORS and environment configs.
- You can extend product fields, add validation on checkout, and integrate a payment provider.

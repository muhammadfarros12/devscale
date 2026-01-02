import { Hono } from 'hono'

const app = new Hono()

// GET /products
app.get('/products', (c) => {
  return c.json({ products: []})
})

// GET /products/<id>
app.get('/products/:id', (c) => {
  const productId = c.req.param('id')
  return c.json({ productId })
})

// POST /products
app.post('/products', (c) => {
  return c.json({ message: 'Product created' }, 201)
})

// PUT /products/<id>
app.put('/products/:id', (c) => {
  const productId = c.req.param('id')
  return c.json({ message: `Product ${productId} updated` }, 200)
})

// DELETE /products/<id>
app.delete('/products/:id', (c) => {
  const productId = c.req.param('id')
  return c.json({ message: `Product ${productId} deleted` }, 200)
})

// PATCH /products/<id>
app.patch('/products/:id', (c) => {
  const productId = c.req.param('id')
  return c.json({ message: `Product ${productId} patched` }, 200)
})


export default app

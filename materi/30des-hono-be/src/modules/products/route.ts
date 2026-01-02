import { Hono } from "hono";

const productRoute = new Hono()

productRoute.get('/', (c) => {
    return c.json({ products: [] })
})

// GET /products/<id>
productRoute.get('/:id', (c) => {
    const productId = c.req.param('id')
    return c.json({ productId })
})

// POST /products
productRoute.post('/', (c) => {
    return c.json({ message: 'Product created' }, 201)
})

// PUT /products/<id>
productRoute.put('/:id', (c) => {
    const productId = c.req.param('id')
    return c.json({ message: `Product ${productId} updated` }, 200)
})

// DELETE /products/<id>
productRoute.delete('/:id', (c) => {
    const productId = c.req.param('id')
    return c.json({ message: `Product ${productId} deleted` }, 200)
})

// PATCH /products/<id>
productRoute.patch('/:id', (c) => {
    const productId = c.req.param('id')
    return c.json({ message: `Product ${productId} patched` }, 200)
})


export default productRoute

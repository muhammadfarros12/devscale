import { Hono } from 'hono'
import productRoute from './modules/products/route'

const app = new Hono()

app.route('/products', productRoute)

app.get('/', (c) => {
  return c.json({ message: 'Hello World, this is the root route from hono' })
})

export default app

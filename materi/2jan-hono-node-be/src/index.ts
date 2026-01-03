import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'
import { createProductSchema } from './validation'

// hono menyiapkan adapter untuk menggunakan zod validator untuk validasi body request yang menggunakan zod

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/',zValidator('json', createProductSchema), (c) => {
  const body = c.req.valid('json')

  // proses ke database

  return c.json({ message: 'Your product has been created' })

})

serve({
  fetch: app.fetch,
  port: 8000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'
import { createProductSchema } from './validation'
import { prisma } from './prisma'

// hono menyiapkan adapter untuk menggunakan zod validator untuk validasi body request yang menggunakan zod

// database digunakan untuk menyimpan data secara persisten (lawan kata dari temporary data)
const app = new Hono()

app.get('/', async (c) => {

  const todos = await prisma.todo.findMany()

  return c.json({ todos })
})

app.post('/',zValidator('json', createProductSchema), (c) => {
  const body = c.req.valid('json')

  // proses ke database

  return c.json({ message: 'Your product has been created' })

})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

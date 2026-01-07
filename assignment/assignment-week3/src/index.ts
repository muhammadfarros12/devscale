import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { eventRoute } from './router/event.js'
import { participantRoute } from './router/participant.js'

const app = new Hono()

app.route("/events", eventRoute) // endpoint
app.route("/participants", participantRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

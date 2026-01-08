import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { eventsRoute } from './router/event.js'
import { participantsRoute } from './router/participant.js'

const app = new Hono()

app.route("/events", eventsRoute) // endpoint
app.route("/participants", participantsRoute)

app.get("/", (c) => c.text("test"))

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

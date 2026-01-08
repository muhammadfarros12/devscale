import { Hono } from "hono";
import { prisma } from "../utils/prisma.js";


export const eventsRoute = new Hono()
    .get("/", async (c) => {
        const events = await prisma.event.findMany()
        return c.json({ events })
    })
    .get("/:id", (c) => {
        const id = c.req.param('id')
        return c.json({ event: id })
    })
    .post("/", (c) => {
        return c.json({ event: 'created' })
    })
    .patch(':/id', (c) => {
        const id = c.req.param("id")
        return c.json({ event: id })
    })
    .delete('/:id', (c) => {
        const id = c.req.param("id")
        return c.json({ event: id })
    })
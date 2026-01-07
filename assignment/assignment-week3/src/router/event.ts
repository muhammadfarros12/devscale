import { Hono } from "hono";

export const eventRoute = new Hono().get("/", (c) => {
    return c.json({ event: [] })
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
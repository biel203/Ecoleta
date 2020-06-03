import express from 'express';

const routes = express.Router();
const users = [
    'Natália',
    'Alice',
    'Miguel'
]

routes.get('/', (req, res) => res.json(users));

routes.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    return users[id] ? res.json(users[id]): res.json(users)
});

export default routes;
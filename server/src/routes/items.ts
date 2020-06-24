import express from 'express';
import knex from '../db';

import Item from '../interfaces/Item';

const routes = express.Router();

routes.get('/', async (req, res) => {
    const search = req.query.search ? String(req.query.search) : null;

    try {
        const items = await knex('items').select('*');
        console.log(process.env)
        const serializedItems = items.map((item: Item) => ({
        title: item.title,
        image_url: ``
    }))

        return res.json(serializedItems);

    } catch (err) {

        console.log("#########################")
        console.log("DEU ERRO ")
        console.log("#########################")
        console.log(err)
    }
});

routes.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    return res.json({message: 'todo'})
});
 
routes.post('/', (req, res) => {
    const data = req.body;

    return res.json({message: 'todo'})
});

export default routes;
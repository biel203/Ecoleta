import express from 'express';
import knex from '../db';

const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
        const points = await knex('points').select('*');
        return res.json(points);

    } catch (err) {
        console.log(err)
    }
});

routes.get('/pi', async (req, res) => {
    try {
        const pi = await knex('point_items').select('*');
        return res.json(pi);

    } catch (err) {
        console.log(err)
    }
});

routes.post('/', async (req, res) => {
    const {
        image,
        title,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = req.body;

    const trx = await knex.transaction();

    const [ insertedId ] = await trx('points').insert({
        image: 'image-fake',
        title,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    }).returning("id");

    const pointItems = items.map((item_id: number) => ({
        item_id,
        points_id: insertedId
    }))

    await trx('point_items').insert(pointItems);

    return res.json({status: 200, message: 'Registrado com sucesso!'});
});

export default routes;
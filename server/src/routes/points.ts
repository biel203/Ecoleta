import express from 'express';
import knex from '../db';
import PointController from '../controllers/PointController'

const routes = express.Router();
const pointController = new PointController()

routes.get('/:id', pointController.show); 
routes.post('/', pointController.create);


routes.post('/pi', async (req, res) => {
    try {
        const pi = await knex('point_items').select('*');
        return res.json(pi);

    } catch (err) {
        console.log(err)
    }
});



export default routes;
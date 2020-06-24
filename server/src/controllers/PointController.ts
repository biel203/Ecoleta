import {Request, Response} from 'express';
import knex from '../db';

class PointsController {
    async create(req: Request, res: Response) {
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
        const point = {
            image: 'image-fake',
            title,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        }
        const [ insertedId ] = await trx('points').insert(point).returning("id");
    
        const pointItems = items.map((item_id: number) => ({
            item_id,
            points_id: insertedId
        }))
    
        await trx('point_items').insert(pointItems);
    
        return res.status(200).json({
            message: 'Registrado com sucesso!',
            info: {
            id: insertedId,
            ...point
            }
        });
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const point = await knex('points').where('id', id).first();

        if(!point) {
            return res
            .status(400)
            .json({message: 'POINT_NOT_FOUND'})
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.points_id', id)

        return res
        .status(200)
        .json({
            ...point,
            items
        })
    }
}

export default PointsController;
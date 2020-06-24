import {Request, Response} from 'express';
import knex from '../db';

import Item from '../interfaces/Item'
class ItemController {
    async index(req: Request, res: Response) {
        const search = req.query.search ? String(req.query.search) : null;
    
        try {
            const items = await knex('items').select('*');
            const serializedItems = items.map((item: Item) => ({
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/public/images/${item.image}`
            }))
    
            return res
            .status(200)
            .json(serializedItems);
    
        } catch (err) {
            res
            .status(400)
            .json({
                message: "Erro: ItemController.index", 
                error: err
            })
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const item = await knex('items').where('id', id);

        if (!item) {
            return res
            .status(400)
            .json({message: 'ITEM_NOT_FOUND'})
        }

        return res
        .status(200)
        .json({message: 'FOUND_ITEM_ID', info: item})
    }
}

export default ItemController;
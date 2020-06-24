import express from 'express';

import ItemController from '../controllers/ItemController'

const routes = express.Router();
const itemController = new ItemController();

routes.get('/', itemController.index);
routes.get('/:id', itemController.show);

export default routes;
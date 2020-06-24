import express from 'express';

import items from './items';
import points from './points';

const router = express.Router();

router.use('/items', items);
router.use('/points', points);

export default router

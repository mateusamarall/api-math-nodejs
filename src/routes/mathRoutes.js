import {Router} from 'express';

import MathController from '../controllers/MathController';

const router = new Router();

router.post('/',MathController.store);


export default router;

import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/login', UserController.login);


export default router;
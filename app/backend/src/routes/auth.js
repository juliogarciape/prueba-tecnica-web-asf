import { Router } from 'express';
import authController from '../controllers/authController.js';
import { validateToken } from '../middlewares/validateToken.js';

const router = Router();

router.post('/login', authController.login);
router.get('/validate', validateToken, authController.validate);

export default router;

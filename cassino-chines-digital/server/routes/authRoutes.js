import express from 'express';
import { registerUser, loginUser, getUserBalance } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id/balance', getUserBalance);

export default router;
// authRoutes.js - conteudo base

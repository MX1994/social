import { Router } from 'express'
import { welcome } from '../controllers/index.controller'

const router = Router();

router.route('/')
    .get(welcome);

export default router;
import { Router } from 'express';
import { createResearch, getResearches } from '../controllers/research.controller';

const router = Router();

router.post('/', createResearch);
router.get('/', getResearches);

export default router;
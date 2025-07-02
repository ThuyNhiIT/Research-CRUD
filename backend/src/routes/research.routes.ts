import { Router } from 'express';
import { createResearch, getResearches, getResearcheByUserId} from '../controllers/research.controller';

const router = Router();

router.post('/', createResearch);
router.get('/', getResearches);
router.get('/getByUserId', getResearcheByUserId);

export default router;
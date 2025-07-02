import { Router } from 'express';
import {
  createUser,
  getUsers,
  // updateUser,
  // deleteUser,
} from '../controllers/user.controller';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);

export default router;

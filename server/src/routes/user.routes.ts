import { Router } from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/user.controller'

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

export default router;
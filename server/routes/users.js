import express from 'express'

import { getUser, createUser, deleteUser, editUser } from '../conttrollers/user.js';

const router = express.Router();

router.get('/', getUser)
router.post('/', createUser)
router.delete('/', deleteUser)
router.put('/', editUser)

export default router
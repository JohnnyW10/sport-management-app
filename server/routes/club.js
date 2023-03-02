import express from 'express'

import { getClub, createClub, deleteClub, editClub } from '../conttrollers/club.js';

const router = express.Router();

router.get('/', getClub)
router.post('/', createClub)
router.delete('/', deleteClub)
router.put('/', editClub)

export default router
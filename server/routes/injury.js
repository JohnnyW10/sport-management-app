import express from 'express'

import { getInjury, createInjury, deleteInjury, editInjury } from '../conttrollers/injury.js';

const router = express.Router();

router.get('/', getInjury)
router.post('/', createInjury)
router.delete('/', deleteInjury)
router.put('/', editInjury)

export default router
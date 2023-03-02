import express from 'express'

import { getFinance, createFinance, deleteFinance, editFinance } from '../conttrollers/finance.js';

const router = express.Router();

router.get('/', getFinance)
router.post('/', createFinance)
router.delete('/', deleteFinance)
router.put('/', editFinance)

export default router
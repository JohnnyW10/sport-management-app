import express from 'express'

import { getSchedule, createSchedule, deleteSchedule, editSchedule } from '../conttrollers/schedule.js';

const router = express.Router();

router.get('/', getSchedule)
router.post('/', createSchedule)
router.delete('/', deleteSchedule)
router.put('/', editSchedule)

export default router
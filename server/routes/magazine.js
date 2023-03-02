import express from 'express'

import { getMagazine, createMagazine, deleteMagazine, editMagazine} from '../conttrollers/magazine.js';

const router = express.Router();

router.get('/', getMagazine)
router.post('/', createMagazine)
router.delete('/', deleteMagazine)
router.put('/', editMagazine)

export default router
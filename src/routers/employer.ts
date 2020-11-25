import express from 'express'

import { localLogin } from '../controllers/employerLogin'

const router = express.Router()

router.post('/login', localLogin)

export default router

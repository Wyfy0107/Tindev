import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import 'reflect-metadata'
import passport from 'passport'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import responseHandler from './middlewares/responseHandler'

import jobSeekerRouter from './routers/jobSeeker'
import employerRouter from './routers/employer'
import skillsRouter from './routers/skills'

import { local } from './passport/config'

const app = express()

//**Express configuration*/
app.set('port', 5000)

//**Use common 3rd-party middlewares*/
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

app.use(passport.initialize())
passport.use(local)

app.use(responseHandler)
//**All routers here*/
app.use('/jobSeeker', jobSeekerRouter)
app.use('/employer', employerRouter)
app.use('/skills', skillsRouter)

//**Custom API error handler*/
app.use(apiErrorHandler)
app.use(apiContentType)

export default app

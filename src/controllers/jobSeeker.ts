import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import passport from 'passport'

import {
  NotFoundError,
  UnauthorizedError,
  InternalServerError,
  BadRequestError,
} from '../helpers/apiError'
import JobSeeker from '../entities/JobSeeker.postgres'
import Credential from '../entities/Credential.postgres'

// Auth Controllers for job seeker
export const jobSeekerLocalLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate('local', (error, jobSeeker, info) => {
    if (error) {
      return next(new InternalServerError())
    }
    if (!jobSeeker) {
      if (info.message === 'Invalid email or password') {
        return next(new UnauthorizedError(info.message))
      }
      return next(new NotFoundError(info.message))
    }
    res.status(200).send(jobSeeker)
  })(req, res, next)
}

// Register Job Seeker
export const createJobSeeker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { info, credential } = req.body
    const exists = await Credential.findOne({
      where: { email: credential.email },
    })

    if (exists) {
      next(new BadRequestError(`Email ${credential.email} already exists`))
    }

    credential.password = await bcrypt.hash(credential.password, 8)

    const newCredential = Credential.create({ ...credential })
    const newJobSeeker = JobSeeker.create({
      ...info,
      credentials: newCredential,
    })

    await JobSeeker.save(newJobSeeker)

    res.send('success')
  } catch (error) {
    next(new InternalServerError(error.message))
  }
}

// getting jobSeeker based on matched credentials
export const getJobSeeker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await JobSeeker.find({ relations: ['credentials'] })
    res.json(user)
  } catch (error) {
    console.log(error)
  }
}

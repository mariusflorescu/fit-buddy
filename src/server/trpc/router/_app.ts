// src/server/trpc/router/_app.ts
import { router } from '../trpc'
import { exampleRouter } from './example'
import { authRouter } from './auth'
import { userRouter } from './user'
import { gymRouter } from './gym'
import { trainerRouter } from './trainer'

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  user: userRouter,
  gym: gymRouter,
  trainer: trainerRouter
})

// export type definition of API
export type AppRouter = typeof appRouter

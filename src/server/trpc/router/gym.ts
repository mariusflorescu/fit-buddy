import { router, adminProcedure } from '../trpc'
import { z } from 'zod'

export const gymRouter = router({
  createEntry: adminProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { userId } = input

      await ctx.prisma.entry.create({
        data: {
          userId
        }
      })

      return {
        success: true
      }
    })
})
